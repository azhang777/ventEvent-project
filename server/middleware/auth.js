import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* JWT is a token that allows us to transfer information (in form of JSON) securely. 
The token has three parts: the header, which describes the type of token, the payload 
which carries information, and the signature, a secret phrase or combination that is used 
in combination with the header and payload to create the token key which allows for the 
security and authenticity of the token(created when user logs in). JWT is often used for authenticating user requests 
and the users themselves.  */
