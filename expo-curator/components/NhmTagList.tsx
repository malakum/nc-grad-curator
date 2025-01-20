import React, { useEffect, useState } from "react";
import {fetchData} from "../utils/api";


const NhmTagList: React.FC = () => {
  // Typing the state as an array of User objects
  const [tagList, setTagList] = useState<String[]>([]);

  useEffect(() => {
   fetchData().then((tagListFromApi:any) => {
    console.log('taglist from api'+tagListFromApi);
      setTagList(tagListFromApi);
    });
  }, []);

  return (<div style={{
    width: '500px',
    height: '200px',
    overflowY: 'scroll' ,// Show scrollbar if content overflows
    border: '1px solid black',
    marginTop: '20px',
  }}>
    <ul> tagList 
       {tagList.map((tag, index) => (
          <li key={index}>
            {/* Render each tag's name */}
            {tag}
     
        </li>
      ))}
      </ul>
      </div>
  );
};


export default NhmTagList;
