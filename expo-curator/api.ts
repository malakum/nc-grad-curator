import axios from "axios";
let getTagList: string [] = [];

//interface nhmTagList  = [];
async function fetchData() {
  //const url = 'https://api.example.com/data';
  const url = 'https://data.nhm.ac.uk/api/3';
  
  try {
    const response1 = await axios.get(url+'/action/tag_list'); // Make GET request
    
    console.log(response1.data); // Handle the data
     getTagList = response1.data.result;
     console.log('nhm tag list'+getTagList);
     return getTagList;
    // export  module = getTagList
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
export default getTagList ;


// const nhmApi = axios.create({
//     baseURL: "https://data.nhm.ac.uk/api/3"
// });
// console.log(nhmApi);
// export const getTagList = () => {
//     return nhmApi.get("/action/tag_list").then(res => {
//         //result
      
//         console.log('data result'+res.data.result);
      
//         return res.data.result;
//     })
// }

// export const getPackageList = () => {
//     return newsApi.get("/action/package_list").then(res => {
//         //result
//         console.log(res.data);
//         return res.data.package_list;
//     })
// }

// export const getGroupList = () => {
//     return newsApi.get("/action/group_list").then(res => {
//         console.log(res.data);
//         //result
//         return res.data.group_list;
//     })
// }