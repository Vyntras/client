

const dev = process.env.NODE_ENV == 'development'
const isServer = typeof window === 'undefined';

const setServer = () =>{
    if(dev){
        return process.env.NEXT_PUBLIC_DOMAIN_API
    }else{
        return isServer ? process.env.NEXT_PUBLIC_DOMAIN_API:'/api'
    }
}

export const API = setServer()
