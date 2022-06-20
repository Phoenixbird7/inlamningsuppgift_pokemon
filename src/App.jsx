import './App.css';
import { Menu } from "./Menu"
import { useState } from "react"
import "./Nickname.jsx";
import { TeamMember } from './Nickname.jsx';

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  return <div className="pokemon">
    <Menu
      addTeammember={teammember => setTeamMembers([...teamMembers, teammember])}
    />
    <div className="teammembers">
      <p>My team</p>
      {teamMembers.map((member, i) =>
        <TeamMember
          name={member.name}
          key={i}
          id={member.id}
          nickname={member.nickname}
          updateNickname={newNickname => setTeamMembers(teamMembers.map((m, index) => index === i ? { ...member, nickname: newNickname } : m))}
          removeTeamMember={() => setTeamMembers(teamMembers.filter((_, index) => i !== index))}
        />
      )}

    </div>
  </div>
}

export default App;

