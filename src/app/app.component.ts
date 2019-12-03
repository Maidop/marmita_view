import {Component, OnInit} from '@angular/core';
import {SidebarService} from './service/sidebar.service';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marmitex';
  displaySidebar: boolean;
  menuList: MenuItem[];

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.getMostrar$().subscribe(val => this.displaySidebar = val);
    this.menuList = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-home'
      }
    ];
  }

  ngOnInit(): void {
  }

  abrirFecharMenu() {
    this.sidebarService.setMostrar(!this.displaySidebar);
  }

}
