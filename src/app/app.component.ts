import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project-CSIPL';
  page = 1;
  passenger: any; 
  itemsPerPage = 10;
  totalItems : any; 
  constructor() { }
  
  counter(number:number):any{
    return new Array(number)
  }
  ngOnInit(): void {
   fetch(`https://api.instantwebtools.net/v1/passenger?page=${1}&size=${this.itemsPerPage}`).then((res)=>res.json()).then((data: any) => {
      this.passenger =  data.data;
      this.totalItems = data.totalPages;
    })
  }
  onPageChange(pageNo: number) {
    console.log("Current page: ", pageNo);
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=${this.itemsPerPage}`).then((res)=>res.json()).then((data: any) => {
      this.passenger =  data.data;
    })
  }
}
