import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
 {

  constructor(public translateService:TranslateService){
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang)
      this.lang=event.lang;
    });
  
  
    
  if(localStorage.getItem('lang') !=null){
  
    this.changelanguage(this.lang);
  
  }else{
    this.changelanguage('ar');
  
  }
  
  

  }
  languages:any[]=[{id:'1',value:"en",img:"/assets/images/USA.png"},
    {id:'2', vlaue:'ar',img:"/assets/images/EGY.png"}];

  lang:string="";
    ngOnInit(){
          this.lang=localStorage.getItem("language") || "ar";
       }
  changelanguage(lang:any){ 
     localStorage.setItem("language",lang);
   this.translateService.use(lang);
      
      
  }


}
