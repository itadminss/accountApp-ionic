import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

 interface List {
  date: string;
  name: string;
  amount: string;
}
@Injectable({
  providedIn: 'root'
})

export class ReportExpenseService {
  url = environment.baseurl+'report.php'
  constructor(private httpClient:HttpClient) { }
  get(date1:any,date2:any): Observable<List[]> {
      return this.httpClient.get<List[]>(this.url+'?date1='+date1+'&date2='+date2)
  }
}
