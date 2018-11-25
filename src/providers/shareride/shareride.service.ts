import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { sharerides } from "../../models/shareride/shareride.interface";


@Injectable()
export class sharerideService{


    private sharerideRef=this.db.list<sharerides>('shareride-details');
   // private filter=this.db.list('/shareride-details',ref=>ref.orderByChild('email').equalTo('basit@gmail.com')).valueChanges();
    
       
    constructor(private db: AngularFireDatabase){
        //console.log(this.filter);
    }
    getrideDetails(){
        return this.sharerideRef;
    }
    addrideDetails(sharerides:sharerides){
          return this.sharerideRef.push(sharerides);
    }
    filterData(filter:any){
        return this.db.list<sharerides>('/shareride-details',ref=>ref.orderByChild('email').equalTo(filter));

    }
    removeDetails(sharerides:sharerides){
        return this.sharerideRef.remove(sharerides.key);
    }
        
  /*  searchData(filter:any){
        return this.db.list<sharerides>('/shareride-details',ref=>ref.orderByChild('destination').equalTo(filter));

    }*/
}