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

app.listen(8000, function(){
    console.log("sever is running");
});

