import React, { useEffect, useState } from "react";
import {fetchMusObjects} from "../utils/api";
import  Link  from 'react-router-dom' ;

type MuseumObject = {
  total : number;
  objectIDs: [];
  }


const MuseumObjects: React.FC = () => {
  // Typing the state as an array of User objects
  const [museumObjects, setMuseumObjects] = useState<MuseumObject | undefined>(undefined);

  useEffect(() => {
    fetchMusObjects(1,'sunflower',false).then((museumObjectsFromApi:any) => {
    console.log('taglist from api'+museumObjectsFromApi);
      setMuseumObjects(museumObjectsFromApi);
    });
  }, []);

  if (!museumObjects) {
    return <p>Loading...</p>;
  };


  return (
    <div style={{
      width: '500px',
      height: '200px',
      overflowY: 'scroll' ,// Show scrollbar if content overflows
      border: '1px solid black',
      marginTop: '20px',
    }}>
       <h3>Total Museum Objects: {museumObjects.total}</h3>
      <ul>
        {museumObjects.objectIDs.slice(0, 10).map((objectID, index) => (
          <li key={index}>
            Object ID: {objectID}
            {/* Example Link for each object, assuming you want to link to each object detail page */}
            {/* <Link to={`/object/${objectID}`}>View Object</Link> */}
          </li>
        ))}
      </ul>
     {/* <p>{ museumObjects}</p> */}
    {/* <ul> packageList 
       {museumObjects.map((museumObj, index) => (
          <li key={index}>
                     {museumObj}
            {/* <Link to="/some-path">Go to Some Path</Link> 
     
        </li>
      ))}
      </ul> */}
      </div>
  );
};

export default MuseumObjects;