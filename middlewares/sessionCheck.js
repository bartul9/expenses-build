import moment from "moment";
import SessionModel from "../models/SessionModel.js";

// How to know if user cleared cookies, which user did clearing ?

const sessionCheck = async (req, res, next) => {
      
    try {
      const { sessionId } = req.cookies;

      if(sessionId) {

         const sessionCookie = await SessionModel.findOne({ where: {
            userId: sessionId,
         }});

         const sessionExpiration = moment(sessionCookie.createdAt).add(120, 'm').toDate();

         if(sessionExpiration < new Date()) {
            await SessionModel.deleteOne({ where: {
               userId: sessionId,
            }});
            res.clearCookie("sessionId");
            throw {}
         }
      } 
      next();

   } catch(e){
      res.clearCookie("sessionId");
      res.status(408).json({ message: "Session expired" });
   }

}

export default sessionCheck;