import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://localhost:9090/api/v1/kafka/topic";

  constructor( private http: HttpClient ) { }
    
  getTopics() {
      const url = this.apiUrl;
      return this.http.get(this.apiUrl);
    }

  getDescription(topic) {
    const url = this.apiUrl;
    return this.http.get(this.apiUrl +'/'+topic+'/')
  }

}
