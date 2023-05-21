import { Component } from '@angular/core';
import { DataService } from '../data.service';


interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})


export class ReadComponent {
  items: any[]=[];
  selectedItem:any;

  constructor(private jsonPlaceholderService: DataService) {}

  ngOnInit() {
    this.jsonPlaceholderService.getItems().subscribe((response:any) => {
      this.items = response;
      console.log(this.items)
    });
  }



}
