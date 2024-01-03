import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() Spanish: any;

  public headEnglish: any = { title: 'AWARDS', subtitle: 'PERSONAL ACHIEVEMENT & COURSES' };
  public headEspanol: any = { title: 'LOGROS', subtitle: 'CURSOS Y LOGROS PERSONALES' };
  public head: any = this.headEnglish;

  


  public awardsEnglish: any = [

    {
      title: 'COURSE',
      name: 'FLUTTER MOBILE DEVELOPMENT COURSE - 2020'
    },
    
  ];


  public awardsEspanol: any = [

    {
      title: 'CURSO DE DESARROLLO MOVIL CON FLUTTER',
      name: '  2020'
    },
    
  ];

  
  public awards: any = this.awardsEnglish;

  ngOnInit() {
  }



  ngOnChanges() {
    if (!this.Spanish) {
      this.awards = this.awardsEnglish;
      this.head = this.headEnglish;
    } else {
      this.awards = this.awardsEspanol;
      this.head = this.headEspanol;
    }
  }

}
