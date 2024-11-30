import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Main = ({isLoggedIn,setIsLoggedIn}) => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  return (
    <div className="main">
      <div className="nav">
        <div className="insidenav">
          <p>DocTalk HealthCare Chatbot</p>
          <img src={assets.imagesbg} alt="" />
        </div>

        <div className="flex mr-2 gap-2">
        <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className=" text-black  py-[5px] px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
          </Link>

        <img src={assets.user} alt="" />
        </div>


      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello!</span>
              </p>
              <p>How Can i Help You Today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("What are some tips for healthy lifestyle ?")
                }
              >
                <p>What are some tips for maintaining a healthy lifestyle? </p>
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("How can I improve my sleep quality?")
                }
              >
                <p>How can I improve my sleep quality?</p>
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "What are the benefits of regular physical activity?"
                  )
                }
              >
                <p>What are the benefits of regular physical activity?</p>
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => {
                  handleCardClick(
                    "Can you explain the importance of a balanced diet for overall health? "
                  );
                }}
              >
                <p>
                  Can you explain the importance of a balanced diet for overall
                  health?
                </p>
              
                <img
                  src={
                    "https://icon2.cleanpng.com/20231017/ouh/transparent-healthy-lifestyle-image-circular-frame-of-fruits-vegetables-and-1711059020583.webp"
                  }
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img
                src={
                  "data:image/png;base64,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"
                }
                alt=""
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the  Query Here"
            />
            <div>
              {/* <img src={assets.gallery_icon} alt="" /> */}
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
