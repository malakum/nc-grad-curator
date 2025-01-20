import React, { useEffect, useState } from "react";
import {fetchData2} from "../utils/api";


const NhmGroupList: React.FC = () => {
  // Typing the state as an array of User objects
  const [groupList, setGroupList] = useState<String[]>([]);

  useEffect(() => {
   fetchData2().then((groupListFromApi:any) => {
    console.log('taglist from api'+groupListFromApi);
      setGroupList(groupListFromApi);
    });
  }, []);

  return (<div style={{
    width: '500px',
    height: '200px',
    overflowY: 'scroll' ,// Show scrollbar if content overflows
    border: '1px solid black',
    marginTop: '20px',
  }}>
    <ul> groupList 
       {groupList.map((group, index) => (
          <li key={index}>
            {/* Render each tag's name */}
            {group}
     
        </li>
      ))}
      </ul>
      </div>
  );
};


export default NhmGroupList;


