import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PostDetailsComponent implements OnChanges {
  @Input() ItemSelected: any;
  @Output() close = new EventEmitter<void>();

  imageSelected: string="";
  Open = true;
  isClosing = false;

  ngOnChanges() {
    this.imageSelected = this.ItemSelected.image;
  }

  changeImage(image: string) {
    this.imageSelected = image;
  }

  closeDetails() {
    this.isClosing = true;
    setTimeout(() => {
      this.close.emit();
      this.Open = false;
    }, 300); // Duration of the closing animation, adjust as necessary
  }
}
