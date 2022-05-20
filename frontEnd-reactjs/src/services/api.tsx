import axios from "axios";

const urlApi = "http://localhost:3333/"

const api = axios.create({url:urlApi});


// async (path: string) => {
//     const response = await fetch(urlApi + path);
//     if(response.status === 200){
//         return await response.json();
//     }
// }
// export const api = async (path: string) => {
//     const response = await fetch(urlApi + path);
//     if(response.status === 200){
//         return await response.json();
//     }
// }
export default api;
