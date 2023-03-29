import { items } from "./constants/items.js";

const navBarsClose = document.querySelector("#nav_bars_close");
const desktopStyleNavbar = document.querySelector(".desktop-style-navigation");
const openNavBars = document.querySelector("#open_nav_mobile");

const btnFilterAll = document.querySelector("[data-all]");
const btnFilterNew = document.querySelector("[data-new]");
const listAllItems = document.querySelector("[data-items]");

const wishlistLengthCard = document.querySelector("[data-wishlist]");

const jsonData =JSON.parse(localStorage.getItem("shop"));

if(jsonData){
    wishlistLengthCard.setAttribute("data-wishlist", `${jsonData.length}`);
}




navBarsClose.addEventListener("click", function(){
    desktopStyleNavbar.classList.remove("active_nav_mobile");
    desktopStyleNavbar.classList.add("disable_nav_mobile");
})


openNavBars.addEventListener("click", function(){
    desktopStyleNavbar.classList.remove("disable_nav_mobile");
    desktopStyleNavbar.classList.add("active_nav_mobile");
})




btnFilterAll.addEventListener("click", function(){

    btnFilterAll.classList.add("active_btn_filter");
    btnFilterNew.classList.remove("active_btn_filter");
    btnFilterAll.classList.remove("items_filter_btn");
    btnFilterNew.classList.add("items_filter_btn");

    while (listAllItems.firstChild) {
        listAllItems.removeChild(listAllItems.firstChild);
    }

    items.forEach(item => {
        
        listAllItems.append(createItemHealperDom(item))

    })
    selectFromShop()
})




btnFilterNew.addEventListener("click", function(){

    btnFilterNew.classList.add("active_btn_filter");
    btnFilterAll.classList.remove("active_btn_filter");
    btnFilterNew.classList.remove("items_filter_btn");
    btnFilterAll.classList.add("items_filter_btn")
    
    const newItems = items.filter(item => item.tags.new === true);

    while (listAllItems.firstChild) {
        listAllItems.removeChild(listAllItems.firstChild);
    }
    
    newItems.forEach(item => {
        listAllItems.append(createItemHealperDom(item));
        
    })
    selectFromShop();
})


selectFromShop()

function selectFromShop(){
    const shopAll = [...document.querySelectorAll("[data-shop]")];
    shopAll.forEach(btn => {
        btn.addEventListener("click", function(){
            const id = Number(btn.dataset.shop);

            const item = items.find(item => item.id === id);


            const jsonData = localStorage.getItem("shop");

            if(!jsonData){
                const data = [];
                data.push(item);
                wishlistLengthCard.setAttribute("data-wishlist", `${1}`);
                localStorage.setItem('shop', JSON.stringify(data))
            }else{
                
                const json = JSON.parse(jsonData);
                const newData = [...json, item];

                wishlistLengthCard.setAttribute("data-wishlist", `${newData.length}`);

                console.log(newData)

                localStorage.setItem('shop', JSON.stringify(newData))


            }


    
            console.log(item, "dfdsf")
        })
    })
}


// -------------------------------------------------------------------------


function createItemHealperDom(target){
    let windowSize = window.innerWidth;

    const width = window.innerWidth;
    const divContainer = document.createElement("div");
    const titleItem = document.createElement("h1");
    const btnAddToCard = document.createElement("button");
    const divImg = document.createElement("div");
    const divPriceReduction = document.createElement("div");
    const btnReducePrice = document.createElement("button");
    const pPriceReduction = document.createElement("p");
    const pPrice = document.createElement("p");
    const divShop = document.createElement("div");

    const divPriceWithReduction = document.createElement("div");

    divShop.classList.add("flex_justify_center_item");

    const divTags = document.createElement("div");

    divContainer.classList.add("div_container");
    divContainer.classList.add("border_radius_item");

    divImg.classList.add("div_images")


    divTags.classList.add("tags")


    if(target.title.length > 20 && windowSize <= 320){
        const title = target.title.substring(0, 20);
        titleItem.innerHTML = `${title}...`;
    }else{
        titleItem.innerHTML = `${target.title}`;
    }


    // title
    titleItem.classList.add("ff-regular");
    titleItem.classList.add("fw-400");
    titleItem.classList.add("fs-title-item");
    titleItem.classList.add("text-center")

    // img
    target.img.forEach(item => {
        const img = document.createElement("img");
        img.src = item;
        divImg.append(img)
    })

    // price reduction

    if(target.reduction.reductionBoolean){
        btnReducePrice.innerHTML = target.reduction.reductionCounter;

        pPriceReduction.innerHTML =`${target.price}₽`;
        pPriceReduction.classList.add("fw-300");
        pPriceReduction.classList.add("ff-light");
        pPriceReduction.classList.add("text-throw");
        pPriceReduction.classList.add("clr-text-silver");

        divPriceReduction.classList.add("flex_justify")

        divPriceWithReduction.append(pPriceReduction);
        divPriceWithReduction.classList.add("flex_align")

        divPriceWithReduction.append(pPriceReduction);
        divPriceWithReduction.append(btnReducePrice);
        divPriceReduction.append(divPriceWithReduction);
    }else{
        pPrice.classList.add("text-center")
    }

    pPrice.innerHTML = `${target.price}₽`;
    pPrice.classList.add("clr-red");
    pPrice.classList.add("fw-700");
    pPrice.classList.add("ff-bold");

    divPriceReduction.append(pPrice);

    divPriceReduction.classList.add("price_reducer_div");
    

    btnAddToCard.innerHTML = "В корзину";
    btnAddToCard.classList.add("btn_add_to_card");
    btnAddToCard.classList.add("border_radius_btn_item");
    btnAddToCard.classList.add("fw-700");
    btnAddToCard.classList.add("fs-btn-item");
    btnAddToCard.classList.add("ff-bold");
    btnAddToCard.dataset.shop = `${target.id}`;

    divShop.append(btnAddToCard);

    divTags.classList.add("tags")


    if(target.tags.new){
        const btn = document.createElement("button");
        btn.innerHTML = "New!";
        btn.classList.add("news");
        divTags.append(btn);
    }

    if(target.tags.sale){
        const btn = document.createElement("button");
        btn.innerHTML = "Sale!";
        btn.classList.add("sale")
        divTags.append(btn);
    }

    if(target.tags.shippingRestrictions){
        const btn = document.createElement("button");
        btn.innerHTML = "Ограничения по доставке";
        btn.classList.add("other_text")
        divTags.append(btn);
    }



    divContainer.append(divImg);
    divContainer.append(titleItem);
    divContainer.append(divPriceReduction);
    divContainer.append(divShop)
    divContainer.append(divTags);


    return divContainer;


}