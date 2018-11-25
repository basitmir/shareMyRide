//import { profile } from "../../models/user/user";
import { profile } from "../../models/profile/profile";
import { Message } from "../../models/messages/messages";

const userlist: profile[] =[
    { firstName:'Basit', lastName :'Mir',avatar:'/assets/imgs/me.jpg',email:'basitmir@gmail.com',phone:9858536852},
    { firstName:'Mohmmad', lastName :'Shayaq',avatar:'/assets/imgs/me.jpg',email:'mohmmadshayaq@gmail.com',phone:2103960},
    { firstName:'Tanzeel', lastName :'Khan',avatar:'/assets/imgs/me.jpg',email:'tanzeelkhan@gmail.com',phone:7889567946},
    { firstName:'Basit', lastName :'Mir',avatar:'/assets/imgs/me.jpg',email:'basitmir@gmail.com',phone:9858536852},
    { firstName:'Mohmmad', lastName :'Shayaq',avatar:'/assets/imgs/me.jpg',email:'mohmmadshayaq@gmail.com',phone:2103960},
    { firstName:'Tanzeel', lastName :'Khan',avatar:'/assets/imgs/me.jpg',email:'tanzeelkhan@gmail.com',phone:7889567946},
    { firstName:'Basit', lastName :'Mir',avatar:'/assets/imgs/me.jpg',email:'basitmir@gmail.com',phone:9858536852},
    { firstName:'Mohmmad', lastName :'Shayaq',avatar:'/assets/imgs/me.jpg',email:'mohmmadshayaq@gmail.com',phone:2103960},
    { firstName:'Tanzeel', lastName :'Khan',avatar:'/assets/imgs/me.jpg',email:'tanzeelkhan@gmail.com',phone:7889567946},
    { firstName:'Basit', lastName :'Mir',avatar:'/assets/imgs/me.jpg',email:'basitmir@gmail.com',phone:9858536852},
    { firstName:'Mohmmad', lastName :'Shayaq',avatar:'/assets/imgs/me.jpg',email:'mohmmadshayaq@gmail.com',phone:2103960},
    { firstName:'Tanzeel', lastName :'Khan',avatar:'/assets/imgs/me.jpg',email:'tanzeelkhan@gmail.com',phone:7889567946}
];

const messageList:Message[]=[
    {profile:userlist[0],date:new Date(),lastMessage:"this is me"},
    {profile:userlist[1],date:new Date(),lastMessage:"this is tanzewel"},
    {profile:userlist[2],date:new Date(),lastMessage:"mohmad shayaq is here"},
    {profile:userlist[3],date:new Date(),lastMessage:"this is me"},
    {profile:userlist[4],date:new Date(),lastMessage:"this is tanzewel"},
    {profile:userlist[5],date:new Date(),lastMessage:"mohmad shayaq is here"},
    {profile:userlist[6],date:new Date(),lastMessage:"this is me"},
    {profile:userlist[7],date:new Date(),lastMessage:"this is tanzewel"},
    {profile:userlist[8],date:new Date(),lastMessage:"mohmad shayaq is here"},
    {profile:userlist[9],date:new Date(),lastMessage:"this is me"},
    {profile:userlist[10],date:new Date(),lastMessage:"this is tanzewel"},
    {profile:userlist[11],date:new Date(),lastMessage:"mohmad shayaq is here"}
    

]
export const message_List=messageList;