import  Express  from "express";
import Ip from "ip";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { isConstructorDeclaration } from "typescript";
import req from "node/lib/request";
require('dotenv').config();
const config= process.env;
const IP= Ip.address();
const app= Express();
// Express router Error Handling
app.use('*', (req, res),next => {
    return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});
    console.log('Route'+req.url+' Not found.')
// Any error
app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
  });
app.use(morgan("combined"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



const dt = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const xXx = dt.toLocaleDateString('pt-BR', options);   
    

    
app.get("/",(req, res)=>{
    return res.send({ "development{}": "Clickwebtech REST API Service with node.js" });
});
app.post('/', (req, res) => {
    res.send('Got a POST request at/')
  })
  
  app.put('/', (req, res) => {
    res.send('Got a PUT request at /')
  })
  app.patch('/', (req, res) => {
    res.send('Got a PATCH request at /')
  })

  
  app.delete('/user/', (req, res) => {
    res.send('Got a DELETE request at /')
  })
const PORT= process.env.APP_PORT||3000; 
app.listen(PORT,()=> console.log('[' + xXx + '] Servidor iniciado no endereço http://'+IP+':'+PORT+' ou  http://api.clickwebtech:'+PORT+''));
console.log(process.env);
