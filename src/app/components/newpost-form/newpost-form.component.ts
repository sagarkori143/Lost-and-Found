import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newpost-form',
  templateUrl: './newpost-form.component.html',
  styleUrls: ['./newpost-form.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class NewpostFormComponent {
  @Output() close = new EventEmitter<void>();
  
  formData = {
    title: '',
    description: '',
    place: '',
    image: '',
    whatsapp: ''
  };
  
  isOpen = true;
  isClosing = false;

  onSubmit(form: any) {
    if (form.valid) {
      // Handle valid form submission
      console.log('Form Data:', this.formData);
      this.closeForm();
    } else {
      // Mark all fields as touched to display errors
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  closeForm() {
    this.isClosing = true;
    setTimeout(() => {
      this.isOpen = false;
      this.close.emit();
    }, 300); // Duration of the closing animation, adjust as necessary
  }
}
