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

  return (
    <ul> groupList 
       {groupList.map((group, index) => (
          <li key={index}>
            {/* Render each tag's name */}
            {group}
     
        </li>
      ))}
      </ul>
  );
};


export default NhmGroupList;


