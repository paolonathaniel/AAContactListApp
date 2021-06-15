import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Contact } from "../model/contact.model";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {
    contactsUrl: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {}

    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.contactsUrl);
    }

    saveContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.contactsUrl, contact, httpOptions);
    }

    updateContact(contact: Contact): Observable<Contact> {
        const url = `${this.contactsUrl}/${contact.id}`;
        return this.http.put<Contact>(url, contact, httpOptions);
    }

    getContact(id: number): Observable<Contact> {
        const url = `${this.contactsUrl}/${id}`;
        return this.http.get<Contact>(url);
    }

    deleteContact(contact: Contact | number): Observable<Contact> {
        const id = typeof contact === 'number' ? contact : contact.id;
        const url = `${this.contactsUrl}/${id}`;
        return this.http.delete<Contact>(url, httpOptions);
    }

}