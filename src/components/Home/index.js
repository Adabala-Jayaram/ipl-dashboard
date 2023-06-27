import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

const teamApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch(teamApiUrl)
    const data = await response.json()
    const {teams} = data
    const formatData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: formatData})
  }

  render() {
    const {teamsData} = this.state

    return (
      <div className="home-container-bg">
        <div className="home-sec-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>
        <ul className="team-card-list-container">
          {teamsData.map(team => (
            <TeamCard team={team} key={team.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
