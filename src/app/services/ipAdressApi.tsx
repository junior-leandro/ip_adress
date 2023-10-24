import axios from "axios";

let API_KEY = 'at_6ttJWVAtb3CMx5RvYZHb9y8eCEW77' // Temporária


// ip adress tracker api
const ipAdressApi = axios.create({
  baseURL: `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`,
});

export default ipAdressApi;