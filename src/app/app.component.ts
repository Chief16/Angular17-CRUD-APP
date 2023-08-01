import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';


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

  constructor(private data: DataService, public dialog: MatDialog){

  }



  displayedColumns: string[] = ['name', 'city', 'company', 'edit', 'delete'];

  ngOnInit(){
    this.data.getEmpDetails().subscribe((data:any)=>{
      this.dataSource= new MatTableDataSource<any>(data)
    })
  }

  redirectToEdit(inp:any){
    console.log(inp)
  }

  redirectToDelete(inp:any){
    console.log('selected id', inp);
    const ref: MatDialogRef<DeleteDialogComponent> = this.dialog.open(
      DeleteDialogComponent,
      {
        width: '600px',
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
