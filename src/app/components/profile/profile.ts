import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
   standalone: true,
  templateUrl: './profile.html',
  // styleUrl: './profile.css'
  styleUrls: ['./profile.css'] // Uncomment if you have a CSS file for the profile
})
export class Profile {



    @Input() name = 'Krishna Vamsi';
      @Input() roles: string[] = [
    'Frontend Developer',
    'Angular Programmer',
    'Bootstrap Enthusiast',
    'Full-Stack Learner'
  ];

 ngOnInit(): void {
    this.tick(); // start typing
  }
 
ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

  typed = signal('');           // what’s currently shown
  private roleIdx = 0;
  private charIdx = 0;
  private deleting = false;
  private timerId: any;


   

  private tick() {
    const full = this.roles[this.roleIdx] ?? '';
    if (this.deleting) {
      this.charIdx--;
    } else {
      this.charIdx++;
    }

    this.typed.set(full.substring(0, this.charIdx));

    // speeds
    let delay = this.deleting ? 70 : 120;

    // reached end -> pause then delete
    if (!this.deleting && this.charIdx === full.length) {
      delay = 1200;
      this.deleting = true;
    }
    // finished deleting -> go to next role
    if (this.deleting && this.charIdx === 0) {
      this.deleting = false;
      this.roleIdx = (this.roleIdx + 1) % this.roles.length;
      delay = 400;
    }

    this.timerId = setTimeout(() => this.tick(), delay);
  }
}

 