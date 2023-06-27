import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team
  return (
    <Link to={`teamMatches/${id}`} className="team-card-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <h1 className="team-card-title">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
