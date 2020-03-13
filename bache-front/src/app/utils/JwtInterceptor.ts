import { HttpInterceptor } from '@angular/common/http';
import {HttpHandler, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Intercepting");
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        }
        return next.handle(req);
    }

}