import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



type ResumeItems ={
  role?:string;
  org?:string;
  degree?:string;
  technicalSkills?:string[];
  period?:string;
  points?:string[]
};


type Bullet = string;
type Experience = { title: string; period: string; company?: string; location?: string; bullets: Bullet[];  projects: {
    name: string;
    details: string[];
  }[];};
type Education = { degree: string; college: string; period: string; bullets?: Bullet[]; };


@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  standalone: true,

  templateUrl: './resume.html',
  styleUrl: './resume.css'
})

export class Resume {

  cvUrl = 'assets/krishnaResumeNew.pdf';

  summary = {
    name: 'KRISHNA VAMSI',
    tagline: 'Full Stack Developer (Angular + Spring Boot) | 3 Years of Experience ',
    bullets: [
      'Full Stack Java Developer with 3.2+ years of experience in Java, Spring Boot, Angular,REST APIS and MicroServices. Contributed to 10+ enterprise applications. Additionally explored GenAI by building personal projects and prototypes to enhance automation, productivity, and intelligent application capabilities.”',
      'Hyderabad, IN',
      'mudiamkrishnavamsi@gmail.com',
      '+91 8185091339'
    ]
  };

  education: Education[] = [
    { degree: 'B.Tech — Computer Science', college: 'Jawaharlal Nehru university,Ananthapur', period: '2018 – 2022', bullets: ['CGPA: 8.2/10'] },
    { degree: 'Intermediate(10+2)', college: 'Abhyas Junior College,Proddatur', period: '2016 – 2018', bullets: ['Percentage: 95%'] },
    { degree: 'SSC', college: 'T.V.R High School', period: '2015 – 2016', bullets: ['CGPA: 9.5/10'] }
  ];

  Personalprojects:any=[
    {
      name: 'Chat Assistant–AI Chatbot(Using Gen AI)',
      details: ['Built an interactive LLM-based chatbot with a Streamlit frontend, integrating Hugging Face models and Google Gemini APIs for natural language understanding, context handling, and dynamic response generation.',
        'Stack: Python, Streamlit, Hugging Face, Google Gemini APIs'
      ]
    }
  ]

  experience: Experience[] = [
    {
      title: 'Full Stack Developer',
      period: 'Nov 2022 – Present',
      company: 'Tata Consultancy Services',
      location: 'Mumbai',
      bullets: [
       'Built 12+ scalable Angular apps with NgRx/RxJS (40% faster rendering). Developed Spring Boot REST APIs (Kafka, Java Streams).', 
       'reducing latency by 35%. Strong advocate of clean code (85%+ unit test coverage via Jasmine/Jest) and CI/CD pipelines (Docker, ', 
       ' Collaborate in Agile teams to deliver high-availability systems.'
      ],
     projects: [
      {
        name: 'Staff Quarters Allocation – Internal App',
        details: [
          'Architected dynamic allocation logic using 7+ business rules.Using 3 priority queues.',
          'Reduced processing time by 40% using Java Streams.',
          'Handled Multiple Waiting Lists and Allotment Lists for Quarter Allotment.',
          'Stack: Angular 11, Spring Boot, Alfresco'
        ]
      },
      {
        name: 'LFAR – Long Form Audit Report',
        details: [
          'Developed LFAR module enabling managers to generate detailed audit reports.',
          'Built 31+ annexures in Angular and integrated REST APIs.',
          'Designed complex reactive forms with validation, async validation, conditional rendering, and dynamic form controls.',
          'Optimized application performance using ChangeDetectionStrategy.OnPush, memoized selectors, and RxJS best practices to minimize unnecessary re-rendering.',
          'Stack: Angular 11, Spring Boot, JMS',
          'Received client appreciation for module delivery.'
        ]
      },
      {
      name:'Fund Request Module – Internal App',
      details:[
        'Led design and implementation of Fund Request module for seamless fund allocation requests and approvals.',
        'Developed complex summary report in Angular with 500+ fields using JSON for backend communication.',
        'Handled multiple document uploads/downloads via Alfresco integration.',
        'Stack: Angular 16, Spring Boot, Alfresco',
        'Achieved 20% faster processing time through optimized data handling',
        'Implemented RxJs for efficient state management and real-time updates.'

    ]
      },

    

      

    
    // {
    //   title: 'Python, Machine Learning Intern',
    //   period: 'Jul 2021 – Nov 2021',
    //   company: 'Pie Infocomm Ltd(INTERNSHIP)',
    //   location: 'Remote',
    //   bullets: [
    //     'Implemented forms, validators, reusable design system.',
    //     'Set up Jest/Jasmine tests; >85% coverage for key modules.'
    //   ]
    // }
  ]
}
  ]
}