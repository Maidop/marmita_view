import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('Authorization');
    let authReq = req.clone({
      headers: new HttpHeaders({
        Authorization : `${token}`
      })
    });

    return next.handle(authReq);
  }

}

