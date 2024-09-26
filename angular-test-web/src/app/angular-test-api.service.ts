import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AngularTestApiService {
  apiUrl = 'https://localhost:7046/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  // Handle Errors
  private handleError(error: HttpErrorResponse) {
    //if (error.error instanceof ErrorEvent) {
    //  // A client-side or network error occurred.
    //  console.error('An error occurred:', error.error.message);
    //} else {
    //  // The backend returned an unsuccessful response code.
    //  console.error(`Backend returned code ${error.status}, ` /*+ `body was: ${JSON.stringify(error.error)}`*/);
    //}
    return throwError(error/*() => new Error('Something bad happened; please try again later.')*/);
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/user/login`;
    return this.http.post<any>(url, { username, password })
      .pipe(catchError(this.handleError));
  }

  resetPassword(username: string): Observable<any> {
    const url = `${this.apiUrl}/user/reset-password`;
    return this.http.post<any>(url, { username })
      .pipe(catchError(this.handleError));
  }

  getProfile(userId: string): Observable<any> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }

  changePassword(id: string, currentPassword: string, newPassword: string): Observable<any> {
    const url = `${this.apiUrl}/user/change-password`;
    return this.http.post<void>(url, {
      id,
      current_password: currentPassword,
      new_password: newPassword
    })
      .pipe(catchError(this.handleError));
  }

  getProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/product`;
    return this.http.get<any[]>(url)
      .pipe(catchError(this.handleError));
  }

  getProductDetails(productId: string): Observable<any> {
    const url = `${this.apiUrl}/product/${productId}`;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }
}
