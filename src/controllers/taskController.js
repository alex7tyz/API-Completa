const db = require('../database/db');

exports.create = (req, res) => {
  const { title } = req.body;

  db.run(
    "INSERT INTO tasks (title, user_id) VALUES (?, ?)",
    [title, req.userId],
    function (err) {
      if (err) return res.status(400).json(err);
      res.status(201).json({ id: this.lastID });
    }
  );
};
exports.getAll = (req, res) => {
  const { page = 1, limit = 5, completed, order = "ASC" } = req.query;

  const offset = (page - 1) * limit;

  let query = `
    SELECT tasks.*, users.email 
    FROM tasks
    JOIN users ON tasks.user_id = users.id
    WHERE tasks.user_id = ?
  `;

  const params = [req.userId];

  // filtro
  if (completed !== undefined) {
    query += " AND tasks.completed = ?";
    params.push(completed);
  }

  // ordenação
  query += ` ORDER BY tasks.id ${order === "desc" ? "DESC" : "ASC"}`;

  // paginação
  query += " LIMIT ? OFFSET ?";
  params.push(parseInt(limit), parseInt(offset));

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};
exports.update = (req, res) => {
  const { title, completed } = req.body;

  db.run(
    "UPDATE tasks SET title=?, completed=? WHERE id=? AND user_id=?",
    [title, completed, req.params.id, req.userId],
    function () {
      res.json({ updated: this.changes });
    }
  );
};
exports.delete = (req, res) => {
  db.run(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [req.params.id, req.userId],
    function () {
      res.json({ deleted: this.changes });
    }
  );
};