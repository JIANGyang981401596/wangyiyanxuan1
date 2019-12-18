import { $, ajax, jstool, bufferMove } from "./module_tool.js";

class Render {
    constructor() {

        this.new_floot = $(".new-floot")
        this.popularity_left = $(".popularity-left ul")
        this.Homelife_bottom=$(".Homelife-bottom ul",true)
    }

    init() {
        let _this = this;


        this.newrendershuju()
         this.renqirender()
         this.repeatrender()
    }

    //  新品数据的渲染
    newrendershuju() {
        let _this = this;
        ajax({
            url: "http://10.31.161.145/1911zijidedaima/wangyiyanxuan1/php/indexred.php",
            dataType: 'json'
        }).then(function (data) {
            let htmlstr = ''

            for (let i = 0; i < 4; i++) {
                htmlstr += `
               <li><a href="details.html?sid=${data[i].sid}">
               <div class="new-top">
                   <img src="${data[i].url}"
                       alt="">
               </div>
               <div class="new-bootom">
                   <div class="new-bootom-t"><span>新品尝鲜</span></div>
                   <h4 class="name">${data[i].title}</h4>
                   <div class="new-bootom-b">￥${data[i].price}</div>
               </div></a>
           </li>
                
               
               `
            }


            _this.new_floot.innerHTML = htmlstr;
        })
    }

    //人气部分
    renqirender() {
        let _this = this;

        ajax({
            url:"http://10.31.161.145/1911zijidedaima/wangyiyanxuan1/php/indexred.php",
            dataType: 'json'
        }).then(function(data){
         
          let htmlstr = ''
          for (let i = 8; i < 14; i++) {
            htmlstr += `
            <li>
            <a href="details.html?sid=${data[i].sid}">
            <div class="popularity-left-top">
                <img src="${data[i].url}" alt="">
            </div>
            <div class="popularity-left-bottom">
                <div class="prdtTags"></div>
                <h4 class="name">${data[i].title}</h4>
                <div class="price">￥${data[i].price}</div>
            </div>
               </a>
                  </li>
           
           `
        }


        
        _this.popularity_left.innerHTML = htmlstr;

        })
    }

   //重复部分的渲染

   repeatrender(){
    let _this = this;
    ajax({
        url:"http://10.31.161.145/1911zijidedaima/wangyiyanxuan1/php/indexred.php",
        dataType: 'json'
    }).then(function(data){
     
      let htmlstr = ''
      for (let i = 4; i < 8; i++) {
        htmlstr += `
        <li>
        <a href="details.html?sid=${data[i].sid}">
        <div class="Homelife-bottom-td">
            <img src="${data[i].url}"alt="">
        </div>
        <div class="Homelife-bottom-bd">
            <div class="prdtTags"><span>3件7.8折</span></div>
            <div class="name">
                <h4>${data[i].title}</h4>
            </div>
            <div class="price"><span>￥${data[i].price}</span></div>
        </div>
        </a>
    </li>
       
       `
    }
    _this.Homelife_bottom.innerHTML = htmlstr;

   }
    )}





}






export { Render }