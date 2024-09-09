import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
lang:string="";
    ngOnInit(){
          this.lang=localStorage.getItem("language") || "ar";
       }

       constructor(public translateService:TranslateService){
        translateService.onLangChange.subscribe((event: LangChangeEvent) => {
          console.log(event.lang)
          this.lang=event.lang;
        });}




        
}
