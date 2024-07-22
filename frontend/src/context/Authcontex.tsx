import {createContext, ReactNode,useContext,useEffect,useState} from 'react'
import { loginUser } from '../helpers/api-communicator';

type User = {
    name: string;
    email: string;
}
type UserAuth = {
    isLogedIn: boolean;
    user: User | null;

    signup:(name:string,email:string,password:string)=>Promise<void>;
    login:(email:string,password:string)=>Promise<void>;
    logout:()=>Promise<void>;
};
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({children}:{children:ReactNode}) =>{
    const[user,setUser]= useState<User | null>(null);
    const[isLogedIn,setIsLogedIn]= useState(false);

    useEffect(()=>{
        //check if we have cookiees or not
    },[]);
    const signup = async(name:string,email:string,password:string)=>{};
    const logout = async()=>{};
    const login = async(email:string,password:string)=>{
        const data = await loginUser(email,password);
        if(data){
            setUser({email:data.email,name:data.name});
            setIsLogedIn(true);
        }
    };

    const value = {user,isLogedIn,signup,login,logout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth =()=> useContext(AuthContext); 