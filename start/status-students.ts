import { Router } from "express";
const router = Router();
import mySqlData from "./db";

router.get("/GET/All" , async(req,res) =>{

    const result = await mySqlData(``);


    res.send(result.recordset[0]);
})


export default router;