import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crud-app-angular';
  dataSource = new MatTableDataSource<any>();

  constructor(private data: DataService){

  }



  displayedColumns: string[] = ['name', 'city', 'company'];

  ngOnInit(){
    this.data.getEmpDetails().subscribe((data:any)=>{
      this.dataSource= new MatTableDataSource<any>(data)
    })
  }
}
