import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { TopNavComponent } from './components/top-nav/top-nav.component';



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
    standalone: true,
    imports: [
        TopNavComponent,
        MatSidenavModule,
        MatListModule,
        RouterLink,
        RouterOutlet,
        FooterComponent,
    ],
})
export class AppComponent implements OnInit {
  title = 'crud-app-angular';
  isMobile: boolean = false;
  isSideNavOpened= true;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);
    if(this.isMobile){
      this.isSideNavOpened= false;
    }
  }
 ngOnInit(): void {
   
 }
}
