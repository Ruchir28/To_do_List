const express=require('express');
const port=7000;

const app=express();

const db=require('./config/mongoose');
app.use(express.urlencoded());

app.set('view engine','ejs');
//seeing for ejs files in views folder only
app.use(express.static('./assets'));
app.set('views','./views');


app.use('/',require('./routes/home'));
app.listen(port,function(err)
{
    if(err)
    {
        console.log('error:',err);
    }
    console.log('server is up on port:',port);
});
