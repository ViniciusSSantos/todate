import e, { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";


export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  //console.log(authToken);

  if (!authToken) {
    return response.status(401).end();
  }
  
  //authToken.replace('"', "")

  try {
    const { sub } = verify(
      authToken,
      process.env.JWT_SECRET
    ) as JwtPayload;
    
    request.user_id = sub;
       
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}