import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {About} from './components/about/about';
import {Skills} from './components/skills/skills';
import {Contact} from './components/contact/contact';
import {Profile} from './components/profile/profile';
import {Resume} from './resume/resume';

import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Skills,Contact,Profile,Header,Resume],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ngonInit() {
  
    AOS.init();
// {      
//       duration: 1200,
//       once: true,
//       disable: 'mobile'
//     });
  }

  protected readonly title = signal('my-portfolio');
}
