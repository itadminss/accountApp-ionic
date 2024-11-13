import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncometypeService {
   
  url = 'http://localhost/account_api/incometype.php'
  constructor(private httpClient:HttpClient) { }

  get(){
    return this.httpClient.get<any>(this.url)
  }
  post(data:any){
    return this.httpClient.post(this.url,data)
  }
  put(data:any){
    return this.httpClient.put(this.url,data)
  }
  delete(incometypeid:any){
    return this.httpClient.delete(this.url+'?incometypeid='+incometypeid)
  }
}
