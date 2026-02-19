const express=require("express")
const authMiddleware=require("../middleware/auth.middleware")
const accountController=require("../controllers/accont.controller")



 const  router=express.Router()

 /* post /api/accounts,create a new account,protected route */
 router.post("/",authMiddleware.authMiddleware,accountController.createAccountController)

 router.get("/", authMiddleware.authMiddleware, accountController.getUserAccountsController)

 router.get("/balance/:accountId", authMiddleware.authMiddleware, accountController.getAccountBalanceController)

 module.exports=router