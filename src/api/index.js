import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // withCredentials: true // needed for authentication,
})

// instance.interceptors.request.use( request => {
//     request.headers.common['Accept'] = 'application/json';
//     request.headers.common['Content-Type'] = 'application/json';
// })

// instance.interceptors.response.use(
//     response => { 
//         return response 
//     },
//     error => { 
//         return Promise.reject(error) 
//     }
// )

export default instance