import {SERVICE_URL} from "ServerAddress";

const getTurbines = (areaName) => fetch(`${SERVICE_URL}/tribune/${areaName}`).then(response => response.json());

export {
    getTurbines
}