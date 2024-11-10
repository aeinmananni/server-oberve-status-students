import { Router,Request,Response } from "express";
const router = Router();
import mySqlData from "./db";
import { validateJson } from "../utils/validate-json";
import { StatusStudentType } from "../models";


router.get("/GET/All" , async(req:Request,res:Response) =>{

    const result = await mySqlData(`EXECUTE [status].GetStudentList`);


    res.send(result.recordset);
})

router.post("/POST/Add" , async(req:Request,res:Response) =>{  
    const result = await mySqlData(`EXECUTE [status].saveStudentStatus N'${validateJson<StatusStudentType>(req.body)}'`); 
     res.send(result.recordset[0])
})

router.put("/PUT/Edite/:std_id" , async(req:Request,res:Response) =>{
    try{

      const {std_id} = req.params;
       const {std_fullName,std_classNumber,std_phoneNumber,std_email} = req.body;
        const result = await mySqlData(`EXECUTE [status].EditeStudentsInfo ${std_id}, N'${std_fullName}',N'${std_classNumber}',N'${std_phoneNumber}',N'${std_email}'`);
    
         res.send(result.recordset[0])
    }catch(error){
          res.status(400).send(error)
    }
})


router.delete("/DELETE/remove/:std_id" , async(req:Request,res:Response):Promise<void | any> =>{
      const {std_id} = req.params;
      const result = await mySqlData(`EXECUTE [status].removeStudents ${std_id}`);

      if(result.recordset[0].Error){
        return res.status(400).send(result.recordset[0]);
         
      }

      res.send(result.recordset[0])
})
export default router;