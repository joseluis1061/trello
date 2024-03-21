import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent{
  @Input() typeBtn:'button'| 'reset' | 'submit' = 'submit';
  @Input() textColor: string = 'text-white';
  @Input() color: string = 'success';



  get colors(){
    return {
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',

      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',

      'bg-danger-700': this.color === 'danger',
      'hover:bg-danger-800': this.color === 'danger',
      'focus:ring-danger-300': this.color === 'danger',

      [this.textColor]: true,
    }
  }

}
