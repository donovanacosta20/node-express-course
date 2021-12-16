const express = require('express');
const res = require('express/lib/response');
const app = express();

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]


app.get('/users', function(req, res){
    res.json({
        sucess: true,
        massage: 'Succesfully got users. Nice!',
        users: mockUserData
    })
})


app.get('/users/:id', function(req, res){

    console.log(req.params.id);
    res.json({
        sucess: true,
        message: 'get one user',
        user: req.params.id
        
    })
})

app.listen(8000, function(){
    console.log("sever is running");
});
