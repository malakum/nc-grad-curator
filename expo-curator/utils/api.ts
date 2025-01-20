import axios   from "axios";


let getTagList: string [] = [];

let getPackageList: string [] =[];

let getGroupList: string [] = [];
let getMuseumObject : string|number [] = [];

type MuseumObject = {
  id: number;
   age: number;
   isStudent: boolean;
  // greet: () => void;
};

let museumObject: MuseumObject = {
  id: 0,
   age: 30,
 isStudent: false,
  
};

let getMuseumObjectDetail: string ="";

 async function fetchData(){
  //const url = 'https://api.example.com/data';
  const url = 'https://data.nhm.ac.uk/api/3';
  
  try {
    const response1 = await axios.get(url+'/action/tag_list'); // Make GET request
    
     getTagList = response1.data.result.slice(0,10);
     console.log("tag list"+ getTagList);
    
     return getTagList;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();
//export default fetchData;
async function fetchData2(){
  //const url = 'https://api.example.com/data';
  const url = 'https://data.nhm.ac.uk/api/3';
  
  try {
    const response1 = await axios.get(url+'/action/package_list'); // Make GET request
    
     getPackageList = response1.data.result.slice(0,10);
     console.log("package list"+ getPackageList);
    
     return getPackageList;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData2();

async function fetchData3(){
  //const url = 'https://api.example.com/data';
  const url = 'https://data.nhm.ac.uk/api/3';
  
  try {
    const response1 = await axios.get(url+'/action/group_list'); // Make GET request
    
     getGroupList = response1.data.result.slice(0,10);
     console.log("group list"+ getGroupList);
    
     return getGroupList;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData3();


async function fetchDataPackage(){
  //const url = 'https://api.example.com/data';
  const url = 'https://collectionapi.metmuseum.org/public/collection/v1';
  //https://data.nhm.ac.uk/api/3/dataset/twenty-years-of-big-plant-genera
  
  try {
    const response1 = await axios.get(url+'/objects'); // Make GET request
    //console.log(response1.data);
    
     getMuseumObject = response1.data.objectIDs.slice(0,10);
     console.log("package list"+ getMuseumObject);
    
     return getMuseumObject;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchDataPackage();

async function fetchDataDetailPackage(){
  //const url = 'https://api.example.com/data';
  const url = `https://collectionapi.metmuseum.org/public/collection/v1`;
    try {
    const response1 = await axios.get(url+`/objects/2`); // Make GET request
   // console.log(response1.data);
    
     getMuseumObjectDetail = response1.data;
    // museumObject = response1.data;
    
     console.log('package detail data');
     console.log( getMuseumObjectDetail);
    
     return getMuseumObjectDetail;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchDataDetailPackage();




export  { fetchData ,fetchData2,fetchDataPackage,fetchDataDetailPackage,fetchData3 };

