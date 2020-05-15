import React from 'react';
import axios from 'axios'
const baseUrl="http://localhost:3001/"

 class UserService {

    static register(url,data){
        return axios.post(baseUrl + url, data);   
    }

    static getApi(url){
        return axios.get(baseUrl + url);   
    }
}

export default UserService