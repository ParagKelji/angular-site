import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = "http://localhost:8090"
    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios.defaults.headers.get["Content-Type"] = "application/json"
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if ( token !== null ) {
      window.localStorage.setItem("auth_token",token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  request(method: string, url: string, data: any): Promise<any> {
    let headers = {};

    if (this.getAuthToken() !== null ) {
      (headers as any)["Authorization"] = "Bearer " + this.getAuthToken(),
      (headers as any)["Access-Control-Request-Method"] = method
    }
    
    
    console.log("data: " + JSON.stringify(data));
    console.log("window.location.search: " + window.location.search);
    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    })
  }

  axiosGet(url: string, data: any) {
    if (  data!== null ) {
      axios.get(url, {
        params: {
          data
        }
      })
      .then( (response) => console.log(response))
      .catch( (error) => console.log(error))
    } else {
      axios.get(url)
      .then( (response) => console.log(response))
      .catch( (error) => console.log(error))
    }
    
  }
}
