import { Component, OnInit, ViewChild} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Config, Menu } from '../../menu/types';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
    // signle open mode
    options: Config = { multi: false };
  
    menus: Menu[] = [
      { 
        name: 'Teachers',
        iconClass: 'fa fa-code',
        active: true,
        submenu: [
          { name: 'Teacher Log', url: 'http://localhost:4200/dashboard/teacherlist' },
          { name: 'Teacher List', url: 'http://localhost:4200/dashboard/teacherlist' },
        ]
      },
      { 
        name: 'Student',
        iconClass: 'fa fa-mobile',
        active: false,
        submenu: [
          { name: 'Student Log', url: 'http://localhost:4200/dashboard/studentlist' },
          { name: 'Student List', url: 'http://localhost:4200/dashboard/studentlist' },
        ]
      },
      { 
        name: 'Visitors',
        iconClass: 'fa fa-globe',
        active: false,
        submenu: [
          { name: 'Visitor Log', url: '#' },
          { name: 'Visitor List', url: '#' },
        ]
      }
    ];
  
    panelOpenState = false;
    
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

}
