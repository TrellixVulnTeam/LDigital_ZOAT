import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { objPerson } from '../interface/objPerson';

@Injectable({
  providedIn: 'root'
})

export class PersonServices{

  private apiPerson = 'http://localhost:3001/person/';
  constructor(private http: HttpClient ) { }
  $modal = new EventEmitter<any>();
  
  public getAllPersons () : Observable<any> { 
    return this.http.get(`${this.apiPerson}get`)
  }

  public getEmailPerson (email:string) : Observable<any> { 
    return this.http.get(`${this.apiPerson}get?email=${email}`)
  }

  public createPerson (objPerson: objPerson) : Observable<any> {
    return this.http.post(`${this.apiPerson}create`, objPerson);
  }


}
