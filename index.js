
require('dotenv').config()
let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('*',function (req,res){
    res.send(<h1>404 Page</h1>)
})
app.listen(process.env.PORT)
