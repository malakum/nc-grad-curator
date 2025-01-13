import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://data.nhm.ac.uk/api/3"
});

export const getTagList = () => {
    return newsApi.get("/action/tag_list").then(res => {
        //result
        return res.data.tag_list;
    })
}

export const getPackageList = () => {
    return newsApi.get("/action/package_list").then(res => {
        //result
        return res.data.tag_list;
    })
}

export const getGroupList = () => {
    return newsApi.get("/action/group_list").then(res => {
        //result
        return res.data.tag_list;
    })
}