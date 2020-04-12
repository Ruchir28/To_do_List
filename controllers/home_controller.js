const Task=require('../models/task');
module.exports.home=async function(req,res)
{
    try
    {
    const tasks=await Task.find({});
    return res.render('home_page',{
        tasks:tasks
    });
    }
    catch(err)
    {
        console.log('error:',err);
    }
}