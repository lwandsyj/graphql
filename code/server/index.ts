import Express from 'express'

// 实例化express 
const app = Express()

app.get('*', (req, res) => res.send('Hello World!'));

app.listen(8080,()=>{
    console.log("server start at 8081")
})