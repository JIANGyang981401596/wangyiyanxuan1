import { $, ajax, jstool, bufferMove } from "./module_tool.js";

class Details {

    constructor() {

        this.sid = location.search.substring(1).split('=')[1]; //地址栏后面的编号  
        this.picsWrap = $(".picsWrap img") //大图的

        this.m_slide_lis = $(".m-slide-lis") //小图的框

        this.intro_top = $(".intro-top")  //标题  

        this.formctr_price = $(".u-formctr-price span") //价钱 

        this.less = $(".u-selnum less")   //减号  
        this.more = $(".u-selnum more")  //加号 

        this.inptt = $(".u-selnum input")  //输入框 

        this.buttom = $(".buttom-inp-buttom") //加入购物车按钮 



    }

    init() {
        let _this = this


        console.log(this.sid)

        ajax({
            url: "http://10.31.161.145/1911zijidedaima/wangyiyanxuan1/php/xiangqingye.php",
            data: {
                wzpic: this.sid
            },
            dataType:"json"
        }).then(function (data) {

            _this.render(data)
        })

    }

    render(data) {
        let _this = this
        console.log(data)

        this.picsWrap.src=data.url
        this.intro_top.innerHTML=data.title
        this.formctr_price.innerHTML="￥"+data.price

        let picarr = data.urls.split(',');
        let htmlstr = ''
        for (let value of picarr) {
            htmlstr += `        
       <li><img src="${value}"></li>  
       
     `;

        }
        this.m_slide_lis.innerHTML = htmlstr
          
        this.click()
       




    }



    click(){
        
    }
}









export { Details }