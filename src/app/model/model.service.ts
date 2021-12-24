import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModelService {

    constructor() { }

    // транспорт
    // аренда хоз инвентаря
    // аутсорсинг
    // услуги по организации проживания и питания группы и актеров (согласно их райдеров)
    // организаторские услуги
    // аренда костюмов и аренда реквизита

    // Сериал «Хозяин»
    // Сериал «Катерина»
    // Сериал «Призрачное счастье»
    // Сериал «За семью печатями»
    // Сериал «Чужая Стая» 2-й сезон
    // Сериал «ЗАГС»
    // Сериал «Борщи»
    // Сериал «Союз спасения — «Время гнева»

}
interface about {
    card: card;
}
interface services {
    categories: category[];
}
interface projects {
    films: card[];
}
interface partners {
    partners: partner[];
}
interface contacts {
    contactTypes: contactType[];
}

interface card {
    title: string;
    description: string;
    imagePath: string;
}
interface category {
    cards: card[];
}
interface partner {
    name: string;
    logoImgPath: string;
}
interface contactType {
    title: string;
    contacts: string[];
}