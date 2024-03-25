import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import {DialogModule} from '@angular/cdk/dialog';
import { BtnComponent } from '../btn/btn.component';
@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [DialogModule, FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  constructor(
    private dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
