const express = require("express")
const {problemController} = require("../controller");
const {ErrorHandler} = require("../utils");
const router = express.Router();

router.post("/createProblem" , async(req,res,next)=>{

    try {

        const result = await problemController.createProblem(req.body);
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.put("/updateProblem/:id" , async(req,res,next)=>{

    try {
        const result = await problemController.updateProblem({id:req.params['id'], ...req.body});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.delete("/deleteProblem/:id" , async(req,res,next)=>{

    try {
        const result = await problemController.deleteProblem({id:req.params['id']});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.get("/getProblem" , async(req,res,next)=>{

    try {
        const result = await problemController.getProblem(req.body);
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})
router.post("./approveProblem",async(req,res,next)=>{
    try{
        const result=await problemController.approveProblem(req.body);
        res.json(result);
    }catch (error) {
        next(new ErrorHandler(error))
    }
})

module.exports = router; 
