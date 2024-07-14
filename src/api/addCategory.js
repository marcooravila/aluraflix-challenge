import { v4 as uuidv4 } from 'uuid';
import { getEnvVariables } from '../helpers/getEnvVariables';
const API = getEnvVariables();

export const addCategory = async( name, description, color) => {
    return await fetch(`${API.REACT_APP_API}/category`,{
         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({ name, description, color, id: uuidv4()})
     })
 }
 