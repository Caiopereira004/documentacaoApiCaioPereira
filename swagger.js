//A biblioteca serve para ler os comentários do tipo @swagger no código
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition:{
        //define a versão da especificação OPENAPI usada pelo swagger
        //OPENAPI é o padrão usado p
        openapi: "3.0.0",

        info:{
            //Título da API que vai aparecer no Swagger
            title: "API em NODEJS com express",
            //Versão da API
            version: "1.0.0",
            //Pequena descrição
            describe: "Documentação de API com Swagger"
        },

        servers: [
            {
                //URL base da API
                url: "http://localhost:5000"
            }
        ]
    },
    //apis define em quais artigos o Swagger deve procurar os comentários com @swagger
    apis: ["./server.js", "./routes/usuarios.js"]
};

//O swagger-jsdoc lê as configurações do objeto "options" e gera a documentação da API em formato JSON
const swaggerSpec = swaggerJSDoc(options);

//Exporta a documentação pronta para que ela possa ser usada em outro arquivo, como no server.js
export default swaggerSpec;