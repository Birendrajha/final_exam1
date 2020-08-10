import { Component, OnInit ,Input} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ResortService } from '../../resort/resort.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() searchResult: any;
  

  constructor(private resortService:ResortService) { }

  ngOnInit(): void {
  }

}
