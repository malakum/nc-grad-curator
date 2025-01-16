import React, { useEffect, useState } from "react";
//import { getTagList } from "../api";
import  getTagList from "../api";
//import { Link } from "react-router-dom";



const nhmTagList:React.FC = () => {
  // Declare a state that can be either a string or null
  const [message, setMessage] = useState<string | []>([]);

  const showMessage = () => {
    setMessage ('getTagList');
  };

    
  return (
    <div>
      {message ? <p>{message}</p> : <p>No message</p>}
      <button onClick={showMessage}>Show Message</button>
    </div>
  );
};

export default nhmTagList;
