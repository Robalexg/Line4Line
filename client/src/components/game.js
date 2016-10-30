import React from "react"
import YouTube from "react-youtube"
import socket from '../../socket'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: false,
      currentVideoIndex: 0,
      title: null,
      id: null,
      start: null,
      stop: null,
      finalstop: null,
      answers: [],
      correct: null,
      count: null,
      gameover: false,
      display: "none",
      adminDisplay:"none",
      startFlag: false,
      source: "",
      score: 0
    }
  }


  componentDidMount () {
    console.log(this.props.admin)
    socket.emit('needQuestion')
    socket.on('question',function(question){
      this.setState({
        title: question.title,
        id: question.id,
        start: question.start,
        end: question.stop,
        finalstop: question.finalstop,
        answers: [question.a,question.b,question.c,question.d],
        correct: question.correct,
        source: question.source
      })
      if (this.state.title === 'answer'){
        console.log('answer! display block')
        this.setState({ display: 'block' }).bind(this);
      } else if (this.state.title !== 'answer'){
        this.setState({ display: 'none' }).bind(this);
        console.log('Not answer! display none')
          
      }
    }.bind(this))

    socket.on("gameover",function (data) {
      console.log("gameover")
    })
// starts client side game timer
    socket.on("timer",function(){
      console.log("started Time")
    })

    socket.on("scoreUpdate", function(data){
      this.setState({score: data});
    }.bind(this))

    console.log('state!: ', this.state.bind(this));

    if(!this.props.admin){
      this.setState({adminDisplay:"block"})
    }
  

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
    console.log("title",this.state.title)
//starts server-side game timer
    if (this.state.title !== "answer") {
      if (this.state.startFlag) {
        socket.emit("startTimer",Date.now())
        console.log('ended! ', Date.now())
        var jeopardy = document.getElementById('jeopardy');
        jeopardy.play();
        console.log(jeopardy);
        var jeopardyCreated = document.createElement('audio')
        jeopardyCreated.src = "http://vocaroo.com/i/s0r6dv4jZt82"
        jeopardyCreated.play();
        this.setState(
          {
            startFlag: false,
            display: "block"
          }
        ).bind(this)
        return;
      }
    } else if (this.state.title === "answer"){
      if (this.state.startFlag){
        socket.emit("answerOver");
        console.log("end! answer" )
        this.setState(
          {
            startFlag: false,
            display: "none"
          }
        ).bind(this)
      }
      return;
    }
    return;
  }

  onStateChange (event) {
    // YouTube.onStateChange(event)
    if (event.target.getPlayerState() === 1){
      console.log('Video starting at: ', Date.now());
      this.setState({startFlag: true})
    //   setTimeout(function(){
    //     event.target.stopVideo()
    //   }, 51500)
    }
  }


  answerClick(e){
    var id = e.target.id
    var convert = function(answer){
      if(answer === "a"){
        answer = 0
      }else if(answer === "b"){
        answer = 1
      }else if(answer === "c"){
        answer = 2
      }else{
        answer = 3
      }
      return answer.toString()
    }
    var answer = convert(this.state.correct)
    if(answer === id){
      socket.emit("answer", { answer: true, time: Date.now() })
    }else{
       socket.emit("answer",false)
    }
    this.setState({display: "none"});


  }

  render () {

    var finalStop = this.state.finalstop
    var opts = {
      height: 450,
      width: 600,
      playerVars: {
        autoplay: 1,
        start: this.state.start,
        end: this.state.end,
        modestbranding: 1,
        showinfo: 0,
        autohide: 1
      }
    }

    return (

      <div className="clipQuestions-page container">    

        <audio id="jeopardy" src={this.state.source} autoplay></audio>
        
        <div className="row">
          {
            <YouTube
              videoId={this.state.id}
              onReady={this.onReady.bind(this)}
              onPause={this.onPause.bind(this)}
              onEnd={this.onEnd.bind(this)}
              onStateChange={this.onStateChange.bind(this)}
              opts={opts}
            >
            </YouTube>
            
          }
        </div>

        <div className="answer-buttons">
          {
            this.state.answers.map(function(x,i){
              return (
                <div key={i}>
                  <button style={{display:this.state.display}} id={i} onClick={this.answerClick.bind(this)} type="button" className="btn btn-default myButton">{x}</button><br></br>
                </div>
                )
            }.bind(this))
          }
        </div>
        <div className='score-text'><span><h1>Total Score:</h1></span>{this.state.score} </div>

      </div>
    )
  }
}

export default Game


