import express from "express";

const router = express.Router();

let USUARIOSSESI = [
    {id: 1, nome: "Caio", email:"caio@gmail.com"},
    {id: 2, nome: "Yasmin", email:"yasmin@gmail.com"},
    {id: 3, nome: "Yago", email:"yago@gmail.com"},
];

/**
 * @swagger
 * /usuarios:
 *      get:
 *        summary: Lista todos os usuários
 *        tags: [Usuários]
 *        responses:
 *          200:
 *              description: Lista de usuários retornada com sucesso
 */

router.get("/", (req,res)=>{
    res.status(200).json(USUARIOSSESI);
})

/**
 * @swagger
 * /usuarios:
 *      post:
 *          summary: Cadastrar um novo usuário
 *          tags: [Usuários]
 *          responses:
 *              200:
 *                  description: Usuário cadastrado com sucesso
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties:
 *                           nome:
 *                               type: string
 *                               example: Caio Pereira da Silva
 *                           email:
 *                               type: string
 *                               example: caio@gmail.com
 *              responses:
 *                  201:
 *                      description: Usuário cadastrado com sucesso
 *
 */
router.post("/", (req,res)=>{
    const {nome, email} = req.body;

    const novoUsuario = {
        id: USUARIOSSESI.length + 1,
        nome,  
        email
    };

    USUARIOSSESI.push(novoUsuario);
    res.status(201).json(novoUsuario);
})

export default router;