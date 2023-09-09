import http from 'node:http'

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        token:'12345u',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'ljq',
        'Access-Control-Allow-Methods':'PUT'
    })
    res.end('hello')
})

server.listen(8080,()=>{
    console.log('server is listen on http://localhost:8080')
})