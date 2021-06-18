import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user.model";


@Injectable()

export class UserService {
    PlaceholderUrl: string = 'https://jsonplaceholder.typicode.com/users';

    headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.PlaceholderUrl}/`);
    }

    saveUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.PlaceholderUrl}/`, user, {headers: this.headers});
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.PlaceholderUrl}/${user.id}`, user, {headers: this.headers});
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${this.PlaceholderUrl}/${id}`, {headers: this.headers});
    }

    deleteUser(user: User | number): Observable<User> {
        return this.http.delete<User>(`${this.PlaceholderUrl}/${user}`, {headers: this.headers});
    }
}