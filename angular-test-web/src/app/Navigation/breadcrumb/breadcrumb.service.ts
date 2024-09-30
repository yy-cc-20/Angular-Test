import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  productName = ''
  private productNameSubject = new BehaviorSubject<string>('');
  public productName$ = this.productNameSubject.asObservable();

  setProductName(name: string): void {
    this.productNameSubject.next(name);
    console.log(`set product name to ${this.productNameSubject.value}`)
  }
}
