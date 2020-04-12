const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/To_do_list_project');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function()
{
console.log('connection to db succesful');
});