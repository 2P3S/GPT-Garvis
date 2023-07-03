import axios from 'axios'
import { RoomRequest } from './interface';

export const FRONT_BASE_URL = 'http://localhost:3000' ;
export const BASE_URL = 'http://localhost:3001/api' ;

const api = axios.create({
    baseURL : BASE_URL,
    headers : { 'Content-Type' : 'application/json' }
}) ;

export const roomCreate = ( request : any ) => api.post('/chat/room/create', request) ;
export const roomAccess  = ( request : any, roomId : string ) => api.post(`/chat/room/enter/${roomId}`, request)