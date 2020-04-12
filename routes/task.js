const express=require('express');
const Router=express.Router();
const home_controller=require('../controllers/home_controller');
const task_controller=require('../controllers/task_controller');

Router.post('/create',task_controller.create);
Router.get('/delete',task_controller.delete);

module.exports=Router;