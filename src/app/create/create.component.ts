import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jsonPlaceholderService: DataService
  ) {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }

    const item = {
      title: this.createForm.value.title,
      body: this.createForm.value.body
    };

    this.jsonPlaceholderService.createItem(item).subscribe((response) => {
      console.log('Item created:', response);
      this.createForm.reset();
    });
  }
}
