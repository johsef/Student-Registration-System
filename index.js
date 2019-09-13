var express = require('express');
var app = express();
var session = require('express-session');
var path = require('path');
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser')

app.use(cookieParser())

var public = path.join(__dirname, 'public');
app.use('/', express.static(public));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'somerandomstuffs',
}));
var sess
var cook
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/Home.html');
});



app.route('/login')
    .get((req, res) => {
        res.sendFile(__dirname + '/public/Login.html');
        
    })
    .post((req, res, next) => {
        res.cookie('cookie', '4',{maxAge: 3000000})
        cook = req.cookies
        sess=req.session

        // user ={
        //     admin:'admin',
        //     admin1:'admin1'
        // }

        // let autho_admin = Object.keys(user)
        // let autho_password = Object.values(user)
        sess.username=req.body.username
        sess.password=req.body.password
        

    //     function username(name){
    //         for (var x=0; x<autho_admin.length;x++){
    //             if (autho_admin[x]==sess.username){
    //                name= sess.username
                     
    //             }
    //         }
    //         return name
    //     }
    //     function password(name){
    //         for (var x=0; x<autho_password;x++){
    //             if (autho_password[x]==sess.password){
    //                name=sess.password
                     
    //             }
    //         }
    //         return name
    //     }


    //     let use = autho_admin.find(username)
    //     let pass= autho_password.find(password)
    //     console.log(use)

    //    sess.username=use
    //    sess.password=pass
        



        // if (use &&cook){
        //     if(use && pass){
        //         setTimeout(function(){
        //            res.redirect('/home')
        //           },1000)  

        //     }
        //     else{
        //           setTimeout(function(){
        //                res.redirect('/login')
        //              },1000)  
                                
        //        }
        // }

    

        if (sess.username && cook){
        var username = req.body.username,
            password = req.body.password;
        let mockedUsername = 'admin'
            mockedPassword = 'admin'
            if(username && password){
                if(username === mockedUsername && password === mockedPassword){
                    setTimeout(function(){
                        res.redirect('/home')
                           },1000)  
                    
                }
                else{
                     setTimeout(function(){
                        res.redirect('/login')
                           },1000)  
                        
                }
            }
        }
        
    
})


  
    app.get('/home', (req, res) => {
        
         cook = req.cookies.cookie
         sess=req.session
        if(sess.username && cook){
           
            res.sendFile(__dirname+'/public/Admin.html')
        }
        else{
            res.status(404).send("Unauthorized access")
        }
    })

    app.get('/customer', (req, res)=>{
        res.sendFile(__dirname+'/public/Customer.html')

    })
    app.get('/custom', (req, res)=>{
        cook = req.cookies.cookie
        sess=req.session
        if(sess.password=='admin' && cook){
            res.redirect('/home')
        }
        else{
            res.redirect('/')
        }

    })
    app.get('/new', (req, res)=>{
        cook = req.cookies.cookie
        sess=req.session
        if(sess && cook){
            res.sendFile(__dirname+'/public/NewUser.html')
        }
        else{
            res.status(404).send("Unauthorized")
        }
        

    })

    app.get('/logout', (req, res)=>{
        setTimeout(function(){
            res.clearCookie('cookie')
            res.redirect('/')
               },1000)  
        
    })

app.use(function(req,res,next){
    res.status(404).send("Page Not Found")
})

app.use(express.static(__dirname + '/public'))

app.listen(8000, ()=>{
    console.log('Express app listening on port 8000')
})