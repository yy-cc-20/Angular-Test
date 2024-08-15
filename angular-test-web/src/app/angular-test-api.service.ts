import { Injectable } from '@angular/core';
import { User } from './user';
import { Product } from './product';
import { ProductVariance } from './product-variance';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AngularTestApiService {
  userApi = 'https://localhost:7046/api/user';
  productApi = 'https://localhost:7046/api/product';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  ///** GET heroes from the server */
  //getHeroes(): Observable<Hero[]> {
  //  return this.http.get<Hero[]>(this.heroesUrl)
  //    .pipe(
  //      tap(_ => console.log('fetched heroes')),
  //      catchError(this.handleError<Hero[]>('getHeroes', []))
  //    );
  //}

  ///** GET hero by id. Return `undefined` when id not found */
  //getHeroNo404<Data>(id: number): Observable<Hero> {
  //  const url = `${this.heroesUrl}/?id=${id}`;
  //  return this.http.get<Hero[]>(url)
  //    .pipe(
  //      map(heroes => heroes[0]), // returns a {0|1} element array
  //      tap(h => {
  //        const outcome = h ? 'fetched' : 'did not find';
  //        console.log(`${outcome} hero id=${id}`);
  //      }),
  //      catchError(this.handleError<Hero>(`getHero id=${id}`))
  //    );
  //}

  ///** GET hero by id. Will 404 if id not found */
  //getHero(id: number): Observable<Hero> {
  //  const url = `${this.heroesUrl}/${id}`;
  //  return this.http.get<Hero>(url).pipe(
  //    tap(_ => console.log(`fetched hero id=${id}`)),
  //    catchError(this.handleError<Hero>(`getHero id=${id}`))
  //  );
  //}

  ///* GET heroes whose name contains search term */
  //searchHeroes(term: string): Observable<Hero[]> {
  //  if (!term.trim()) {
  //    // if not search term, return empty hero array.
  //    return of([]);
  //  }
  //  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //    tap(x => x.length ?
  //      console.log(`found heroes matching "${term}"`) :
  //      console.log(`no heroes matching "${term}"`)),
  //    catchError(this.handleError<Hero[]>('searchHeroes', []))
  //  );
  //}



  ///** POST: add a new hero to the server */
  //addHero(hero: Hero): Observable<Hero> {
  //  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //    tap((newHero: Hero) => console.log(`added hero w/ id=${newHero.id}`)),
  //    catchError(this.handleError<Hero>('addHero'))
  //  );
  //}

  ///** DELETE: delete the hero from the server */
  //deleteHero(id: number): Observable<Hero> {
  //  const url = `${this.heroesUrl}/${id}`;

  //  return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //    tap(_ => console.log(`deleted hero id=${id}`)),
  //    catchError(this.handleError<Hero>('deleteHero'))
  //  );
  //}

  ///** PUT: update the hero on the server */
  //updateHero(hero: Hero): Observable<any> {
  //  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //    tap(_ => console.log(`updated hero id=${hero.id}`)),
  //    catchError(this.handleError<any>('updateHero'))
  //  );
  //}

  ///**
  // * Handle Http operation that failed.
  // * Let the app continue.
  // *
  // * @param operation - name of the operation that failed
  // * @param result - optional value to return as the observable result
  // */
  //private handleError<T>(operation = 'operation', result?: T) {
  //  return (error: any): Observable<T> => {

  //    // TODO: send the error to remote logging infrastructure
  //    console.error(error); // log to console instead

  //    // TODO: better job of transforming error for user consumption
  //    console.log(`${operation} failed: ${error.message}`);

  //    // Let the app keep running by returning an empty result.
  //    return of(result as T);
  //  };
  //}
}
