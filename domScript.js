import { 
    navDesktop,
    navTablet, 
    menu, 
    items as item, 
    ratindProducts,
    footerMagazinList,
    sliderHome,
    extendNavLaptop,
 } from "./constants/items.js";


const laptopNav = document.querySelector(".nav-laptop");
const desktopNav = document.querySelector(".nav-desktop");
const menuDom = document.querySelector(".menu");
const itemDom = document.querySelector(".item");
const testimonialFood = document.querySelector(".testimpnials_food");
const navFooter = document.querySelector(".footer_nav");
const footerMagazin = document.querySelector(".footer_magazin_li");
const extendNavList = document.querySelector(".extend_nav_list");
const dots = document.querySelector(".dots");
const slider = document.querySelector(".slider_ul");




extendNavLaptop.forEach(item => {
    extendNavList.append(createLiNavLaptop(item))
})

const width = window.innerWidth;


    navTablet.forEach(item => {
        laptopNav.setAttribute("style", "--gap-custom: 1.5rem");
        laptopNav.classList.add("flex_align_custom")
      laptopNav.append(healperHtmlNav(item));
    });


navDesktop.forEach(item => {
    desktopNav.append(healperHtmlNav(item));

    const itemDom = healperHtmlNav(item);
    itemDom.classList.add("mb-10")
    const a = itemDom.querySelector("a");
    a.classList.add("clr-white")


    navFooter.append(itemDom);
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

footerMagazinList.forEach((item, i) => {
    const itemDom = healperHtmlNav(item);
    itemDom.classList.add("mb-10")
    const a = itemDom.querySelector("a");
    a.classList.add("clr-white")
    footerMagazin.append(itemDom);
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

    title.classList.add("fs-slider-title");
    title.classList.add("line-height-slider-title")
    title.classList.add("fw-600");
    title.classList.add("ff-semin-bold");

    content.classList.add("fw-400");
    content.classList.add("fs-14");
    content.classList.add("ff-regular");
    content.classList.add("clr-text-secondary")



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
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${target}`;
    a.textContent = `${target}`;

    a.classList.add("ff-regular");
    a.classList.add("clr-text-silver")
    a.classList.add("fs-12")

    if(target === "Еще"){
        a.setAttribute("id", "show_full_nav")
    }

    li.append(a);

    return li;
}


function createLiNavLaptop(target){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${target}`;
    a.textContent = `${target}`;

    a.classList.add("ff-regular");
    a.classList.add("fw-400");
    a.classList.add("fs-14");
    a.classList.add("clr-text-silver")

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
    divContainer.
    append(divPriceReduction);
    divContainer.append(divShop)
    divContainer.append(divTags);


    return divContainer;


}



function createRatingHelperDom(target){
    const div = document.createElement("div");

    div.classList.add("flex_align_custom");
    div.setAttribute("style", "--gap-custom: 3px")


    for(let i = 0; i < target.rating; i++){
        const img = document.createElement("img");
        img.src = `./images/recenzii/star.svg`;

        div.append(img);
    }


   const item = `
   <div class="testimonials | border-radius-fixes-16">

      <div class="flex f_d_column gap_testimonials">

      <div>
        <div class="flex_align_custom mb-16" style="--gap-custom: 1.5rem">

            <div class="align_self_start">
                <img class="width-100" src='${target.img}' alt="lapte">
            </div>

            <div>
                <h1 class="line-height-24 fs-16 ff-semin-bold clr-text-primary fw-600 mb-10">${target.title}</h1>
                ${div.outerHTML}
            </div>
        </div>
      
        <div>
            <p class="fs-14 ff-regular fw-400 line-height-22 clr-text-secondary">${target.content}</p>
        </div>


      </div>

       <div class="flex_align_custom " style="--gap-custom: .625rem">
       
           <div class="justify_center flex_align_custom circle_btn" style="--gap-custom: .625rem; --bg_custom_circle: #EDF3F0 ">
               <img src=${target.author.img} alt="user">
           </div>

           <div>
               <h1 class="fs-14 ff-semin-bold fw-600 clr-text-primary">${target.author.name}</h1>
               <p class="ff-light fs-12 fw-300">${target.author.timeStamp}</p>
           </div>
       </div>
   </div>
</div>
   `


    return item;

}


