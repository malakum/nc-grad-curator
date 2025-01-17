import React, { useEffect, useState } from "react";
import {fetchData} from "../utils/api";


const NhmTagList: React.FC = () => {
  // Typing the state as an array of User objects
  const [tagList, setTagList] = useState<String[]>([]);


  // Fetch the users' data when the component is first rendered
  useEffect(() => {
   fetchData().then((tagListFromApi:any) => {
    console.log('taglist from api'+tagListFromApi);
      setTagList(tagListFromApi);
    });
  }, []);

  return (
    <ul> tagList 
       {tagList.map((tag, index) => (
          <li key={index}>
            {/* Render each tag's name */}
            {tag}
     
        </li>
      ))}
      </ul>
  );
};

//       {message ? <p>{message}</p> : <p>No message</p>}
//       <button onClick={showMessage}>Show Message</button>
//     </div>
//   );
// };

export default NhmTagList;
