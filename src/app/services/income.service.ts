import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  url = 'http://localhost/account_api/income.php'
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
  delete(incomeid:any){
    return this.httpClient.delete(this.url+'?incomeid='+incomeid)
  }
 
}
