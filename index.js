const express = require('express');
const app = express();


app.get('/',(req,res,next)=>{
    console.log('Here in get call');
    console.log(req.query);
    res.status(200).send({
        status:"success",
        "Message":"Everything is working"
    })
})



const server = app.listen(3000,'127.0.0.1',()=>{
    console.log(`Server is listening on http://${server.address().address}:${server.address().port}`)
})