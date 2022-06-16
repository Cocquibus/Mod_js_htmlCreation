class ItemHtml{
    constructor(_type,_atr,_atrLink,_parent){
        this._type = document.createElement(_type);
        if(_atr.length != 0){
            this._atr = this._type.setAttribute(_atr,_atrLink);
        }
        this._parent = _parent.appendChild(this._type); 
    }
    insertHtml(_x){
        this._type.innerHTML = _x
    }
    addAtr(_x,_y){
        this._type.setAttribute(_x,_y)
    }
    delChild(){
        this._type.remove()
    }
}

let header = new ItemHtml("header","","",document.body);
let nav = new ItemHtml("nav","class","navTop",header._type)
let imgLogo = new ItemHtml("img","src","public/img/logo.png",nav._type)
let ulNav = new ItemHtml("ul","class","navMenu",nav._type)
let containerNav = new ItemHtml("div","class","ctnNav",nav._type)
let liNav_1 = new ItemHtml("li","class","navMenu_ind",ulNav._type)
let liNav_2 = new ItemHtml("li","class","navMenu_ind",ulNav._type)
let liNav_3 = new ItemHtml("li","class","navMenu_ind",ulNav._type)
let liNav_4 = new ItemHtml("li","class","navMenu_ind",ulNav._type)
let liNav_5 = new ItemHtml("li","class","navMenu_ind",ulNav._type)
let liNav_6 = new ItemHtml("li","class","navMenu_ind",ulNav._type)
let searchNav = new ItemHtml("i","class","navMenu_ind fa-solid fa-magnifying-glass",containerNav._type)
let userNav = new ItemHtml("i","class","navMenu_ind fa-solid fa-solid fa-user",containerNav._type)
let heartNav = new ItemHtml("i","class","navMenu_ind fa-solid fa-heart",containerNav._type)
let caddyNav = new ItemHtml("i","class","navMenu_ind fa-solid fa-cart-shopping",containerNav._type)

imgLogo.addAtr("class","imgLogo")
liNav_1.insertHtml("HOME")
liNav_2.insertHtml("ABOUT")
liNav_3.insertHtml("SHOP")
liNav_4.insertHtml("TESTIMONIAL")
liNav_5.insertHtml("JOURNAL")
liNav_6.insertHtml("CONTACT")
