import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }


  Url = environment.baseUrl;
  post(url:any, user:any,isHeaderRequired:any = false, header:any=null ) {
    return this.httpClient.post(url, user,isHeaderRequired && header )
  }
  get(url:any, isHeaderRequired:any = false, header:any = null) {
    return this.httpClient.get(url, isHeaderRequired && header)
  }

  delete(url:any, isHeaderRequired:any = false, header:any = null) {
    return this.httpClient.delete(url, isHeaderRequired && header)
  }


}
