import { useState } from "react";
import "./App.css";
import "./Menu.jsx";
import { imageUrl } from "./imageUrl";

export function TeamMember({ id, name, nickname, updateNickname, removeTeamMember }) {
    const [showEditNickname, setShowEditNickname] = useState(false);
    const [tempNickname, setTempNickname] = useState(nickname ?? "");

    return <li>
        <span>{name}{nickname && " "}{nickname}</span>
        <img src={imageUrl(id)} alt={nickname} />
        <button onClick={() => setShowEditNickname(true)}> edit nickname</button>
        <button onClick={removeTeamMember}>delete</button>
        {showEditNickname && (
            <form
                style={{ display: "inline" }}
                onSubmit={() => {
                    updateNickname(tempNickname);
                    setShowEditNickname(false);
                }}
            >
                <input
                    type="text"
                    value={tempNickname}
                    onChange={(e) => setTempNickname(e.target.value)}
                    autoFocus
                />
                <button type="submit">save</button>
            </form>
        )}
    </li>
}
