import { HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  //// Clone the request to add the new header
  //const clonedRequest = req.clone({
  //  setHeaders: {
  //    'Authentication': 'Bearer ' + '',
  //    // Add more headers as needed
  //  }
  //});

  //// Handle the response or errors if needed
  //return next.handle(clonedRequest).pipe(
  //  catchError((error: HttpErrorResponse) => {
  //    // Handle the error here if necessary
  //    return throwError(error);
  //  })
  //);
  return next(req);
};
