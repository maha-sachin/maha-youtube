import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //API Pooling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(20),
        })
      );
    }, 900);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[650px] ml-2 border border-black p-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full p-2 ml-2 border boder-black" onSubmit={(e)=>{
        e.preventDefault()
        //console.log("on submit", liveMsg)
        dispatch(addMessage({
            name:"maha",
            message:liveMsg
        }))
        setLiveMsg("")
      }}>
        <input
          className="w-65 px-2"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
          type="text"
        />
        <button className="px-2 mx-2 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
