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
export class ClientCodeInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let dataService = this.injector.get(CustomDataService);
    const newRequest = request.clone({
      setHeaders: {
        "client-code": dataService.getClientCode()
      }
    });
    return next.handle(newRequest);
  }
}
