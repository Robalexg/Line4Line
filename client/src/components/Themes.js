import React from 'react'

class Theme extends React.Component {
  return (
    <div className="createStoryWrap">
      <h3>A super creative title</h3>
      <form onSubmit={createStory}>
        <div>  
          <input className="createStoryInput createTitleInput" id="createTitle" type="text" placeholder="The Tale of the..." />
        </div>
        <div>
          <h3>Number of users</h3>
          <input className="createStoryInput createNumberInput" id="createNUsers" type="number" min="1" max="10" placeholder="5"/>
        </div>
        <div className='createButtonWrap'>
          <input className="standardButton blackButton" type="submit" value="Create" />
        </div>
      </form>
    </div>
  )


}


export default Theme