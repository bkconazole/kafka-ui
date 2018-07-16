import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
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

  getDescription( topic ) {
    const url = this.apiUrl;
    return this.http.get( url +'/describe/'+topic+'/')
  }

  getParitionInfo(topic) {
    const url = this.apiUrl;
    return this.http.get(url +'/partition/'+ topic +'/');
  }
  getAcls( topic ) {
    const url = this.apiUrl+'/acls/';
    return this.http.get( url + topic +'/')
  }

  createTopic( fileText ) {
    const url = this.apiUrl;
    console.log("file text in ds " + fileText);
    return this.http.post( url, fileText, httpOptions);
  }

  updateTopic( fileText ) {
    const url = this.apiUrl + '/update';
    return this.http.put( url, fileText, httpOptions );
  }

  deleteTopic( fileText ) {
    const url = this.apiUrl
    return this.http.delete( url, httpOptions);
  }

  grantAcls (fileText) {
    const url = this.apiUrl + '/grant';
    return this.http.put(url, fileText, httpOptions )
  }

  revokeAcls (fileText) {
    const url = this.apiUrl +'/revoke';
    return this.http.put(url, fileText, httpOptions);
  }

}
