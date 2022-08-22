import { Router } from "express";

import deleteEmployeController from "../controllers/deleteEmploye.controller";
import listEmployeesController from "../controllers/listEmployees.controller";
import updateEmployeController from "../controllers/updateEmploye.controller";
import registerEmployeesController from "../controllers/registerEmployees.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyCompanyIdMiddleware from "../middlewares/verifyCompanyId.middleware";
import verifyEmployeIdMiddleware from "../middlewares/verifyEmployeId.middleware";
import verifyRegisterFieldsMiddleware from "../middlewares/verifyRegisterFields.middleware";

const employeesRouter = Router()

employeesRouter.get("/:company_id", [verifyAuthTokenMiddleware, verifyCompanyIdMiddleware], listEmployeesController)
employeesRouter.post("/register/:company_id", [verifyCompanyIdMiddleware, verifyRegisterFieldsMiddleware, verifyAuthTokenMiddleware], registerEmployeesController)
employeesRouter.put("/:employe_id", verifyEmployeIdMiddleware, updateEmployeController)
employeesRouter.delete("/:employe_id", verifyEmployeIdMiddleware, deleteEmployeController)

export default employeesRouter