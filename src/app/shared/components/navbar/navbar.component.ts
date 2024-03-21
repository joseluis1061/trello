import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, OverlayModule, BtnComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  activeMenu: boolean = false;

}
