import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  lang:string="";
  ngOnInit(){
    this.lang=localStorage.getItem("language") || "ar";
 }

 constructor(public translateService:TranslateService){
  translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    console.log(event.lang)
    this.lang=event.lang;
  });}
  slidesStore:any[]=[
    {id:1,src:"assets/images/Bosch-Logo.png",title:"Bosch",alt:"Bosch-Logo"},
    {id:2,src:"assets/images/BPW.png",title:"BPW",alt:"BPW-Logo"},
    {id:3,src:"assets/images/corteco.png",title:"corteco",alt:"corteco-Logo"},
    {id:4,src:"assets/images/elring.png",title:"elring",alt:"elring-Logo"},
    {id:5,src:"assets/images/Goetze-Logo.png",title:"Goetze",alt:"Goetze-Logo"},
    {id:6,src:"assets/images/Hadlex.png",title:"Hadlex",alt:"Hadlex-Logo"},
    {id:7,src:"assets/images/HYVALogo.png",title:"HYVALogo",alt:"HYVALogo-Logo"},
    {id:8,src:"assets/images/KNORR.png",title:"KNORR",alt:"KNORR-Logo"},
    {id:9,src:"assets/images/MeillerBrand.jpeg",title:"MeillerBrand",alt:"MeillerBrand-Logo"},
    {id:10,src:"assets/images/Rothe Erde.png",title:"Rothe Erde",alt:"Rothe Erde-Logo"},
    {id:11,src:"assets/images/sachbrand.png",title:"sachbrand",alt:"sachbrand-Logo"},
    {id:12,src:"assets/images/SKF-Logo.png",title:"SKF-Logo",alt:"SKF-Logo"},
    {id:13,src:"assets/images/TRWBrand.png",title:"TRWBrand",alt:"TRWBrand-Logo"},
    {id:14,src:"assets/images/victor logo.png",title:"victor",alt:"victor-Logo"},
    {id:15,src:"assets/images/wabcoLogo.png",title:"wabcoLogo",alt:"wabcoLogo-Logo"},
    {id:16,src:"assets/images/WEBER-HYDRAULIK-1.jpg",title:"WEBER-HYDRAULIK",alt:"WEBER-HYDRAULIK-Logo"},
    {id:17,src:"assets/images/ZFBrand.png",title:"ZFBrand",alt:"ZFBrand-Logo"},

  ]



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 3
      },
  
   
    },
    nav: true
  }
}
