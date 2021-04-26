const jwt = require("jsonwebtoken");

const generateAccessToken = (id, role) => {
  return jwt.sign({ id: id, role: role }, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60,
  });
};

const checkAccessToken = (token) => {
  if (token == null) {
    return false;
  }

  return jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return false;
    } else {
      // console.log(decoded);
      return {
        id: decoded.id,
        role: decoded.role,
      };
    }
  });
};

module.exports = { generateAccessToken, checkAccessToken };
