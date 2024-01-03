import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
//import { title } from 'process';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit, OnChanges {
  @Input() Spanish: any;
  public inglaterra!: boolean;
  public jobs: any = [];
  public jobsEnglish: Job[];
  public jobsEspanol: Job[];
  public titleEspanol: string="FORMACIÓN";
  public titleEnglish: string="EDUCATION";

  public title=this.titleEspanol;
  public headEspanol: any = { title: 'FORMACIÓN LINGÜÍSTICA', subtitle: 'EDUCACIÓN Y SITIO' };
  
  public formacionEspanol:string="Hola";
  public formacionEnglish: string="Hello";

  public formacion=this.formacionEspanol;

  public head=this.headEspanol;
  //formacionAcademica: any;
  formacionLinguistica: any;
  formacionComplementaria: any={
    title:"Curso de desarrollo de aplicaciones en Flutter", data:'<p>Curso impartido por Imagina Formación en Valencia.'
  };
  

  public formacionAcademica: any =
      {
        
        title: 'Ingeniería Informática:', data: '<p>Ingeniero informático en la UCLM, Ciudad Real, especialidad en Tecnologías de la Información.'
        
      };
  public formacionAcademicaEnglish: any={
    title: 'Ingeniería Informática:', data: '<p>Computer science at UCLM, Ciudad Real, majoring in Information Technologies.'
  }
  public formacionAcademicaHolandaEnglish: any={
    title:"Computing science:", data:'<p>Erasmus at Radboud University, Radboud,Nijmegen. Cibersecurity and data science track.'
  }
  public formacionAcademicaHolanda: any={
    title:"Ciencias de la computación:", data:'<p>Erasmus en la universidad Holandesa, Radboud, en Nijmegen, especialidad en Ciberseguridad y ciencia de datos'
  }

  constructor() { 


    const job_1: Job = new Job('SURVEY TAKER', '2020-2021', 'UNIVERSITY OF CASTILLA-LA MANCHA',
      '<P>In charge of collecting data to enhance teaching', 1);


    const job_2: Job = new Job('WILD FAUNA CONSULTANCY', '2013-NOWADAYS', 'GESTION DE RECURSOS CINEGETICOS',
      '<P>I have been helping my father out, since the age of 15 or so</p>', 1);


    const school_1: Job = new Job('COLEGIO MAYOL DE TOLEDO', '2017-2019', 'HIGH SCHOOL',
      '<P>Enseñanza secundaria</P>', 1);

    const school_2: Job = new Job("ST JOHN'S INTERNATIONAL SCHOOL- UK, SIDMOUTH", '2012-2013', 'YEAR 8',
      '<P>I spend an academic year at an English institution</P>', 1);

    
    
    const colegio1: Job = new Job('AÑO EN INGLATERRA', '2011-2012', "COLEGIO INTERNACIONAL ST JOHN'S, Sidmouth, Devon, Inglaterra",
    '<P>1º de la E.S.O en Inglaterra'
      , 1);


    const erasmus: Job = new Job('AÑO EN HOLANDA', '2023-2024', 'UNIVERSIDAD RADBOUD, Nijmegen, Países Bajos',
      '<P>Erasmus en la universidad de Radboud, especialidad en ciberseguridad, y ciencia de datos</p>', 1);

    

    const escuela_1: Job = new Job('COLEGIO MAYOL DE TOLEDO', '2017-2019', 'BACHILLERATO',
      '<P>Enseñanza secundaria.</P>', 1);

    const escuela_2: Job=new Job("ST JOHN'S INTERNATIONAL SCHOOL- UK, SIDMOUTH", '2012-2013', 'YEAR 8',
    '<P>Cursé 1º de la E.S.O en Inglaterra</P>', 1);

    this.jobsEnglish = [job_1,job_2,school_1, school_2];
    this.jobsEspanol = [colegio1,erasmus];
    this.jobs = this.jobsEspanol;
  }

  ngOnInit(){

  }

  ngOnChanges() {
    if (!this.Spanish) {
      this.formacion = this.formacionEnglish;
      this.title=this.titleEnglish;
    } else {
      this.formacion = this.formacionEspanol;
      this.titleEspanol;
    }
  }

}
