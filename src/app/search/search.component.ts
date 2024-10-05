import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent {
  searchTerm: string = '';

  // Doing dependency injection by having our component class require a SearchService argument in constructor
  // Angular's dependency injection system does Automatic Provisioning where it creates an instance of the service automatically

  constructor(private searchService: SearchService) {} // ask why there doesn't need to be body in constructor, and where SearchService is passed in
  // search is an event emitter, that emits an event
  // @Output allows the parent component (navbar) to bind to this event

  onSearch() {
    this.searchService.updateSearchTerm(this.searchTerm);
  }
}
