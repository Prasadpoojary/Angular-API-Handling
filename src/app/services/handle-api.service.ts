import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HandleAPIService {

  constructor(private httpclient:HttpClient) { }

  private url:string="https://randomuser.me/api";

  getResponse=()=>
  {
    return this.httpclient.get(this.url);
  }


}
