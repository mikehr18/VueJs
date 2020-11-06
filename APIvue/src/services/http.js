import axios from "axios";
export const BASE_URL =
  //"https://api.nasa.gov/planetary/apod?date=2019-01-01&hd=True&api_key=NEc2hHHqnnYFlI9Wz06IRMnn0ZwSaw1NQuPkuwA2";
  //"https://api.nasa.gov/planetary/apod?";
  //"https://api.nasa.gov/planetary/apod?api_key=NEc2hHHqnnYFlI9Wz06IRMnn0ZwSaw1NQuPkuwA2";
  //"https://api.nasa.gov/planetary/";
  "http://127.0.0.1:8000/api/images/";
//Instancia de axios para consumo de api
export const HTTP = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
  //  withCredentials: true
});
