import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post('/user/login', {email, password});
    if(response.status !== 200){
        throw new Error('Unable to log in ');
    }
    const data = await response.data;
    return data;
};

export const checkAuthStatus = async () => {
    const res = await axios.get('/user/auth-status');
    if(res.status !== 200){
        throw new Error('Unable to check auth status');
    }
    const data = await res.data;
    return data
};

export const sendChatRequest = async (message:string) => {
    const res = await axios.post('/chats/new', {message});
    if(res.status !== 200){
        throw new Error('Unable to send chat');
    }
    const data = await res.data;
    return data
};