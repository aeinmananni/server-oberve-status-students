import { Router } from "express";
const router = Router();
import mySqlData from "./db";

router.get("/GET/All" , async(req,res) =>{

    const result = await mySqlData(`EXECUTE [status].GetStudentList`);


    res.send(result.recordset);
})


export default router;