import axios from './axiosConfig'

export const register = (name, age, email, password) => {

    // Declare Body to POST
    let body = {
        name: name,
        age: age,
        email: email,
        password: password
        
    }

    // Send POST request to register endpoint
    // http://localhost:4000/api/auth/login
    return axios.post('/auth/register', body)

}

export const login = (email, password) => {
    //declare body to POST
    let body = {
        email: email,
        password: password
    }

    //send post request to login endpoint
    return axios.post('/auth/login', body)
}