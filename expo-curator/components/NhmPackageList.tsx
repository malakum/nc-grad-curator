// const NhmPackageList = () => {
//     return (
        
//         <div>NHM Package List</div>
        
//     )
// }

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

  return (
    <ul> packageList 
       {packageList.map((package1, index) => (
          <li key={index}>
            {/* Render each tag's name */}
            {package1}
     
        </li>
      ))}
      </ul>
  );
};

export default NhmPackageList;