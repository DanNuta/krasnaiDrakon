//import {imagesItems} from "../images/index.js";


export const navDesktop = ["О магазине", "Оплата и доставка", "Дисконтная карта", "Вакансии", "Оптовикам", "Контакты", "Новости", "Акции", "Франшиза"];
export let navTablet = ["О магазине", "Оплата и доставка", "Еще"];
export const navLeptop = ["О магазине", "Оплата и доставка", "Дисконтная карта", "Вакансии", "Оптовикам", "Контакты", "Еще"];
export const footerMagazinList = ["Товары со скидкой", "Новые поступления", "Японские продукты", "Корейские продукты", "Китайские продукты", "Вьетнамские продукты", "Тайские продукты", "Индийские продукты", "Индийские продукты", "Другие продукты"];
export const extendNavLaptop = ["Дисконтная карта", "Вакансии", "Оптовикам", "Контакты", "Новости", "Акции", "Франшиза"];


const width = window.innerWidth;

if(width >= 992){
    navTablet = ["О магазине", "Оплата и доставка", "Дисконтная карта", "Вакансии", "Еще"];
}

export const items = [
    {
        id: 1,
        img: ["./images/items/1.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },

        tags: {
            new:true,
            sale: true,
            shippingRestrictions: true
        }
    },


    {
        id: 2,
        img: ["./images/items/2.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        tags: {
            new:true,
            shippingRestrictions: false,
            sale: false,
            
        }
    },


    {
        id: 3,
        img: ["./images/items/3.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        tags: {
            shippingRestrictions: true,
            new:false,
            sale: false,
        }
    },

    {
        id: 4,
        img: ["./images/items/4.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: false,
        },
        tags: {
            new:true,
            sale: true,
            shippingRestrictions: true
        }
    },


    {
        id: 5,
        img: ["./images/items/5.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: false,
        },

        tags: {
            new:false,
            sale: true,
            shippingRestrictions: true
        }
    },


    {
        id: 6,
        img: ["./images/items/6.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        tags: {
            new: false,
            sale: false,
            shippingRestrictions: false
        }
    },

    {
        id: 7,
        img: ["./images/items/7.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        tags: {
            new: false,
            sale: false,
            shippingRestrictions: false
        }
    },

    {
        id: 8,
        img: ["./images/items/8.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        tags: {
            new: false,
            sale: false,
            shippingRestrictions: false
        }
    },

    {
        id: 9,
        img: ["./images/items/9.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        tags: {
            new: false,
            sale: true,
            shippingRestrictions: false
        }
    },

    {
        id: 10,
        img: ["./images/items/10.png"],
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        tags: {
            new: false,
            sale: true,
            shippingRestrictions: false
        }
    },


];


export const menu = [
    {
       img: "./images/meniu/image1.png",
       title: "Товары со скидкой"
    },

    {
        img: "./images/meniu/image2.png",
        title: "Новые поступления"
     },

     {
        img: "./images/meniu/image3.png",
        title: "Японские продукты"
     },

     {
        img: "./images/meniu/image4.png",
        title: "Корейские продукты"
     },

     {
        img: "./images/meniu/image5.png",
        title: "Китайские продукты"
     },

     {
        img: "./images/meniu/image6.png",
        title: "Вьетнамские продукты"
     },

     {
        img: "./images/meniu/image7.png",
        title: "Тайские продукты"
     },

     {
        img: "./images/meniu/image8.png",
        title: "Индийские продукты"
     },

     {
        img: "./images/meniu/image9.png",
        title: "Овощи и фрукты"
     },

     {
        img: "./images/meniu/image10.png",
        title: "Другие продукты"
     },

]



export const ratindProducts = [
    {
        id: 1,
        img: "./images/recenzii/images/1.png",
        title: "Водоросли даши Комбу 200 гр",
        rating: 5,
        content: `Соотношение цена-качество на пятерку.
        
        Брала чисто для бульона. Получается прекрасно, на вкус что надо✌? Получается хорошая основа для супов и...`,
        author: {
            img: "./images/recenzii/people/1.png",
            name: "Александр",
            timeStamp: "19 августа 2021 14:43",
        }
    },


    {
        id: 2,
        img: "./images/recenzii/images/2.png",
        title: "Водоросли даши Комбу 200 гр",
        rating: 4,
        content: `Соотношение цена-качество на пятерку.
        Брала чисто для бульона. Получается прекрасно, на вкус что надо✌? Получается хорошая основа для супов и...`,
        author: {
            img: "./images/recenzii/people/2.png",
            name: "Елена Терещенко",
            timeStamp: "19 августа 2021 14:43",
        }
    },

    {
        id: 3,
        img: "./images/recenzii/images/3.png",
        rating: 5,
        title: "Водоросли даши Комбу 200 гр",
        content: `Соотношение цена-качество на пятерку.
        Брала чисто для бульона. Получается прекрасно, на вкус что надо✌? Получается хорошая основа для супов и...`,
        author: {
            img: "./images/recenzii/people/3.png",
            name: "Александр",
            timeStamp: "19 августа 2021 14:43",
        }
    },


    {
        id: 4,
        img: "./images/recenzii/images/4.png",
        title: "Водоросли даши Комбу 200 гр",
        rating: 3,
        content: `Соотношение цена-качество на пятерку.
        Брала чисто для бульона. Получается прекрасно, на вкус что надо✌? Получается хорошая основа для супов и...`,
        author: {
            img: "./images/recenzii/people/4.png",
            name: "Хо Чин По",
            timeStamp: "19 августа 2021 14:43",
        }
    },

    {
        id: 5,
        img: "./images/recenzii/images/1.png",
        title: "Водоросли даши Комбу 200 гр",
        rating: 5,
        content: `Соотношение цена-качество на пятерку.
        Брала чисто для бульона. Получается прекрасно, на вкус что надо✌? Получается хорошая основа для супов и...`,
        author: {
            img: "./images/recenzii/people/1.png",
            name: "Елена Терещенко",
            timeStamp: "19 августа 2021 14:43",
        }
    },


];


export const sliderHome = [
    {
        id: 1,
        img: "./images/slider/1.png",
        title: "Мисо-супы японского бренда Marukome",
        content: "Лучшие цены на всю серию продуктов"
    },

    {
        id: 2,
        img: "./images/slider/1.png",
        title: "Мисо-супы японского бренда Marukome",
        content: "Dan"
    },

    {
        id: 3,
        img: "./images/slider/1.png",
        title: "Мисо-супы японского бренда Marukome",
        content: "Lorem ipsum dolor"
    },

    {
        id: 4,
        img: "./images/slider/1.png",
        title: "Мисо-супы японского бренда Marukome",
        content: "Лучшие цены на всю серию продуктов"
    },

    {
        id: 5,
        img: "./images/slider/1.png",
        title: "Мисо-супы японского бренда Marukome",
        content: "Лучшие цены на всю серию продуктов"
    },

]
