import {Component} from 'react'
import LatestMatch from '../LatestMatch/index'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: []}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(recentItem => ({
        umpires: recentItem.umpires,
        result: recentItem.result,
        manOfTheMatch: recentItem.man_of_the_match,
        id: recentItem.id,
        date: recentItem.date,
        venue: recentItem.venue,
        competingTeam: recentItem.competing_team,
        competingTeamLogo: recentItem.competing_team_logo,
        firstInnings: recentItem.first_innings,
        secondInnings: recentItem.second_innings,
        matchStatus: recentItem.match_status,
      })),
    }

    this.setState({teamMatchesData: formateData})
  }

  render() {
    const {teamMatchesData} = this.state
    // console.log(teamMatchesData)

    const {teamBannerUrl, latestMatchDetails} = teamMatchesData
    // console.log(teamBannerUrl)
    // console.log(latestMatchDetails)

    return (
      <div className="team-match-container">
        <img
          src={teamBannerUrl}
          className="team-banner-img"
          alt="team banner"
        />
        <h6 className="latest-matches-subtitle">Latest Matches</h6>
        <LatestMatch latestMatch={latestMatchDetails} />
      </div>
    )
  }
}
export default TeamMatches
