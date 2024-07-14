import { v4 as uuidv4 } from 'uuid';
import { getEnvVariables } from '../helpers/getEnvVariables';
const API = getEnvVariables();

export const addVideo = async( title, link, category, descripcion) => {
    return await fetch(`${API.REACT_APP_API}/video`,{
         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({ title, link, category, descripcion, id: uuidv4()})
     })
 }
 