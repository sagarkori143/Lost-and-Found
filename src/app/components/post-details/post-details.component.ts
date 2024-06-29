import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class PostdetailsComponent {
  @Input() ItemSelected: any;
  @Output() close = new EventEmitter<void>();

  isClosing = false;

  closeDetails() {
    this.isClosing = true;
    setTimeout(() => {
      this.close.emit();
      this.isClosing = false;
    }, 300); // Duration of the closing animation, adjust as necessary
  }
}
