import React from 'react'

class LeaderBoard extends React.Component{


  render(){
    return(
      <div id='board'>
        <table>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>Christina</td>
            <td>739</td>
          </tr>
          <tr>
            <td>Robert</td>
            <td>908</td>
          </tr>
          <tr>
            <td>Tulasi</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Kendrick</td>
            <td>768</td>
          </tr>
          </table>
      </div>
    )
  }
}

export default LeaderBoard