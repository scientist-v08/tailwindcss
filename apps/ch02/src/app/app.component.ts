import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentYear: number = new Date().getUTCFullYear();
  navToggle = false;

  changeNav(): void {
    this.navToggle = !this.navToggle;
  }
}
