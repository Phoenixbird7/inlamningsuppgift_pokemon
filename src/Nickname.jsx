import { useState } from "react";
import "./App.css";
import "./Menu.jsx";


export function TeamMember({ name, nickname, updateNickname, removeTeamMember }) {
    const [showEditNickname, setShowEditNickname] = useState(false);
    const [tempNickname, setTempNickname] = useState(nickname);

    return <li>
        <span>{name}</span>
        {nickname && (
            <>
                {""}
                <span>{nickname}</span>
            </>
        )}

        <button onClick={() => setShowEditNickname(true)}> edit nickname</button>
        <button onClick={removeTeamMember}>delete</button>
        {showEditNickname && (
            <>
                <input
                    type="text"
                    value={tempNickname}
                    onChange={(e) => setTempNickname(e.target.value)}
                />
                <button onClick={() => {
                    updateNickname(tempNickname);
                    setShowEditNickname(false);
                }}
                >
                    save
                </button>
            </>
        )}
    </li>
}
