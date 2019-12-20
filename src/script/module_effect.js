import { $, ajax, jstool, bufferMove } from "./module_tool.js";


//效果



class Effect {
    constructor() {
        this.headernav = $(".headernav"),   //导航栏
            //this.headerlis = $(".headernav li", true)
            this.headerlis = document.querySelectorAll(".headernav li")
        this.flxedNav = $("#flxedNav")   //楼梯
        this.carousel_r = $(".carousel-r") //右边按钮
        this.carousel_l = $(".carousel-l")
        this.pic = document.querySelectorAll(".picli")//
        this.lis = document.querySelectorAll("#carousel ul li")
        this.carousel=$("#carousel")
        this.zindex = 0; ////每张图片的层大小
        this.index = 0;


        this.fixedtoolGoTop=$("#fixedtoolGoTop")
    }

    init() {
        let _this = this


        window.onscroll = function () {
            let stop = document.documentElement.scrollTop
            _this.luoti(stop);
            _this.llheadernav(stop);
        }


        this.lunbo()
    }





    llheadernav(stop) {
        let _this = this
       

       
        if (stop > 200) {
            _this.headernav.style.cssText = "position:fixed; top:0px;background:white; z-index:10;bottom:0px;height:50px;width:1903px;left:0px;text-align:center;";
            for (let i = 0; i < _this.headerlis.length; i++) {
                _this.headerlis[i].style.cssText = "display:inline-block;float:none;";
            }
        } else {
            _this.headernav.style.cssText = "position:none;"
        }
    }
    //楼梯部分 
    luoti(stop) {
        let _this = this

        if (stop > 900) {
            _this.flxedNav.style.cssText = "position:fixed;top:60px"
        } else {
            _this.flxedNav.style.cssText = "position:none;"
        }



        this.fixedtoolGoTop.onclick=function(){
            console.log(stop=0)
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

    


    //轮播图
    lunbo() {
        let _this = this
        function move(res, count) {


            for (var k = 0; k < count; k++) {
            for (var i = 0; i < _this.pic.length; i++) {
                _this.zindex = parseInt(_this.pic[i].style.zIndex);
                if (res == "right") {
                    _this.zindex++;
                    //_this.zindex=6->7->1 透明度为0,层变为1
                    if (_this.zindex > _this.pic.length) {
                        _this.zindex = 1;
                        _this.pic[i].style.opacity = "0";
                    }
                    //_this.zindex=5->6 透明度为1
                    if (_this.zindex == _this.pic.length) {
                        _this.pic[i].style.opacity = "1"
                        _this.index = i;
                    }
                } else {
                    _this.zindex--;
                    //_this.zindex=0->6 透明度为1，层变为6
                    if (_this.zindex == 0) {
                        _this.zindex = 6;
                        _this.pic[i].style.opacity = "1";
                        _this.index = i;
                    }
                    //_this.zindex=6->5的透明度为0
                    else if (_this.zindex == _this.pic.length - 1) {
                        _this.pic[i].style.opacity = "0";
                    }
                }
                _this.pic[i].style.zIndex = _this.zindex;

            }
        }

        }


        //右边按钮
        this.carousel_r.onclick = function () {
            move("right", 1);
            
            
        }

        //
        this.carousel_l.onclick = function () {
            move("left", 1);
           
          
        }

        //小圆点  
        //颜色变化
        function addColor() {
            for (var i = 0; i <_this.lis.length; i++) {
                if (_this.index == i) {
                    _this. lis[i].className = "bgc";
                } else {
                    _this. lis[i].className = "";
                }
            }
        }

        // for (let i = 0; i < this.lis.length; i++) {
        //     _this.lis[i].index = i;
        //     this.lis[i].onclick = function () {
        //     var count = this.index - _this.index > 0 ? this.index - _this.index : _this.lis.length + (this.index - _this.index);
        //         move("right", count);
        //         _this.index = this.index;
        //         console.log(_this.index)
        //         addColor()

                
        //     //  for(let i=0;i<_this.pic.length;i++){
        //     //        _this.pic[i].style.opacity="0"
        //     //     let dd=document.querySelector(".box"+_this.index)
        //     //     console.log(dd)
        //     //     dd.style.opacity="6"
        //     //     console.log(_this.index)
        //     //  }



        //     }
        // }


       let  timer = setInterval(function () {
              move("right", 1)
        } ,3000)
           

      //移入移除
        _this.carousel.onmouseover=function(){
            clearInterval(timer)
         
        }
           //移出
        _this.carousel.onmouseout=function(){
            timer = setInterval(function () {
                move("right", 1)
          } ,3000)
        }
           
    }



}




export { Effect }