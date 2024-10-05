import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // Ex: rxjs and observables
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  updateSearchTerm(term: string) {
    // .next() is an rxjs method to push new values into an observable stream
    // When you call .next(value) on a subject, it emits that value to all the subscribers
    this.searchTermSubject.next(term);
  }
}
