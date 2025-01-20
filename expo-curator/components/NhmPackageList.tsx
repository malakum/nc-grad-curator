     
import React, { useEffect, useState } from "react";
import {fetchData3} from "../utils/api";


const NhmPackageList: React.FC = () => {
  // Typing the state as an array of User objects
  const [packageList, setPackageList] = useState<String[]>([]);

  useEffect(() => {
   fetchData3().then((packageListFromApi:any) => {
    console.log('taglist from api'+packageListFromApi);
      setPackageList(packageListFromApi);
    });
  }, []);

  return (<div style={{
    width: '500px',
    height: '200px',
    overflowY: 'scroll' ,// Show scrollbar if content overflows
    border: '1px solid black',
    marginTop: '20px',
  }}>
    <ul> packageList 
       {packageList.map((package1, index) => (
          <li key={index}>
            {/* Render each tag's name */}
            {package1}
     
        </li>
      ))}
      </ul>
      </div>
  );
};

export default NhmPackageList;