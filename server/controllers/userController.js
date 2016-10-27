
const db = require('../models/config')
const User = require('../models/user')

module.exports = {

  get: (req,res) => {
  const user = {
    id: req.user.facebookId,
    name: req.user.name,
    profileImage: req.user.profilePic,
    score: req.user.score
  }
  res.send(user)
},

  post: (req, res) => {
    const username =  req.body.username
    const password = req.body.password
    User.findOne({username: username})
    .then((user) => {
      if(!user) {
        var newUser = new User({
          username: username,
          password: password,
          sessions: uuid.v4()
        })
        newUser.save()
        .then((user) => {
          res.cookie('sessionId', user.sessions)
          res.redirect('/')
        })
      } else {
        const err = new Error({error: 'This username is already taken'})
        res.send(err)
      }
    })
  },

  score: (req, res) => {
    const username =  req.body.username
    const score = req.body.score
    User.findOneAndUpdate({username: username}, {$set:{score: score}}, {new: true})
    .then((user) =>{
      return res.status(201).send('score updated')
    })
    .catch((err) =>{
      console.log('this is a score error', err)
      return res.status(500).send('our bad')
    })
  },

  getScores: (req, res) => {
    User.find()
    .then((users)=>{
      console.log('this worked getScores', users)
      res.status(201).send(users)
    })
    .catch((err) =>{
      console.log('this getScores didnt work', err)
    })
  },

  verify: (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({username: username})
    .then((user) => {
      if(user){
        user.comparePassword(password, function(err, match) {
          if (match) {
            const session = uuid.v4()
            user.sessions = session
            user.save((data) => {
              res.cookie('sessionId', session)
              return res.redirect('/')
            },(err) => {
              return res.status(400).send('User could not be updated')
            })
          } else {
            return res.status(404).send('Password incorrect');
          }
        });
      } else {
        return res.status(404).send('User not found')
      }
    })
    .catch(function(err) {
      console.log(err);
      return res.status(500).send('idk lol');
    });   
  }

};
