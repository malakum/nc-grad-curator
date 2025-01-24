import React, { useEffect, useState } from "react";
import {fetchEuropeanData} from "../utils/api";
// import { useParams } from "react-router-dom";

// interface RouteParams {
//   objectIDs: number; // assuming objectIDs is a string, change the type if necessary
// };

type EuropeanMus = {
    objectID:number;
    department: string;
    objectName :string;
    title:string;
    artistAlphaSort: string;
    artistNationality: string;
      artistGender: string;
    artistWikidata_URL :string;
    artistULAN_URL: string;    //'http://vocab.getty.edu/page/ulan/500077295',
   objectDate: string;  //'1901',
  objectBeginDate: number ;   //1901,
   objectEndDate: number;  //1901,
   medium: string ;   //'Gold',

};
// department: 'The American Wing',
//   objectName: 'Coin',
//   title: 'Ten-dollar Liberty Head Coin',
//   artistAlphaSort: 'Gobrecht, Christian',
//   artistNationality: 'American',
//   artistBeginDate: '1785',
//   artistEndDate: '1844',
//   artistGender: '',
//   artistWikidata_URL: 'https://www.wikidata.org/wiki/Q5109648',
//   artistULAN_URL: 'http://vocab.getty.edu/page/ulan/500077295',
//   objectDate: '1901',
//   objectBeginDate: 1901,
//   objectEndDate: 1901,
//   medium: 'Gold',


const EuropeanMuseum: React.FC = () => {
  // Typing the state as an array of User objects
//   const [museumObjectDetail, setMuseumObjectDetail] = useState<Museum>({objectID: 0, department :"aa",
//     objectName :'ss',    title:'ss',    artistAlphaSort: 'ss',    artistNationality: 'ss',    
//     artistGender: 'ss',    artistWikidata_URL :'',artistULAN_URL: '',
//    objectDate: '1901',
//       objectBeginDate: 1901,
//        objectEndDate: 1901,
//    medium: 'Gold',});

  //  const {objectIDs} = useParams(); 

//   useEffect(() => {
//     fetchEuropeanData().then((europeanDataFromApi:any) => {
//     console.log('European Data  from api'+europeanDataFromApi);
//       setMuseumObjectDetail(europeanDataFromApi);
//     });
//   }, []);

  return (<div style={{
    width: '500px',
    height: '200px',
    overflowY: 'scroll' ,// Show scrollbar if content overflows
    border: '1px solid black',
    marginTop: '20px',
  }}
  > European Museum 
   {/* <p>museum Id {museumObjectDetail.objectID}</p>
   <p>museum department {museumObjectDetail.department}</p>
   <p>museum Name {museumObjectDetail.objectName}</p>
   <p>museum title {museumObjectDetail.title}</p>
   <p>museum Artist AlphaSort {museumObjectDetail.artistAlphaSort}</p>
   <p>museum Artist Nationality {museumObjectDetail.artistNationality}</p>
   <p>museum Artist Gender {museumObjectDetail.artistGender}</p>
    <a href={museumObjectDetail.artistWikidata_URL} target="_blank" rel="noopener noreferrer">
        Visit Profile
      </a>
      <p>museum Object Date {museumObjectDetail.objectDate}</p>
   <p>museum Object Begin Date {museumObjectDetail.objectBeginDate}</p>
   <p>museum Object End Date {museumObjectDetail.objectEndDate}</p>
      <p>museum medium {museumObjectDetail.medium}</p>
   <a href={museumObjectDetail.artistULAN_URL} target="_blank" rel="noopener noreferrer">
        Visit ULAN Profile
      </a> */}
   </div>
   
  );
};

export default EuropeanMuseum;