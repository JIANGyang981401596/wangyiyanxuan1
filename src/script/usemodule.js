
import { Render} from "./indexRender.js";
import { Effect } from "./module_effect.js";
import { Details } from "./details.js";
// new Render().init();
// new Effect().init();
// new Details().init();


//  switch(true){
//      case  document.querySelector('#shouye') :  new Render().init();new Effect().init();
//      break;

//      case document.querySelector('#xiangqingye'): new Details().init();
//      break;
//  }  


 if(document.querySelector('#shouye')){
    new Render().init();
    new Effect().init();
 }


 if(document.querySelector('#xiangqingye')){
    new Details().init();
 }
