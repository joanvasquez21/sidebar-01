import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {
  menuSections = [
    {
      title: 'Menu',
      items: [
        { name: 'Dashboard', icon: 'icon-dashboard', route: '/dashboard' },
        { name: 'Products', icon: 'icon-products', route: '/products' },
        { name: 'Schedule', icon: 'icon-schedule', route: '/schedule' },
        { name: 'My Task', icon: 'icon-tasks', route: '/tasks' },
        { name: 'Reporting', icon: 'icon-reporting', route: '/reporting' },
      ],
    },
    {
      title: 'Account',
      items: [
        { name: 'User', icon: 'icon-user', route: '/user' },
        { name: 'Messages', icon: 'icon-messages', route: '/messages', badge: 8 },
        { name: 'Document', icon: 'icon-document', route: '/document' },
        { name: 'Notification', icon: 'icon-notification', route: '/notification' },
      ],
    },
  ];

  shouldShowDivider(section: any, sectionIndex: number, itemIndex: number): boolean {
    console.log('Evaluating divider for:', { section, sectionIndex, itemIndex });

    if (sectionIndex === 0 && itemIndex === section.items.length - 1) {
      console.log('Divider after last item in Menu');
      return true;
    }

    if (section.title === 'Account' && section.items[itemIndex]?.name === 'Notification') {
      console.log('Divider after Notification in Account');
      return true;
    }
    return false;
  }
}
