import { getEnvVariables } from "../helpers/getEnvVariables";

const API = getEnvVariables();

export const deleteCategory = (id) => {
    return fetch(`${API.REACT_APP_API}/category/${id}`,{
        method: 'DELETE',
    }).then((res) => res.json())
    .catch((error) => console.log(error));
}
