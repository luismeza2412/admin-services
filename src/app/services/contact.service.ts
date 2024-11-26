import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InformacionContacto } from '../core/models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactoUrl = 'assets/json/info-contacto.json';

  constructor(private http: HttpClient) {}

  obtenerInformacionContacto(): Observable<InformacionContacto[]>{
    return this.http.get<InformacionContacto[]>(this.contactoUrl);
}
}
