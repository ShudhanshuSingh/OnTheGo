import React, { useState } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const toggle = () => {
    setVisible(!visible);
  };
  const joinIn = () => {
    if (id === "" || id.length<6) {
      alert("Enter a valid code");
    } else {
      navigate(`/${id}`);
      setVisible(!visible);
    }
  };

  return (
    <div className="NavBar">
      <Link to="/">
        <div className="nav-logo">
          <h3>OnTheGo</h3>
        </div>
      </Link>
      <div className="nav-ls">
        <li>Features</li>
        <li onClick={toggle}>Join Room</li>
        <li>Invite Friends</li>
      </div>
      <div className="nav-btn">
        <button className="nav-signin">Sign In</button>
        <button className="nav-createacc">Create Account</button>
      </div>
      {visible ? (
        <div className="room-modal">
          <input type="text" onChange={(e) => setId(e.target.value)} />
          <button className="join-room-btn" onClick={joinIn}>
            Less Go!
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavBar;
