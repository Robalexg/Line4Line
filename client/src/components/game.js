import React from "react"
import YouTube from "react-youtube"

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: false,
      currentVideoIndex: 0,
      videos: {
        speeches: [
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
      
      songs: [
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
          start: 3,
          stop: 51,
          finalStop: 53,
          a: 'A little bit of Rita\'s all I need',
          b: 'A little bit of Tina\'s what I see',
          c: 'A little bit of Sandra in the sun',
          d: 'A little bit of Monica in my life',
          correct: 'd'
         },
        {
          title: "Shake it off",
          id: 'nfWlot6h_JM',
          start: 0,
          stop: 41,
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
          stop: 59,
          finalStop: 70,    
          a: 'so let heaven come and wash away what I\'ve done',
          b: 'so let mercy come and wipe away what I\'ve done',
          c: 'so let mayhem come and erase away what I\'ve done',
          d: 'so let mercy come and wash away what I\'ve done',
          correct: 'd'
         },
       ]
      }
    };
  }

  componentDidMount () {

  }

  nextVideo () {
    if (this.state.currentVideoIndex === this.state.videos.length - 1){
      this.setState({currentVideoIndex: 0});
    } else {
      this.setState({currentVideoIndex: this.state.currentVideoIndex + 1});
    }
  }

  onReady (event) {
  }
  
  onPause () {
    console.log('paused! ', Date.now())
  }

  onEnd () {
    console.log('ended! ', Date.now())
  }

  onStateChange (event) {
    // YouTube.onStateChange(event)
    if (event.target.getPlayerState() === 1){
      console.log('Video starting at: ', Date.now());
    //   setTimeout(function(){
    //     event.target.stopVideo()
    //   }, 51500)
    }
  }

  render () {
    var currentVideo = this.state.videos.songs[this.state.currentVideoIndex];
    var videoId = currentVideo.id;
    var start = currentVideo.start;
    var end = currentVideo.stop;
    var finalStop = currentVideo.finalStop
    var opts = {
      height: 450,
      width: 600,
      playerVars: {
        autoplay: 1,
        start: start,
        end: end,
        modestbranding: 1,
        showinfo: 0,
        autohide: 1
      }
    }

    return (

      <div className="clipQuestions-page container">
        
        <div className="row">
          <YouTube
            videoId={videoId}
            onReady={this.onReady}
            onPause={this.onPause}
            onEnd={this.onEnd}
            onStateChange={this.onStateChange}
            opts={opts}
          >
          </YouTube>
        </div>
       
        <div className="row">
          <span className="answer" onClick={this.answerSelected}><span className={this.state.answerColor}>A:</span> {currentVideo.a}</span>
          <span className="answer" onClick={this.answerSelected}><span className={this.state.answerColor}>B:</span> {currentVideo.b}</span>
        </div>
        
        <div className="row">
          <span className="answer"><span className={this.state.answerColor} onClick={this.answerSelected}>C:</span> {currentVideo.c}</span>
          <span className="answer"><span className={this.state.answerColor} onClick={this.answerSelected}>D:</span> {currentVideo.d}</span>
        </div>
      
      </div>
    );
  }
}

export default Game



