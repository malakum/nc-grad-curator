import axios, { AxiosResponse } from 'axios';

//https://api.europeana.eu/record/v2/90402/RP_P_1984_87.json?wskey=okegainerom
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


// Axios instance
const newsApi = axios.create({
  baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1',
});

// Define types for the article and responses
type Article = {
  objectIDs: number;
  
};

type ArticlesResponse = {
  articles: Article[];
  
};



//Function to get articles based on topic and sorting
export const getArticles = (
  // topic: string,      // Topic should be a string
  // sortby: string      // Sort parameter should also be a string
): Promise<ArticlesResponse> => {
  return newsApi
    .get<ArticlesResponse>('/objects') //, { params: { topic, sort_by: sortby } })
    .then((res: AxiosResponse<ArticlesResponse>) => res.data); //res.data); // Return the articles data
};

// Function to get an article by its ID
// export const getArticleById = (objectIDs: number): Promise<Article> => {
//   return newsApi
//     .get<ArticleResponse>(`/objects/${objectIDs}`)
//     .then((res: AxiosResponse<ArticleResponse>) => res.data); // Return the specific article
// };


 async function fetchData(){
  
  const url = 'https://data.nhm.ac.uk/api/3';
  
  try {
    const response1 = await axios.get(url+'/action/tag_list'); // Make GET request
    
     getTagList = response1.data.result.slice(0,10);
    
    
     return getTagList;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();

async function fetchData2(){

  const url = 'https://data.nhm.ac.uk/api/3';
  
  try {
    const response1 = await axios.get(url+'/action/package_list'); // Make GET request
    
     getPackageList = response1.data.result.slice(0,10);
    
    
     return getPackageList;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData2();

async function fetchData3(){
  
  const url = 'https://data.nhm.ac.uk/api/3';
  
  try {
    const response1 = await axios.get(url+'/action/group_list'); // Make GET request
    
     getGroupList = response1.data.result.slice(0,10);
    
    
     return getGroupList;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData3();


async function fetchDataPackage(){
  const url = 'https://collectionapi.metmuseum.org/public/collection/v1';

  
  try {
    const response1 = await axios.get(url+'/objects'); // Make GET request
   
      getMuseumObject = response1.data.objectIDs.slice(0,50);
     console.log(response1.data.objectIDs.slice(0,50));
    
      
     return getMuseumObject;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchDataPackage();

async function fetchDataDetailPackage(objectIDs: number){
  
  const url = `https://collectionapi.metmuseum.org/public/collection/v1`;
    try {
    const response1 = await axios.get(url+`/objects/${objectIDs}`); // Make GET request
   
    
     getMuseumObjectDetail = response1.data;

     return getMuseumObjectDetail;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchDataDetailPackage(2);

interface Department {
  departmentId: number;
  displayName: string;
  
}

interface DepartmentResponse {
  departments: Department[];
}

// interface SingleDepartmentResponse {
//   departmentId: number;
//   displayName: string;
//   description: string;
//   // You can add more fields depending on the actual API response
// }

// Create Axios instance
// const newsApi = axios.create({
//   baseURL: "https://collectionapi.metmuseum.org/public/collection/v1",
// });


console.log('departments1');
// export const getDepartments = (): Promise<Department[]> => {
//   return newsApi
//     .get<DepartmentResponse>("/departments")
//     .then((res: AxiosResponse<DepartmentResponse>) => {
//       console.log('data');
//       console.log(res.data);
//       console.log('departments2');
//       console.log(res.data.departments);
//       return res.data.departments;
//     });
// };
async function fetchDepartments(){
  
  const url = `https://collectionapi.metmuseum.org/public/collection/v1`;
    try {
    const response1 = await axios.get(url+`/departments`); // Make GET request
   //console.log(response1.data);
    
     getMuseumObjectDetail = response1.data.departments;
    // museumObject = response1.data;
    
    //  console.log('package detail data');
      console.log( getMuseumObjectDetail);
    
     return getMuseumObjectDetail;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchDepartments();

console.log('departments3');

interface MusObjects {
  total :number;
  objectIDs :[]
  
}

interface MusObjectsResponse {
  musObjects1: MusObjects[];
}

async function fetchMusObjects(departmentId :number, q:string, isHighlight:boolean){
  //const url = 'https://api.example.com/data';
  const url = `https://collectionapi.metmuseum.org/public/collection/v1`;
    try {
   
       const query = [];
    // search?q=sunflowers
    // search?isHighlight=true&q=sunflowers
    // search?departmentId=6&q=cat
      
      if (isHighlight) query.push(`isHighlight=${isHighlight}`);
      if (departmentId) query.push(`departmentId=${departmentId}`);
      if (q) query.push(`q=${q}`);
      const queryString = query.length ? `?${query.join("&")}` : "";
    //  const url = `/search? ${queryString}`;
    
      
    
    const response1 = await axios.get(url+`/search${queryString}`); // Make GET request
   //console.log(response1.data);
    
     const getMusObjects = response1.data;
    
      console.log( getMusObjects);
    
     return getMusObjects;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchMusObjects(1,'sunflower',false);

console.log('departments3');


// // Get department by ID
// export const getDepartmentById = (department_id: number): Promise<SingleDepartmentResponse> => {
//   return newsApi
//     .get<SingleDepartmentResponse>(`/departments/${department_id}`)
//     .then((res: AxiosResponse<SingleDepartmentResponse>) => {
//       return res.data;
//     });
// };
 async function fetchEuropeanData(){
//   const apiEurope = axios.create({
//  //   baseURL: `https://whimsydate.onrender.com/api`,
//     baseURL :`https://api.europeana.eu/record/v2/90402`,
//     headers: {
//       "Content-Type": "application/json",
//      // "api-key": API_KEY,
//      "api-key": "okegainerom",
//     },
//   });

   const url2 = `https://api.europeana.eu/record/v2/90402/RP_P_1984_87.json?wskey=okegainerom`;
  // -key ='okegainerom';

  // async function fetchEurope  ()  {
  //   return apiEurope
  //     .get(`/RP_P_1984_87.json`)
  //     .then(({ data }) => {
  //       console.log('data'+data);

  //       console.log('data / data '+data.data);

  //       return data.data;

  //     })
  //     .catch((err) => {
  //       console.error("API error", err);
  //       throw err;
  //     });
  // };
        
  
  try {

    console.log(url2);
    const response1 = await axios.get(url2);
      // headers: {
      //       "Content-Type": "application/json",
      //      // "api-key": API_KEY,
      //      "api-key": "okegainerom",
      //     },); // Make GET request
    
     const getEuropeanData = response1.data;
     console.log('get European data');
     console.log(getEuropeanData);
     console.log('european museum data object agents');
     console.log(getEuropeanData.object.agents);
    
    
     return getEuropeanData;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchEuropeanData();




export  { fetchData ,fetchData2,fetchData3, fetchDataPackage,fetchDataDetailPackage, fetchDepartments, fetchMusObjects ,fetchEuropeanData};

