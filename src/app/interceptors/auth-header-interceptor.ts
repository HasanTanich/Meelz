import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,  HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //req - ruta koja se poziva
        //CognitoIdentityServiceProvider.4o6neking2l7vk5ha8q4lqco1u defaultna putanja
        //lastAuthUser - vrati email ukoliko je manuelna authentifikacija ili id providera ukoliko je preko OAuth

        var user = localStorage.getItem('CognitoIdentityServiceProvider.4o6neking2l7vk5ha8q4lqco1u.LastAuthUser');
        var authToken = localStorage.getItem('CognitoIdentityServiceProvider.4o6neking2l7vk5ha8q4lqco1u.' + user + '.accessToken');

        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + authToken) });// dodajemo token od aws-a u header api poziva
        
        return next.handle(req)
        .pipe(
            retry(2),
                catchError((error: HttpErrorResponse) =>{
                    if(error.status==0)
                        alert(`HTTP Error:  404 Not Found  \n route -> ${req.url}`);
                    else
                        alert(`HTTP Error:  ${error.status} ${error.statusText}  \n route -> ${req.url}`);
                    return throwError(error);
        }));
    }
}
