import React from 'react'
import OpenStory from './OpenStory'
import Accordion from './Accordion'


class Lobby extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      allStories: [],
      openStories: [],
      completeStories: [], 
      displayComplete: false
    }
  this.toggleDisplay = this.toggleDisplay.bind(this)
  }

  componentDidMount () {
    //get an array of all the stories from the db that need more users
    $.get('/stories')
    .then(stories => {
      console.log('Got stories: ', stories);
      let completeStories = stories.filter(story => story.complete)
      console.log('comstor: ',completeStories)
      let openStories = stories.filter(story => story.length > story.lines.length)
      console.log('openstor: ', openStories)
      this.setState({
        allStories: stories,
        openStories: openStories,
        completeStories: completeStories
      })
    })   
  }

  toggleDisplay () {
    this.setState({
      displayComplete: !this.state.displayComplete
    })
  }

  render () {
    var displayButtonText = this.state.displayComplete ? 'Show Open' : 'Show Complete'
    return (
      <div>
        <Accordion />
        <div className='lobby'>
          <div className="lobbyLabels">
            <h4 className="storyNames">Story Name</h4>
            <h4 className="numberOfUsers">Number of users</h4>
            <h4 className="toggleDisplayLink"><a onClick={this.toggleDisplay}>{displayButtonText}</a></h4>
          </div>
          { this.state.displayComplete ?

            this.state.completeStories.map((story, i) =>
              <OpenStory story={story} key={i} />
            )

            :

            this.state.openStories.map((story, i) =>
              <OpenStory story={story} key={i} />
            )
            
          }

        </div>
      </div>
    )
  }
}

export default Lobby
