import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, CdkDrag],
  templateUrl: './board.component.html'
})
export class BoardComponent {

}
