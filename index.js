const express = require('express');
const router = require("./routes/route");
const app = express();
const port = process.env.port || 3000;

app.use("/student", router);
/*
app.get("/student/all", (req, res) => {
    res.send(`This is the data of all students !`);
});


app.get('/student/delete/:id([0-9]{2})', (req, res) => {
    const {id} = req.params;
    if(id==10){
        res.send(`This is the id numner ${id} which is not valid !`);
    }else{
        res.send(`valid Id's`);
    }
});
*/

app.listen(port, ()=> {
    console.log(`server up on ${port}`);
})