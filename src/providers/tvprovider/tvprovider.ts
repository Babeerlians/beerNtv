import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the TvproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TvproviderProvider {

  constructor(public http: HttpClient) {

  }

  getCountries(){
    return this.http.get('http://172.10.2.47:3000').map((country: any) => {
      return country;
    });
  }
  getChannel(id:number){
    return this.http.get('http://172.10.2.47:3000/channel/'+id).map((channel:any) =>{
      return channel;
    })
  }

}
