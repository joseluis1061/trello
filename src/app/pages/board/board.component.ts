import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TodoDialogComponent } from '../../shared/components/todo-dialog/todo-dialog.component';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column, ToDo } from '../../models/todo.model';
import {Dialog} from '@angular/cdk/dialog';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, CdkDropListGroup, CdkDropList, CdkDrag, TodoDialogComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Brushes dishes'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '1',
          title: 'Sing in school'
        },
        {
          id: '2',
          title: 'Cut grass'
        },
        {
          id: '3',
          title: 'Make homework'
        },
        {
          id: '4',
          title: 'Study english'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '1',
          title: 'Eat brakfast'
        },
        {
          id: '2',
          title: 'Play soccer'
        }
      ]
    }
  ]

  constructor(
    private dialog: Dialog,
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth : '50%',
      disableClose: true,
      autoFocus: false,
      data: {
        todo: todo,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }

}
