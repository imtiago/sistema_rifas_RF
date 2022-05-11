const urlApi = "http://localhost:3333/"

export const api = async (path: string) => {
    const response = await fetch(urlApi + path);
    if(response.status === 200){
        return await response.json();
    }
}