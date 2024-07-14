import { getEnvVariables } from "../helpers/getEnvVariables";
const API = getEnvVariables();

export const getCategories = async () => {
    try {
      const response = await fetch(`${API.REACT_APP_API}/category`);
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