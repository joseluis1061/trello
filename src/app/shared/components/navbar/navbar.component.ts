import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, OverlayModule, FontAwesomeModule, BtnComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  activeMenu: boolean = false;
  faClose = faClose;
  faBell = faBell;
  faInfoCircle = faInfoCircle;

}
