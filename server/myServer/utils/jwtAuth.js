const jwt = require("jsonwebtoken");

const generateAccessToken = (patientId) => {
  return jwt.sign({ patientId: patientId }, process.env.TOKEN_SECRET, {
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
      return decoded.patientId;
    }
  });
};

module.exports = { generateAccessToken, checkAccessToken };
