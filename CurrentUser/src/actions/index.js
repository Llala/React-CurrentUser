import axios from "axios";


//const ROOT_URL = 'https://msmeta6.experium.ru/Support/SupportSrv.svc/Support';
//const ROOT_URL = 'https://ratest.experium.ru/SupportSrv/SupportSrv.svc/Support';
const ROOT_URL = 'http://localhost/SupportSrv/SupportSrv.svc/Support';
const USER_URL = '/v2/user/current';
//const AUTH_URL = '/v2/ext/login';
const AUTH_URL = '/v2/login/common';

import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_USER,
  FETCH_ERROR
} from './types';

export function fetchUser() {
    const infurl = `${ROOT_URL}${USER_URL}`;
    const webCatalog = 'santiago'; 
    
    return function(dispatch) {   
      axios({
        method: 'GET',
        url: infurl,
        headers: {
          "Web-Catalog": webCatalog,
          "Accept-Language": "ru-RU",
          "Authorization": localStorage.getItem('token')
        }
      })      
      .then(response => {
        dispatch({ type: FETCH_USER, payload: response });
        console.log(response.data); 
      })
      .catch(response => dispatch({type: FETCH_ERROR}));
    }
  }

  export function getToken(){
    const userName = 'ivan';
    const password = 'qwe123';     
    const webCatalog = 'santiago';    
    const myurl = `${ROOT_URL}${AUTH_URL}`;
    return function(dispatch) {
      axios({
        method: 'POST',
        url: ROOT_URL + AUTH_URL,
        headers: {
          "Web-Catalog": webCatalog,
          "Accept-Language": "ru-RU"
        },
        auth:
              {
                username: userName,
                password: password
              }
      })
      .then(request => {          
          dispatch({ type: AUTH_USER, payload: request.data });
          console.log(request.data.token); 
          localStorage.setItem('token', request.data.token);      
      })
      .catch(request => dispatch({ type: AUTH_ERROR, payload: request.data.error }));
    }
  }

  