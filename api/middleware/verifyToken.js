// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "Not Authenticated!" });
//   }

//   // jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
//   //   if (err) return res.status(403).json({ message: "Token is not Valid!" });
//   //   req.userId = payload.id;

//   //   next();
//   // });
//   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
//     if (err) {
//       console.error("Token verification error:", err);
//       return res.status(403).json({ message: "Token is not Valid!" });
//     }
//     console.log("Token payload:", payload); // Log payload
//     req.userId = payload.id;
//     next();
//   });
  
// };

// verifyToken.js

import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });

    // Log payload ID for debugging
    console.log("Payload ID:", payload.id);

    // Assign user ID from payload to req.userId
    req.userId = payload.id;
    next();
  });
};

