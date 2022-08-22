import { Router } from "express";

// CONTROLLERS
import loginCompanyController from "../controllers/loginCompany.controller";
import createCompanyController from "../controllers/createCompany.controller";
import listCompaniesController from "../controllers/listCompanies.controller";
import listCompaniesByCityController from "../controllers/listCompaniesByCity.controller";

// MIDDLEWARES
import verifyCompanyNameAvailabilityMiddleware from "../middlewares/verifyAvailabilityCompanyName.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyLoginMiddleware from "../middlewares/verifyLogin.middleware";

const companiesRouter = Router()

companiesRouter.get("", listCompaniesController)
companiesRouter.get("/:city", listCompaniesByCityController)
companiesRouter.post("/create", [verifyEmailAvailabilityMiddleware, verifyCompanyNameAvailabilityMiddleware], createCompanyController)
companiesRouter.post("/login", verifyLoginMiddleware, loginCompanyController)

export default companiesRouter