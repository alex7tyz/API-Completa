const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("HEADER:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: "Token obrigatório" });
  }

  // aceita com ou sem Bearer
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log("ERRO:", err.message);
    return res.status(401).json({ error: "Token inválido" });
  }
};