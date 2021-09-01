import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {
  page = 1;
  passenger: any; 
  itemsPerPage = 10;
  totalItems : any; 
  constructor() { }
    
  ngOnInit(): void {
   fetch(`https://api.instantwebtools.net/v1/passenger?page=${1}&size=${this.itemsPerPage}`).then((res)=>res.json()).then((data: any) => {
      this.passenger =  data.data;
      this.totalItems = data.totalPages;
    })
  }


gty(page: any){
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`).then((res:any)=>res.json()).then((data: any) => {
      this.passenger =  data.data;
      this.totalItems = data.totalPassengers;
    })
  }
}
