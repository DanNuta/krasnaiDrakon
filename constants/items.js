import {imagesItems} from "../images/index.js";



export const navDesktop = ["О магазине", "Оплата и доставка", "Дисконтная карта", "Вакансии", "Оптовикам", "Контакты", "Новости", "Акции", "Франшиза"];
export const navTablet = ["О магазине", "Оплата и доставка", "Дисконтная карта", "Вакансии", "Оптовикам", "Еще"];


export const items = [
    {
        id: 1,
        img: imagesItems.item1,
        title: `Салат из водорослей "Чука", 1000 гр`,
        price: 468,
        reduction: {
            reductionBoolean: true,
            reductionCounter: -73
        },
        new: true,
        sale: true,
        shippingRestrictions: true
    }
]
