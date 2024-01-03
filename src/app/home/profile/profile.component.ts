import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit, OnChanges  {
  

  public titleEnglish: string = "Information";
  //public subtitleEnglish: string = "SUB TITLE";
  
  public titleEspanol: string = 'Información';  
  //public subtitleEspanol: string = 'SUB TITULO';


  public title = this.titleEnglish;
  //public subtitle = this.subtitleEnglish;


  // You can use a HTML tags in 'data'
  public profileEnglish: any =
    {
      title: 'ABOUT ME:', data: "<p>Computer scientist, looking forward to making a difference"
      + '<BR><br> Looking back, since I was a child, I had very different interests from my peers, and that led me to love the world of science very much.'
      +'<br><br>Computer science, is fascinating. There is only one requirement, to get out of the box, and therefore to be creative.'
      +'<br><br>My greatest delight consists in mixing ideas, disciplines, thoughts, always trying to see the common thing, to create wonderful things.'
      +'<br><br>The only limit is illusory, something that without further ado falls upon us, without us even realising it.</p>',
      contact: 'CONTACT', sp: 'SOCIAL PROFILES'
    };
  
    public profileEspanol: any =
      {
        
        title: 'ACERCA DE MI:', data: '<p>Ingeniero informático, loco por comerme el mundo.'
        + '<BR><br>Mirando hacia atrás, desde niño, tuve intereses muy distintos a mis compañeros, y eso me llevó a amar de forma intensa el mundo de la ciencia.'
        +'<BR><br> La informática, es fascinante, pero si la combinas con otras disciplinas, se convierte en una maravilla. Solo hay un requisito, salirse de la caja, y ser creativo.'
        +'<BR><br>Mi mayor placer consiste en mezclar idéas, disciplinas, pensamientos, tratando siempre, de ver el nexo en común, para crear cosas sorprendentes.'
        +'<br><br>El único límite, es el que nos ponemos nosostros mismos.</p>',
        contact: 'CONTACTO', sp: 'PERFILES'
      };
  
  public profile = this.profileEnglish;
  @Input() Spanish: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.Spanish) {
      this.title = this.titleEnglish;
      //this.subtitle = this.subtitleEnglish;
      this.profile = this.profileEnglish;
    } else {
      this.title = this.titleEspanol;
      //this.subtitle = this.subtitleEspanol;
      this.profile = this.profileEspanol;
    }
  }


}
