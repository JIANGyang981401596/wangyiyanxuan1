import { $, ajax, jstool, bufferMove } from "./module_tool.js";


//效果



class Effect {
    constructor() {
        this.headernav = $(".headernav"),   //导航栏
        //this.headerlis = $(".headernav li", true)

        this.headerlis=document.querySelectorAll(".headernav li")
        this.flxedNav = $("#flxedNav")   //楼梯

    }

    init() {
          let _this=this
       

        window.onscroll = function () {
            let stop = document.documentElement.scrollTop
            _this.luoti(stop);
            _this.llheadernav(stop);
        } 
      
    }





    llheadernav(stop) {
        let _this = this
console.log(this.headerlis)
        
            console.log(stop)
            if (stop > 200) {
                _this.headernav.style.cssText = "position:fixed; top:0px;background:white; z-index:10;bottom:0px;height:50px;width:1903px;left:0px;text-align:center;";
                for(let i=0;i<_this.headerlis.length;i++){
                    _this.headerlis[i].style.cssText = "display:inline-block;float:none;";
                }
            } else {
                _this.headernav.style.cssText = "position:none;"
            }
    }

    luoti(stop){
        let _this=this

         if(stop>900){
            _this.flxedNav.style.cssText="position:fixed;top:60px"
         }else{
            _this.flxedNav.style.cssText="position:none;"
         }

       


    }



}




export { Effect }