import express from "express";
import "./database";
import companiesRouter from "./routes/companies.routes"
import employeesRouter from "./routes/employees.routes"


const app = express()
app.use(express.json())

app.use("/companies", companiesRouter)
app.use("/employees", employeesRouter)

app.get("/", (_, response) => {
    return response.json({
        message: "Hello Kenzie",
    })
})

app.listen(3000)