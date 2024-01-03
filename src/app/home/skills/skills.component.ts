import {Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() Spanish: any;
 
  // TITLE 
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public headEspanol: any = { title: 'HABILIDADES', subtitle: 'HABILIDADES Y HERRAMIENTAS' };
  //public hardSkills: any={title:'TECNOLOGÍAS QUE DOMINO'}
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'Java',
      progress: 50
    }],
    [{
      title: 'C',
      progress: 50
    }],
    [{
      title: 'C#.Net',
      progress: 50
    }],
    [{
      title: 'Angular/Ionic',
      progress: 50
    }]
  ];

  public skill_2: any = [

    [{
      title: 'Spanish',
      progress: 100
    }],
    [{
      title: 'English',
      progress: 80
    }]
  ];

  public skill_3: any = [

    [{
      title: 'Elocuent',
      progress: 90
    }],
    [{
      title: 'Hard working',
      progress: 90
    }],
    [{
      title: 'Love learning new things',
      progress: 100
    }]
  ];
  
  public skillEnglish: any = [
    { title: 'Progamming languages', info: this.skill_1 },
    { title: 'Spoken languages', info: this.skill_2 },
    { title: 'Personal skills', info: this.skill_3 },
  ];
  // END ENGLISH


  // ESPANOL
  public hardSkills: any = [

    [{
      title: 'Angular',
      progress: 75
    }],
    [{
      title: 'Ionic',
      progress: 75
    }],
    [{
      title: '.Net',
      progress: 75
    }],
    [{
      title: 'C',
      progress: 75
    }],
    [{
      title: 'Java',
      progress: 75
    }],
    [{
      title: 'Python',
      progress: 50
    }],
    [{
      title: 'C#',
      progress: 75
    }],
    
  ];

  public habilidad_2: any = [

    [{
      title: 'Español',
      progress: 100
    }],
    [{
      title: 'Ingles',
      progress: 80
    }]
  ];

  public softSkills: any = [

    [{
      title: 'Elocuente',
      progress: 90
    }],
    [{
      title: 'Capacidad de trabajo',
      progress: 90
    }],
    [{
      title: 'Creativo',
      progress: 100
    }],
    [{
      title: 'Trabajo en equipo',
      progress: 100
    }],

  ];


  public skillEspanol: any = [
    { title: 'HARD SKILLS', info: this.hardSkills },
    {title: 'SOFT SKILLS',info:this.softSkills}
  ];
  // FIN ESPANOL 


  // DEFAULT 
  public skills: any = this.skillEspanol;




  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.Spanish) {
      this.skills = this.skillEnglish;
      this.head = this.headEnglish;
    } else {
      this.skills = this.skillEspanol;
      this.head = this.headEspanol;
    }
  }


}
