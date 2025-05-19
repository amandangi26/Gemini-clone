import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSend = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
      response = await run(prompt);
      setRecentPrompt(prompt);
      
    }
    else{
      setPrevPrompts((prev) => [ ...prev,input]);
      setRecentPrompt(input);
      response = await run(input);
    }
    let responseArray = response.split("**");
    let newResponse="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<strong>" + responseArray[i] + "</strong>";
      }
    }

    let newResponse2 = newResponse.split("*").join("<br>");
    let nweResponseArray = newResponse2.split(" ");

    for (let i = 0; i < nweResponseArray.length; i++) {
      const nextWord = nweResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSend,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    setShowResult
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
