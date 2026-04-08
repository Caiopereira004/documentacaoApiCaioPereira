import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swagger.js"
import usuarioRoutes from "./routes/usuarios.js"

const PORT = 5000;
const app = express();
app.use(express.json());

/**
 * @swagger
 * /:
 *  get:
 *      summary: ROta inicial da API
 *      tags : [Inicial]
 *      responses:
 *          200:
 *              description: API funcionando
 */

app.get("/", (req,res)=>{
    res.status(200).json({
        msg: "API funcionando"
    })
})

app.use("/usuario", usuarioRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
    console.log(`http://localhost:${PORT}/api-docs`)
})