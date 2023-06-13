const express = require("express")
const {problemSetterController} = require("../controller");
const {ErrorHandler} = require("../utils");
const {authProblemSetter,authAdmin,authUser}=require("../middleware")
const router = express.Router();


router.post("/applyProblemSetter" ,authUser, async(req,res,next)=>{

    try {
        const result = await problemSetterController.createProblemSetter({userId:req.user._id,...req.body});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

// router.put("/updateProblem/:id" , async(req,res,next)=>{

//     try {
//         const result = await problemController.updateProblem({id:req.params['id'], ...req.body});
//         res.json(result);

//     } catch (error) {
//         next(new ErrorHandler(error))
//     }
// })

// router.delete("/deleteProblem/:id" , async(req,res,next)=>{

//     try {
//         const result = await problemController.deleteProblem({id:req.params['id']});
//         res.json(result);

//     } catch (error) {
//         next(new ErrorHandler(error))
//     }
// })

router.get("/getProblemSetters",authAdmin, async(req,res,next)=>{

    try {
        const result = await problemSetterController.getProblemSetter();
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})
router.put("/approveProblemSetter/:id",authAdmin,async(req,res,next)=>{
    try{
        const result=await problemSetterController.approveProblemSetter({userId:req.params['id']});
        res.json(result);
    }catch (error) {
        next(new ErrorHandler(error))
    }
})

module.exports = router; 
