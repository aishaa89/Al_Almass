import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private translateService:TranslateService ){
  //     this.translateService.setDefaultLang("ar");
  //     this.translateService.use(localStorage.getItem("language")||"ar")
  // }
  lang:string="";
  ngOnInit(){
    this.lang=localStorage.getItem("language") || "ar";
 }

 constructor(public translateService:TranslateService){
  translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    console.log(event.lang)
    this.lang=event.lang;
  });}
  title = 'Al Almas';
 
}
