import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomDataService } from "../services/custom-data-service";
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let dataService = this.injector.get(CustomDataService);
    const newRequest = request.clone({
      setHeaders: {
        "auth-token": dataService.getAuthToken()
      }
    });
    return next.handle(newRequest);
  }
}
