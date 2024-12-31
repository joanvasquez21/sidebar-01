import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-header.component.html',
  styleUrl: './sidebar-header.component.css'
})
export class SidebarHeaderComponent {
  @Output() toggle = new EventEmitter<void>(); 

  onToggleSidebar(): void {
    this.toggle.emit();
  }
}
