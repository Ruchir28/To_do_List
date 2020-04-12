const Task=require('../models/task');
module.exports.create=async function(req,res)
{
    console.log(req.body);
    try{
    const task=await Task.create(
        {
            Desc:req.body.Task_Description,
            Date:req.body.Due_Date,
            priority:req.body.Priority
        }
    );
    if(req.xhr)
    {
        return res.status(200).json(
            {
            task:task
            });
    }
    return res.redirect('/');
    }
    catch(err)
    {
        console.log('err in task controller:',err);
    }



}
module.exports.delete=async function(req,res)
{
    try{
        console.log(req.query);
    const task=await Task.findByIdAndDelete(req.query.id);
    return res.status(200).json({});
    }
    catch(err)
    {
        console.log('error',err);
    }
}