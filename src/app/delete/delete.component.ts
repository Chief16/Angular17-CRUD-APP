import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  items: any[]=[];

  constructor(private jsonPlaceholderService: DataService) {}

  ngOnInit() {
    this.jsonPlaceholderService.getItems().subscribe((response: any) => {
      this.items = response;
    });
  }

  onDelete(itemId: number) {
    this.jsonPlaceholderService.deleteItem(itemId).subscribe(() => {
      console.log('Item deleted:', itemId);
      this.items = this.items.filter((item) => item.id !== itemId);
    });
  }

}
