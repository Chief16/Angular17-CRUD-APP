import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/data.service';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { UserFormDialogComponent } from 'src/app/dialogs/user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  dataSource = new MatTableDataSource<any>();

  constructor(private data: DataService, public dialog: MatDialog){

  }



  displayedColumns: string[] = ['name', 'city', 'company', 'edit', 'delete'];

  ngOnInit(){
   this.getEmpDetails();
  }

  getEmpDetails(){
    this.data.getEmpDetails().subscribe((dd:any)=>{
      this.dataSource= new MatTableDataSource<any>(dd)
    })
  }

  redirectToAdd(){
    console.log("add user dialog opened");
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '350px',
      height: '400px',
      data: {
        editDialog: false
      }
    });
    
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data)
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
        console.log("input form data", data.userData.value)
        this.data.addEmpDetails(data.userData.value).subscribe((data)=>{
          console.log("user added successfully")
         this.getEmpDetails();
        })
      }
    });
  }

  redirectToEdit(inp:any){
    console.log(inp)
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '350px',
      height: '400px',
      data: {
        editDialog: true,
        userId: inp
      }
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data)
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
        console.log("input form data", data.userData.value)
        this.data.editUserDetails(inp, data.userData.value).subscribe((data)=>{
          console.log("user updated successfully")
          this.getEmpDetails();
        })
      }
    });
  }

  redirectToDelete(inp:any){
    console.log('selected id', inp);
    const ref: MatDialogRef<DeleteDialogComponent> = this.dialog.open(
      DeleteDialogComponent,
      {
        width: '400px',
        height: '210px',
        data: {
          message: 'Are you sure you want to delete user?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );

    ref.afterClosed().subscribe((data) => {
      console.log(data);
      if(data.clicked==="submit"){
        this.data.deleteEmp(inp).subscribe((data)=>{
          console.log("delete sucess");
          this.data.getEmpDetails().subscribe((dd:any)=>{
            this.dataSource= new MatTableDataSource<any>(dd)
          })
        })
      }

    });

  }
}
