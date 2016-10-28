var connections = []
var users = []
var gameData = {
  videos: {
    speech: [
      { 
        title: 'Obama',
        id: 'xWx9zSy04uA',
        start: 18,
        stop: 28,
        finalStop: 37,
        c: 'that by working together, we can forge a new path to prosperity',
        a: 'that the principles upon which our nation were founded shall endure',
        b: 'that the state of our union is strong',
        d: 'that we will make America great again',
        correct: 'c'
      },
      {
        title: 'MLK',
        id: '1UV1fs8lAbg',
        start: 732,
        stop: 750,
        finalStop: 770,
        a: 'that my four little children will one day live in a nation where they are judged not by the color of their skin, but by the content of their character',
        b: 'that one day this nation will rise up and live out the true meaning of its creed',
        c: 'that one day, even the state of Missisippi, a state sweltering with the heat of injustice ... will be transformed into an oasis of freedom and justice',
        d: 'that one day, I will save 15 percent on my car insurance by switiching to Geico',
        correct: 'b'
      },   
      {
        title: 'Reagan',
        id: 'YtYdjbpBk6A',
        start: 51,
        stop: 68,
        finalStop: 73,
        a: 'Who\'s your daddy?!',
        b: 'Tear down this wall!',
        c: 'Show me the money!',
        d: 'Open this gate!',
        correct: 'd'
      },
      {
        title: 'Bush',
        id: 'EMUPr28v_ao',
        start: 0,
        stop: 11,
        finalStop: 14,
        a: 'We\'ve had some sex',
        b: 'We\'ve had some setbacks',
        c: 'We\'ve had some disagreements',
        d: 'We\'ve lowered taxes',
        correct: 'a'
      },    
      {
        title: 'Lincoln',
        id: '9TCMHVmNc5w',
        start: 6,
        stop: 23,
        finalStop: 28,
        a: 'We are now met on a great battlefield of war',
        b: 'We are now testing whether that nation, or any nation, can long endure',
        c: 'Now we are engaged in a great Civil War',
        d: 'That government of the people, by the people, for the people, shall not perish from this Earth',
        correct: 'c'
      }
    ],
    music: [
      {
        title: 'Spice-Girls',
        id: 'gJLIiF15wjQ',
        start: 47,
        stop: 60,
        finalStop: 63,
        a: '..wanna Big Mac, extra pickles',
        b: '..wanna be my lover, you gotta get with my friends',
        c: 'really, really, really wanna zigazig ah',
        d: '..if you wanna get with me, better make it fast',
        correct: 'c'
      },
      {
        title: "Thriller",
        id: 'sOnqjkJTMaA',
        start: 281,
        stop: 311,
        finalStop: 515,
        a: '\'Cause this is Thiller!',
        b: 'you close your eyes, and hope that this is just imagination',
        c: 'but all the while, your hear a creature creepin up from behind',
        d: 'you\'re paralyzed',
        correct: 'd'
      },
      {
        title: "Mambo No Five",
        id: 'EK_LN3XEcnw',
        start: 15,
        stop: 51,
        finalStop: 53,
        a: 'A little bit of Rita is all I need',
        b: 'A little bit of Tina is what I see',
        c: 'A little bit of Sandra in the sun',
        d: 'A little bit of Monica in my life',
        correct: 'd'
      },
      {
        title: "Shake it off",
        id: 'nfWlot6h_JM',
        start: 0,
        stop: 40,
        finalStop: 44,    
        a: '\'Cause the haters gonna hate, hate, hate, hate, hate',
        b: '\'Cause the fakers gonna fake, fake, fake, fake, fake',
        c: '\'Cause the players gonna play, play, play, play, play',
        d: 'Baby, I\' m just gonna shake, shake, shake, shake, shake',
        correct: 'c'
      },
      {
        title: "What I've Done",
        id: '8sgycukafqQ',
        start: 0,
        stop: 58,
        finalStop: 70,    
        a: 'so let heaven come and wash away what I\'ve done',
        b: 'so let mercy come and wipe away what I\'ve done',
        c: 'so let mayhem come and erase away what I\'ve done',
        d: 'so let mercy come and wash away what I\'ve done',
        correct: 'd'
      }
    ],
    mix: [
      {
        title: 'Spice-Girls',
        id: 'gJLIiF15wjQ',
        start: 47,
        stop: 60,
        finalStop: 63,
        a: '..wanna Big Mac, extra pickles',
        b: '..wanna be my lover, you gotta get with my friends',
        c: 'really, really, really wanna zigazig ah',
        d: '..if you wanna get with me, better make it fast',
        correct: 'c'
      },
      {
        title: "Thriller",
        id: 'sOnqjkJTMaA',
        start: 281,
        stop: 311,
        finalStop: 515,
        a: '\'Cause this is Thiller!',
        b: 'you close your eyes, and hope that this is just imagination',
        c: 'but all the while, your hear a creature creepin up from behind',
        d: 'you\'re paralyzed',
        correct: 'd'
      },
      {
        title: 'Reagan',
        id: 'YtYdjbpBk6A',
        start: 51,
        stop: 68,
        finalStop: 73,
        a: 'Who\'s your daddy?!',
        b: 'Tear down this wall!',
        c: 'Show me the money!',
        d: 'Open this gate!',
        correct: 'd'
      },
      {
        title: 'Bush',
        id: 'EMUPr28v_ao',
        start: 0,
        stop: 11,
        finalStop: 14,
        a: 'We\'ve had some sex',
        b: 'We\'ve had some setbacks',
        c: 'We\'ve had some disagreements',
        d: 'We\'ve lowered taxes',
        correct: 'a'
      },    
      {
        title: 'Lincoln',
        id: '9TCMHVmNc5w',
        start: 6,
        stop: 23,
        finalStop: 28,
        a: 'We are now met on a great battlefield of war',
        b: 'We are now testing whether that nation, or any nation, can long endure',
        c: 'Now we are engaged in a great Civil War',
        d: 'That government of the people, by the people, for the people, shall not perish from this Earth',
        correct: 'c'
      }
    ]
  }
}
var askedQuestions = {speech:[],music:[],mix:[]}



module.exports = function (io) {
  io.sockets.on("connection",function(socket){
    connections.push(socket)
    console.log(" %s user connected",connections.length);

    socket.on("signedIn",function(data){
      var user = {}
      user.name = data.name
      user.avi = data.profileImage
      users.push(user) 
      updateUsernames()
    })

    socket.on("createRoom",function(room){
      console.log(room)
      socket.join(room)
    })

    // socket.on("startGame",function(){
    //  socket.emit("gameStarted",true)
    // })

    socket.on("inLobby",function(){
      var roomname = getRoomName(socket)
      if(roomname!== "lobby"){
        console.log("notLobby",roomname)

      }
      console.log("Lobby",roomname)

    })
    socket.on("startTime",function (time) {


    })


    socket.on("needQuestion",function(){
      var roomname =  getRoomName(socket)
      io.to(roomname).emit('question',gameData.videos[roomname][asked(socket)])
    })

    socket.on("answer",function(data){
      var roomname =  getRoomName(socket)
      io.to(roomname).emit('question',gameData.videos[roomname][asked(socket)])
    })

    socket.on("disconnect",function (data) {
      users.splice(users.indexOf(socket.username,1))
      updateUsernames()
      connections.splice(connections.indexOf(socket),1)
      console.log(" DISCONNECT: %s sockets connected",connections.length);  
    })

    var asked = function(userSocket){
      var roomname =  getRoomName(userSocket)
      console.log("roomname",roomname)
      var gameDataLength = gameData.videos[roomname].length
      var rand = Math.floor(Math.random() * gameDataLength)

      if(askedQuestions[roomname].length === gameDataLength){
        askedQuestions[roomname] = []
        io.to(roomname).emit("gameover",true)
        userSocket.leave(roomname)
        return ;
      }else if(askedQuestions[roomname].indexOf(rand) === -1){
        askedQuestions[roomname].push(rand)
        return rand;
      }else{
        return asked(userSocket)
      }
    }

    var updateUsernames =  function() {
      socket.emit('getUsers', users) 
    }

    var getRoomName = function(socket){
      return socket.rooms["music"] ?
        'music'
      :
      socket.rooms['speech'] ?
       'speech'
      :
      socket.rooms['mix'] ?
        'mix'
      :
        "lobby"
    }

  })
}


