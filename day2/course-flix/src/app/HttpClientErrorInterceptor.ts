import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientErrorInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(3),
                catchError(this.handleError)
        )
    }
    handleError(error: any): OperatorFunction<HttpEvent<any>, any> {
        console.log ('Came inside the handle error interceptor ....')
        console.log(error instanceof ErrorEvent);

        if ( error instanceof ErrorEvent ){
            console.log(`client side error ${error.message}`);
          } else {
            console.log(`server side error : ${error.message}`)
          }
          window.alert(`${error.message}`);
          throw new Error(error.message);
    }
    
   

}