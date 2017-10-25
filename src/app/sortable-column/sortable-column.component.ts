import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sortable-column',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.css']
})
export class SortableColumnComponent implements OnInit {

  constructor() { }

  @Input() sortableColumn: string;

  @Input() sortDirection: string;

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  ngOnInit() {
  }

}
