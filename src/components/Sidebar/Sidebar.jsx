import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Sidebar({ extended }) {
  // const [extended, setExtended] = useState(false);
  const {
    onSend,
    prevPrompts,
    setRecentPrompt,
    setShowResult,
    showResult,
    setLoading,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);
  };

  return (
    <div className={`sidebar ${!extended ? "hide-sidebar" : ""}`}>
      <div className="top">
        {/* <img className="menu" src={assets.menu_icon} alt="menu" onClick={()=>{setExtended(!extended)}}/> */}
        <div
          className="new-chat"
          onClick={() => {
            setShowResult(false), setLoading(false);
          }}
        >
          <img src={assets.plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  className="recent-entry"
                  onClick={() => loadPrompt(item)}
                  key={index}
                >
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question-icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
