import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.send();
      this.contactForm.reset();
    }
  }

  async send(){
    emailjs.init("ERBqBy0RRh1fmL8w2");
    let response = await emailjs.send("service_x90ej2l","template_40mdlja",{
      from_name: this.contactForm.value.email,
      message: this.contactForm.value.message,
      });
  }
}
