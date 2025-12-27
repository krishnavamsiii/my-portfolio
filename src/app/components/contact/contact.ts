import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  // signals
  sending = signal(false);
  sent    = signal(false);
  error   = signal<string | null>(null);

  // strongly type the form
  form!: FormGroup;

  // build the form INSIDE the constructor (so `this.fb` is defined)
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // getter used by the template: f.name / f.email / ...
  get f() { return this.form.controls; }

  onSubmit() {
    this.error.set(null);
    this.sent.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return; // ✅ inside a method is fine
    }

    this.sending.set(true);

    // demo submit
    setTimeout(() => {
      this.sending.set(false);
      this.sent.set(true);
      this.form.reset();
    }, 900);

    // Real submit example:
    // this.http.post('/api/contact', this.form.value).subscribe({
    //   next: () => { this.sending.set(false); this.sent.set(true); this.form.reset(); },
    //   error: () => { this.sending.set(false); this.error.set('Something went wrong. Try again.'); }
    // });
  }
}
