import React, { useContext } from 'react';
import "./Main.css"
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

function Main() {
    
    const {
        prevPrompts,
        setPrevPrompts,
        onSend,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
        } =useContext(Context)

  return <div className='main'>
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
    </div>

    <div className="main-container">
        {!showResult ? <><div className="greet">
            <p><span>Hello, AMAN</span></p>
            <p>How can i hep you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>History of computer</p>
                    <img src={assets.compass_icon} alt="compass_icon" />
                </div>
                <div className="card">
                    <p>Suggest a good health care dite</p>
                    <img src={assets.bulb_icon} alt="bulb_icon" />
                </div>
                <div className="card">
                    <p>Help me to create resume</p>
                    <img src={assets.message_icon} alt="essage_icon" />
                </div>
                <div className="card">
                    <p>Improve this code</p>
                    <img src={assets.code_icon} alt="code_icon" />
                </div>
        </div></>: <div className='result'>
            
            <div className="result-title">
                <img src={assets.user_icon} alt="user_icon" />
                <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
                <img src={assets.gemini_icon} alt="gemini_icon" />
                {loading ? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />

                </div> :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            </div>

            </div>
            }
        
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here' onChange={(e)=>setInput(e.target.value)} value={input}/>
                <div>
                    <img src={assets.gallery_icon} alt="gallery_icon" />
                    <img src={assets.mic_icon} alt="mic_icon" />
                    {input?<img src={assets.send_icon} alt="send_icon" onClick={()=>onSend()} />:null}
                </div>
            </div>
            <div className="bottom-info">
                <p>Gemini may display inaccurate info,including about people, so double-check it's responses. <a href="#">Your privacy and Gemini Apps</a></p>
            </div>
        </div>
    </div>
  </div>
}

export default Main;