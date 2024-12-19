var express = require('express')
var userRouter = require('./user/controller')
var chatRouter = require('./chat/controller')
var osRouter = require('./os/controller')
var productRouter = require('./product/controller')
var { socketIO } = require('./chat/chatService')
var batimentRouter=require('./batiment/controller')
var niveauRouter=require('./niveau/controller')
var ordinateurRouter=require('./ordinateur/controllers')
var mongoose = require('mongoose')
var path = require('path')
var app= express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig')
app.use(express.json())
app.use('/ordinateurs', ordinateurRouter)
app.use('/users', userRouter)
app.use('/chat', chatRouter)
app.use('/os', osRouter)
app.use('/products', productRouter)
app.use('/batiment',batimentRouter)
app.use('/niveau',niveauRouter)

mongoose.connect('mongodb://localhost:27017/test2025')
        .then(()=>{
            console.log('DB connected !');            
        })
        .catch((error)=>{
            console.log("error : "+ error);
        })
var http = require('http')
var server = http.createServer(app)
const io = socketIO(server)
server.listen(3000,()=>{
    console.log('server started !');
})