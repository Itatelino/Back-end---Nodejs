const http = require('http')
//const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=='/'){
        res.write('<h1>Seja bem vindo!<h1>');
    }else if(req.url=='/canal'){
        res.write('<h1>Estou criando rotas...<h1>');
    }else if(req.url=='/estudo'){
        res.write('<h1>Estudando sobre Nodejs e suas rotas...<h1>');
    }else if(req.url=='/estudo/node'){
        res.write('<h1>Estudo sobre Nodejs<h1>')
    }
    res.end();
});

servidor.listen(porta,host,()=>{console.log('Servidor rodando com sucesso!')});