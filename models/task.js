const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema(
    {
        Desc:
        {
            type:String,
            required:true
        },
        Date:
        {
            type:Date,
            required:true
        },
        priority:
        {
            type:String,
            required:true
        }

    }
);
const Task=mongoose.model('Task',TaskSchema);
module.exports=Task;