import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed: boolean = false;
  activeOption: string = '';

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  setActiveOption(option: string): void {
    this.activeOption = option;
  }
}

