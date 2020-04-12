const express=require('express');
const Router=express.Router();
const home_controller=require('../controllers/home_controller');

Router.get('/',home_controller.home);
Router.use('/task',require('./task'));

module.exports=Router;