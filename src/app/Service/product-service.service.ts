import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from "./http-service.service";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpService: HttpServiceService) { }
  baseUrl = environment.baseUrl;
  addProducts(data: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',
        'MyClientCert': '', 'MyToken': ''
      })
    }
    return this.httpService.post(this.baseUrl, data, true, options)
  }

  getProducts(){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',
        'MyClientCert': '', 'MyToken': ''
      })
    }
    return this.httpService.get(this.baseUrl, true, options)
  }

  deleteProduct(data:any){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',
    'MyClientCert': '', 'MyToken': '' }) }
    return this.httpService.delete(`${this.baseUrl}/${data.id}`,true,options)
  }
}
