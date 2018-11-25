/*//import {sharerides} from "../../models/shareride/shareride"
import { userList } from "../profiles/profiles";
import { sharerides } from "../../models/shareride/shareride.interface";
//import { userList } from "../users/users";


const userlist=userList;
const shareridelist: sharerides[]=[];
userlist.forEach(user=>{
    shareridelist.push({user:user, rideType:'oneway',origin:'dargah',destination:'lalchowk',stopoverpoint:'Rainawari',departureDate:new Date()
    ,departuretime:new Date(),returnTime:new Date()})
})



/*const shareridelist: sharerides[]=[
{ user:userlist[0], rideType:'oneway',origin:'dargah',destination:'lalchowk',stopoverpoint:'Rainawari',departureDate:new Date()
,departuretime:new Date(),returnTime:new Date()},

{ user:userlist[1], rideType:'oneway',origin:'dargah',destination:'lalchowk',stopoverpoint:'Rainawari',departureDate:new Date()
,departuretime:new Date(),returnTime:new Date()},

{ user:userlist[2], rideType:'oneway',origin:'Qamerwari',destination:'Dargah',stopoverpoint:'Rainawari',departureDate:new Date()
,departuretime:new Date(),returnTime:new Date()}

]
export const shareRideList=shareridelist;*/