import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnChanges {
  @Input() Spanish: any;

  public jobs: any = [];
  jobsEnglish: Job[];
  jobsEspanol: Job[];
  
  public headEnglish: any = { title: 'RESUME', subtitle: 'MY EDUCATION AND EXPERIENCE' };
  public headEspanol: any = { title: 'EXPERIENCIA', subtitle: 'EDUCACIÓN Y EXPERIENCIA LABORAL' };
  public head: any = this.headEnglish;

  constructor() {

    const job_1: Job = new Job('SURVEY TAKER', '2020-2021', 'UNIVERSITY OF CASTILLA-LA MANCHA',
      '<P>In charge of collecting data to enhance teaching', 1);


    const job_2: Job = new Job('WILD FAUNA CONSULTANCY', '2013-NOWADAYS', 'GESTION DE RECURSOS CINEGETICOS',
      '<P>I have been helping my father out, since the age of 15 or so</p>', 1);


    const school_1: Job = new Job('COLEGIO MAYOL DE TOLEDO', '2017-2019', 'HIGH SCHOOL',
      '<P>Enseñanza secundaria</P>', 1);

    const school_2: Job = new Job("ST JOHN'S INTERNATIONAL SCHOOL- UK, SIDMOUTH", '2012-2013', 'YEAR 8',
      '<P>I spend an academic year at an English institution</P>', 1);

    
    
    const trabajo_1: Job = new Job('REPARTIDOR DE ENCUESTAS', '2020-2021', 'UNIVERSIDAD DE CASTILLA-LA MANCHA',
    '<P>Encargado de recoger información relativa a la enseñanza, con el objetivo de mejorar la docencia.'
      , 1);


    const trabajo_2: Job = new Job('CONSULTORIA FAUNA SILVESTRE', '2013-actualidad', 'GESTIÓN DE RECURSOS CINEGÉTICOS',
      '<P>Ayudo a mi padre en la empresa familiar desde los 13 años</p>', 1);

    

    const escuela_1: Job = new Job('COLEGIO MAYOL DE TOLEDO', '2017-2019', 'BACHILLERATO',
      '<P>Enseñanza secundaria.</P>', 1);

    const escuela_2: Job=new Job("ST JOHN'S INTERNATIONAL SCHOOL- UK, SIDMOUTH", '2012-2013', 'YEAR 8',
    '<P>Cursé 1º de la E.S.O en Inglaterra</P>', 1);
    
    
    this.jobsEnglish = [job_1,job_2,school_1, school_2];
    this.jobsEspanol = [trabajo_1,trabajo_2,escuela_1,escuela_2];
    this.jobs = this.jobsEnglish;
  }



  ngOnInit() {
  }


  ngOnChanges() {
    if (!this.Spanish) {
      this.head = this.headEnglish;
      this.jobs = this.jobsEnglish;
    } else {
      this.head = this.headEspanol;
      this.jobs = this.jobsEspanol;
    }
  }

}
