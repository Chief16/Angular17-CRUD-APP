import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  items: any[]=[];
  updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jsonPlaceholderService: DataService
  ) {
    this.updateForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.jsonPlaceholderService.getItems().subscribe((response: any) => {
      this.items = response;
    });
  }

  onUpdate() {
    if (this.updateForm.invalid) {
      return;
    }

    const item = {
      id: this.updateForm.value.id,
      title: this.updateForm.value.title,
      body: this.updateForm.value.body
    };

    
    this.jsonPlaceholderService.updateItem(item).subscribe((response) => {
      console.log('Item updated:', response);
      this.updateForm.reset();
    });
  }

}
