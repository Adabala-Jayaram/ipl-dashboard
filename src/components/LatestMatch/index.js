import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  // console.log(latestMatch)
  //   here I am getting error and I am not understanding why this error?

  const {date, venue, completingTeam, completingTeamLogo} = latestMatch

  return (
    <div className="latest-match-container">
      <div className="latest-match-card">
        <h1 className="team-name">Delhi Capital</h1>
        <p className="match-date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="completing-team">{completingTeam}</p>
      </div>
      <img src={completingTeamLogo} alt={`latest match ${completingTeam}`} />
    </div>
  )
}

export default LatestMatch
