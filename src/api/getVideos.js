import { getEnvVariables } from "../helpers/getEnvVariables";

const API = getEnvVariables();
export const getVideos = async () => {
    try {
      const response = await fetch(`${API.REACT_APP_API}/video`);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      
      console.error(error);
      throw error; 
    }
};