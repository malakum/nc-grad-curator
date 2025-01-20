import React, { useEffect, useState } from "react";
import {fetchDataPackage} from "../utils/api";


const MuseumObjects: React.FC = () => {
  // Typing the state as an array of User objects
  const [museumObjects, setMuseumObjects] = useState<number[]>([]);

  useEffect(() => {
    fetchDataPackage().then((museumObjectsFromApi:any) => {
    console.log('taglist from api'+museumObjectsFromApi);
      setMuseumObjects(museumObjectsFromApi);
    });
  }, []);

  return (
    <div style={{
      width: '500px',
      height: '200px',
      overflowY: 'scroll' ,// Show scrollbar if content overflows
      border: '1px solid black',
      marginTop: '20px',
    }}>
    <ul> packageList 
       {museumObjects.map((museumObj, index) => (
          <li key={index}>
            {/* Render each tag's name */}
            {museumObj}
     
        </li>
      ))}
      </ul>
      </div>
  );
};

export default MuseumObjects;