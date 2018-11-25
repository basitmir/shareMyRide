import { profile } from "../profile/profile";


export interface Message{
    profile:profile;
    date:Date;
    lastMessage:string;
}