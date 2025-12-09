//const axios = require("axios"); // Common JS sätt att importera
import axios from "axios"; // ES6 modules (mer modernt och samma på backend som frontend)


const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getUsers() {
    try {
        const response = await axios.get(`${BASE_URL}/users`);

        // Axios gör JSON-konverteringen direkt, man behöver inte göra .json()
        
        console.log(response);


    } catch(error) {
        console.error("Error", error.message);
    }
}

getUsers();