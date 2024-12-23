import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})export class SidebarMenuComponent {
  menuSections = [
    {
      title: 'Menu',
      items: [
        { name: 'Dashboard', route: '/dashboard' },
        { name: 'Products', route: '/products' },
        { name: 'Schedule',  route: '/schedule' },
        { name: 'My Task',  route: '/tasks', badge: 4 },
        { name: 'Reporting', route: '/reporting' },
      ]
    },
    {
      title: 'Account',
      items: [
        { name: 'User', icon: 'icon-user', route: '/user' },
        { name: 'Messages', icon: 'icon-messages', route: '/messages', badge: 8 },
        { name: 'Document', icon: 'icon-document', route: '/document' },
        { name: 'Notification', icon: 'icon-notification', route: '/notification' },
      ]
    }
  ];

  logIconHref(icon: string): void {
    const href = `assets/icons/icons.svg#${icon}`;
    console.log('Icon HREF:', href);
  }
}
