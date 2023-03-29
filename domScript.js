import { 
    navDesktop,
    navTablet, 
    menu, 
    items as item, 
    ratindProducts,
    footerMagazinList,
    sliderHome,
    extendNavLaptop
 } from "./constants/items.js";


const laptopNav = document.querySelector(".nav-laptop");
const desktopNav = document.querySelector(".nav-desktop");
const menuDom = document.querySelector(".menu");
const itemDom = document.querySelector(".item");
const testimonialFood = document.querySelector(".testimpnials_food");
const navFooter = document.querySelector(".footer_nav");
const footerMagazin = document.querySelector(".footer_magazin");
const extendNavList = document.querySelector(".extend_nav_list");
const dots = document.querySelector(".dots");
const slider = document.querySelector(".slider_ul");

extendNavLaptop.forEach(item => {
    extendNavList.append(createLiNavLaptop(item))
})


navTablet.forEach(item => {
  laptopNav.append(healperHtmlNav(item));
});

navDesktop.forEach(item => {
    desktopNav.append(healperHtmlNav(item));
    navFooter.append(healperHtmlNav(item))
});


menu.forEach(item => {
    menuDom.append(createMenuHelper(item))
})


item.forEach(item => {
    itemDom.append(createItemHealperDom(item))
});

ratindProducts.forEach(item => {
    testimonialFood.innerHTML += testimonialFood.innerHTML  = (createRatingHelperDom(item));
})

footerMagazinList.forEach(item => {
    footerMagazin.append(healperHtmlNav(item))
})

sliderHome.forEach(item => {
    const btnDots = document.createElement("button");
    btnDots.classList.add("btn_dots");

    const divContainer = document.createElement("div");

    //const divImages = document.createElement("div");
    const divText = document.createElement("div");

    const img = document.createElement("img");
    const title = document.createElement("h1");
    const content = document.createElement("p");



    divContainer.classList.add("slider_container");
    divContainer.classList.add("border_radius_slider")
    //divImages.classList.add("slider_images_div");
    divText.classList.add("slider_text_div");

    img.src = item.img;
    title.innerHTML = item.title;
    content.innerHTML = item.content;


    divContainer.append(img);

    divText.append(title);
    divText.append(content);
   // divContainer.append(divImages);
    divContainer.append(divText);

    const li = document.createElement("li");
    li.append(divContainer);


    slider.append(li)
    dots.append(btnDots);


})






function healperHtmlNav(target){
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${target}`;
    a.textContent = `${target}`;

    li.append(a);
    ul.append(li);

    return ul;
}


function createLiNavLaptop(target){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${target}`;
    a.textContent = `${target}`;

    li.append(a);

   
    return li;
}


function createMenuHelper(target){
    const divContainer = document.createElement("div")
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const divImage = document.createElement("div");


    h1.classList.add("fs-menu-text");
    h1.classList.add("fw-600");
    h1.classList.add("ff-semin-bold");
    h1.classList.add("clr-text-primary");

    divImage.classList.add("menu_div_container");

    divContainer.classList.add("menu_element")

    img.src = target.img;
    h1.textContent = target.title;

    
    divContainer.append(divImage);
    divContainer.append(h1);
    divImage.append(img)

    return divContainer;
}



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



function createRatingHelperDom(target){

    const div = document.createElement("div");


    for(let i = 0; i < target.rating; i++){
        const img = document.createElement("img");
        img.src = `./images/recenzii/star.svg`;

        div.append(img);
    }


   const item = `
   <div>
   <div>
       <div>

           <div>
               <img src='${target.img}' alt="lapte">
           </div>

           <div>
               <h1>${target.title}</h1>
               ${div.outerHTML}
           </div>
       </div>


       <div>
           <p>${target.content}</p>
       </div>


       <div>
           <div>
               <img src=${target.author.img} alt="user">
           </div>

           <div>
               <h1>${target.author.name}</h1>
               <p>${target.author.timeStamp}</p>
           </div>
       </div>
   </div>
</div>
   `


    return item;

}


