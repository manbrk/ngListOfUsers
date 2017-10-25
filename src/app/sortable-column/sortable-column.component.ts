import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {SortService} from './sort.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sortable-column',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.css']
})
export class SortableColumnComponent implements OnInit, OnDestroy {

  constructor(private sortService: SortService) { }

  @Input() sortableColumn: string;

  @Input() sortDirection: string;

  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortService.columnSorted({sortColumn: this.sortableColumn, sortDirection: this.sortDirection});
  }

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$
      .subscribe( event => {
        if (this.sortableColumn !== event.sortColumn) {
          this.sortDirection = '';
        }
      });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}
