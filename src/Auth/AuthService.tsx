import axios from 'axios';

interface LoginCredentials {
    username: string,
    password: string
}

export interface User {
    name: string
    email: string
}

export async function authenticate(credentials: LoginCredentials) {
    const baseURL = "http://localhost:8082";
    const headers = { 'Authorization': `Basic ${btoa(credentials.username + ':' + credentials.password)}` };
    const response = await axios.post<User>("/user", credentials, { headers: headers });
    return response.data;
}

