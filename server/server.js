"use strict"
const express          = require('express')
const bodyParser       = require('body-parser')
const app              = express()
const passport         = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const session          = require('express-session')
const path             = require('path')
const morgan           = require('morgan')
const router           = require('./routes/routes')
const User             = require('./models/user')
const stories          = require('./controllers/storyController')
const charles          = require('./secretsecrets')

const port             = process.env.PORT || 8081

var http = require('http').Server(app)
var io = require('./socket.js').listen(http)

passport.serializeUser(function (user, done) {
  console.log(user)
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null,obj)
})

passport.use(new FacebookStrategy({
    clientID          : charles.appId,
    clientSecret      : charles.appSecret,
    callbackURL       : "/auth/facebook/return",
    passReqToCallback : true,

  },
  function(req, token, refreshToken, profile, done) {
    console.log('refreshToken:',refreshToken)
    let query = {
      'facebookId': profile.id
    };

  User.findOne(query).then(user => {
    if (user) {
      console.log('User found')
      done(null, user)

    } else {
      console.log('User not found - adding to DB')
      let newUser = {}
      newUser.facebookId = profile.id
      newUser.name = profile.displayName
      newUser.profilePic = `http://graph.facebook.com/${profile.id}/picture?width=400&height=400`
      newUser.token = token
      new User(newUser).save((err,user) => {
        if(err){
          console.log(err)
        }
        done(null, user)
      })
    }
  }).catch(err => {
    throw err
  })
}))

// app level middleware
app.use(morgan('dev'))
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  //res.setHeader('Content-Type', 'application/JSON')
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTION")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(session({
  secret: charles.secret,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'))

app.use('/', router)

const server = http.listen(port)

console.log(`Server is running on port: ${port}`)
