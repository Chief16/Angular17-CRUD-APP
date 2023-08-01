import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css']
})
export class UserFormDialogComponent {

  userForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {
    this.message = data ? data.message : '';

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      company: ['', Validators.required],
    });
  }

  submit(form: FormGroup) {
    if(form.valid){
    this.dialogRef.close({
      clicked: 'submit',
      userData: form
    });
  }
  }

  cancel() {
    this.dialogRef.close({
      clicked: 'cancel',
    });
  }
}
