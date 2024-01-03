import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {User} from '../../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuEnglish: any = {
    home: 'HOME',
    sobreMi: 'ABOUT ME',
    formacion: 'EDUCATION',
    habilidades: 'SKILLS',
    portfolio: 'PORTFOLIO',
    contacto:'CONTACT'
  };

  public menuEspanol: any = {
    home: 'INICIO',
    sobreMi: 'SOBRE MÍ',
    formacion: 'FORMACIÓN',
    habilidades: 'HABILIDADES',
    portfolio:'PORTFOLIO',
    contacto: 'CONTACTO'
  };
  public menu: any = this.menuEspanol;

  isNavbarCollapsed: boolean = true;
  Spanish: boolean=true;
  //English: boolean = true;
  @Output() language: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit() {
  }


  changelenguage() {
    this.Spanish = !this.Spanish;
    this.language.emit(this.Spanish);
    if (!this.Spanish) {
      this.menu = this.menuEnglish;
    } else {
      this.menu = this.menuEspanol;
    }
  }
}
