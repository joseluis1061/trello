import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

}
