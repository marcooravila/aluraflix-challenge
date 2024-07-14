import { getEnvVariables } from "../helpers/getEnvVariables";

const API = getEnvVariables();
export const updateCategory = (name, description, color, id) => {
    return fetch(`${API.REACT_APP_API}/category/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, description, color, id})
    })
}
