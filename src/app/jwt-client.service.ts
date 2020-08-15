import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class JwtClientService {

    constructor(private httpClient : HttpClient) {}


    public generateToken(request) {
        return this.httpClient.post<string>("http://localhost:8090/manager/authenticate", request, {responseType: 'text' as 'json'});
    }


    public welcome(token) {
        let tokenStr = token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.httpClient.get<string>("http://localhost:8090/manager/", {headers, responseType: 'text' as 'json'});
    }
}
