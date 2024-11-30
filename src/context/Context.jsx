import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 10 * index); // Adjust delay for smooth typing effect
  };

  const newChat = () => {
    setLoading(false);
    setShowResults(false);
    setResultData("");  // Reset resultData when starting a new chat
  };

  // Format response (HTML formatting)
  const formatResponse = (response) => {
    let formattedResponse = response
      // Replace **bold** with <b>bold</b>
      .replace(/\*\*(.*?)\*\*/g, "<br><b>$1</b><br/>")
      // Replace *line breaks* with <br/>
      .replace(/\*(.*?)\*/g, "<br/>$1<br/>")
      // Handle other formatting like *italics* or hyperlinks here as needed
      .replace(/_(.*?)_/g, "<i>$1</i>"); // Example for italic formatting

    return formattedResponse;
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);
    let response;

    if (prompt !== undefined) {
      response = await runChat(prompt); // Send prompt to the chatbot API
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input); // Send user input to the chatbot API
    }

    try {
      // Format the response with HTML tags for bold, italics, and line breaks
      let formattedResponse = formatResponse(response);
      
      // Convert response to array of characters for typing effect
      let newResponseArray = formattedResponse.split("");
      
      // Simulate typing effect by adding characters one by one
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord); // Delay the addition of each character
      }
    } catch (error) {
      console.error("Error while running chat:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    input,
    setInput,
    showResults,
    loading,
    resultData,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
