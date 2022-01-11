import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModelService {
    about!: Block;
    services!: Block;
    projects!: Block;
    partners!: Block;
    contacts!: Block;

    constructor() {

        this.about = {
            title: "О нас",
            content: {
                companyName: 'КИНО​КОМПАНИЯ ДОН​СИНЕМА',
                about: {
                    title: "Чем мы занимаемся?",
                    description: "Приоритетные направления — продюсирование, прокат и продвижение собственных и партнерских кинопроектов, а также продакшн сервис на территории России. Мы предлагаем полный цикл услуг по организации съемочного процесса и постпродакшна для проектов любого масштаба и бюджета.",
                    imagePath: ""
                },
                callToAction: {
                    title: "Свяжитесь с нами",
                    description: "Оставьте нам свой телефон и мы вам позвоним",
                    imagePath: ""
                }
            }
        }

        this.services = {
            title: "Услуги",
            content: {
                categories: [
                    {
                        title: "Транспорт",
                        cards: [
                            {
                                title: "Костюмваген",
                                description: "Мобильная костюмерная создана на базе автомобиля Газон 2021 года выпуска (габаритные размеры 7,2*2.4*2.4). Оборудована для хранения, глажения актерских костюмов, а также для переодевания актеров. Прекрасно подходит для экспедиций.",
                                imagePath: "http://autogaz-ural.ru/wp-content/uploads/2015/09/gazon-next-evroplatforma-3-mesta.png"
                            },
                            {
                                title: "Гримваген",
                                description: "Комфортный, просторный модуль , создана на базе автомобиля Газель 2021 года выпуска (габаритные размеры 5,2*2.2*2.4). который оборудован 3-мя рабочими местами для для трех человек, оборудовано зеркалами, индивидуальным освещением, раковиной для мытья головы и диваном для ожидающих своей очереди актёров. Наши специалисты не забыли и о комфорте: фургон-костюмерка был утеплён. Также установлен кондиционер и автономный отопитель.",
                                imagePath: "https://static-sl.insales.ru/images/products/1/844/191177548/%D0%93%D0%90%D0%97_%D0%93%D0%B0%D0%B7%D0%B5%D0%BB%D1%8C_Next_2014.jpg"
                            },
                            {
                                title: "Туалет",
                                description: "Мобильный туалетный модуль изготовлен на базе автомобиля газель. Внутренняя отделка выполнена из нержавеющей стали. Туалетные комнаты просторные.",
                                imagePath: "https://sun9-13.userapi.com/impg/e6ifi71QjNHJX3_iwpTRxV5WPriTeT0gPP8ccg/qLV_w9ThREs.jpg?size=958x1280&quality=96&sign=a6dabe181e423dbe1028f25412487508&type=album"
                            },
                            {
                                title: "Разъездные машины",
                                description: "Наш автопарк разъездных машин более 10-единиц. Есть автомобили бизнес класса и эконом.",
                                imagePath: ""
                            }
                        ]
                    },
                    {
                        title: "Аутсорсинг",
                        cards: [
                            {
                                title: "Аутсорсинг",
                                description: "Аутсорсинг — передача организацией на основании договора определённых видов или функций производственной предпринимательской деятельности другой компании, действующей в нужной области.",
                                imagePath: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            }
                        ]
                    },
                    {
                        title: "Организации проживания и питания",
                        cards: [
                            {
                                title: "Организации проживания и питания",
                                description: "Актёров накормят и заселят, согласно их райдерам",
                                imagePath: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            }
                        ]
                    },
                    {
                        title: "Аренда костюмов и реквизита",
                        cards: [
                            {
                                title: "Аренда костюмов и реквизита",
                                description: "Предоставим костюмы и реквизиты",
                                imagePath: "https://www.mosfilm.ru/upload/iblock/fb2/fb21d8da554c53a67bddb4967e132d4d.jpg"
                            }
                        ]
                    },
                    {
                        title: "Аренда хоз. инвентаря",
                        cards: [
                            {
                                title: "Рации",
                                description: "Когда команда фильма вынуждена покидать павильоны, чтобы отснять сцены на природе, вдали от крупных населённых пунктов, мобильные телефоны оказываются бесполезны, уступая место традиционным симплексным радиостанциям.",
                                imagePath: "https://баофенг.рф/image/cache/catalog/image/cache/catalog/Tovary/Baofeng/2019/baofeng_uv-5r_colors-min-800x800.webp"
                            },
                            {
                                title: "Палатки",
                                description: "Предоставитм палатки",
                                imagePath: "https://img.promportal.su/foto/good_fotos/46844/468442539/kino-palatka-3h3_foto_largest.jpg"
                            },
                            {
                                title: "Столы, стулья",
                                description: "Предоставим столы и стулья",
                                imagePath: "https://shalash.by/foldsets/images/products/78/stol-skladnoj-beseda-o150sm01.jpg"
                            },
                            {
                                title: "Прочее",
                                description: "Найдём всё что вам нужно",
                                imagePath: "https://yt3.ggpht.com/ytc/AKedOLRfDmdb38qoIQWFY-S16_JtJk2CkZHG98Bjdhk6Sw=s900-c-k-c0x00ffffff-no-rj"
                            }
                        ]
                    }

                ]
            }
        }
        this.projects = {
            title: "Проекты",
            content: {
                films: [
                    {
                        title: "Хозяин",
                        description: "Бывший боксёр Егор Таранцев приезжает в родной приморский городок на похороны матери. Двадцать лет назад он уехал на соревнования и больше не возвращался в эти края. Карьера пошла на взлёт, из любителей он вышел в профессионалы, бился за чемпионский титул в Лас-Вегасе, всё на ринге складывалось удачно, пока однажды врачи не выдали Егору приговор, - если он не остановится, то последствия могут быть непоправимы, — от инсульта до смерти.",
                        imagePath: "https://a.kinoblogi.ru/2021/01/31/mirserialov16180128687470.jpg"
                    },
                    {
                        title: "Катерина",
                        description: "Что тебе остается делать, когда в детстве, в результате несчастного случая погибает вся твоя семья, а ты оказываешься в детском доме? Что тебе остается делать, если твоей единственной любовью становится человек, спасший тебя от неминуемой смерти и забывший потом тебя? Что тебе остается делить, если появившийся, чудом выживший родной брат оказывается настоящим преступником? Жизненные испытания, выпавшие на долю главной героини Кати Марковой - не из легких. Только вознаградятся ли потом они заслуженным счастьем, спокойствием и взаимной любовью?",
                        imagePath: "https://tvshowguide.ru/wp-content/uploads/2021/01/katerina-2.jpg"
                    },
                    {
                        title: "Призрачное счастье",
                        description: "Сагар очень любит свою красавицу жену Пурнилу. В их доме царит счастье. Все меняется в один день. Старшая сестра Пурнилы была тяжело больна, но наступает улучшение и ее выписывают из больницы домой. К несчастью, эта женщина не только сестра Пурнилы, она еще и первая жена Сагары...",
                        imagePath: "https://avatars.mds.yandex.net/get-entity_search/5574318/534704878/SUx182_2x"
                    },
                    {
                        title: "За семью печатями",
                        description: "В детстве Кристину предала родная сестра Анна. После гибели родителей она стала главой семьи и приняла решение отдать Кристину в детский дом. Однажды Анна снова вторгается в жизнь Кристины с неожиданным предложением, и все переворачивается с ног на голову. Теперь Кристине предстоит встать во главе семейного бизнеса и выяснить, кому из своих «чужих родных» она может доверять, а кого ей стоит опасаться.",
                        imagePath: "https://images.kinorium.com/movie/backstage/2783586/w1500_49833312.jpg"
                    },
                    {
                        title: "Чужая Стая» 2-й сезон",
                        description: "Майор Шатров переводится на новое место работы из родного Владимира. Перевод был вынужденным, а всё из-за характера Шатрова: он – человек с сильным природным обаянием, но при это совершенно лишён самообладания. К тому же у него обострённое чувство справедливости, которое так часто и приводит к проблемам. Одна из них – конфликт с прокурором, из-за которого погибла свидетельница, – и привела Шатрова в отдел ППС. А в отделе ППС царит коррупция, и многие дела закрываются без должного расследования. В первый же день Шатров ввязывается в историю с похищением общака – денег местных депутатов, бандитов и полиции.",
                        imagePath: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/trailer_3248.jpg"
                    },
                    {
                        title: "ЗАГС",
                        description: "Пока что сериал в производстве",
                        imagePath: "https://mf-static-ssl.more.tv/jackal/2561793/f19923c9-47fd-4f29-a6f4-ccb92142c8a4_W375_H532.jpg"
                    },
                    {
                        title: "Борщи",
                        description: "Пока что сериал в производстве",
                        imagePath: ""
                    },
                    {
                        title: "Союз Спасения. Время гнева",
                        description: "Российский драматический сериал о восстании декабристов. Они уверены, что справедливость и свобода наступят здесь и сейчас. И ради этого многие готовы пожертвовать не только любовью, но и жизнью.",
                        imagePath: "https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2020/08/187051-1-467x697.jpg"
                    }
                ]
            }
        }
        this.partners = {
            title: "Наши партнёры",
            content: {
                partners: [
                    {
                        name: "LookFilm",
                        logoImagePath: ""
                    },
                    {
                        name: "Продюсерский центр браво",
                        logoImagePath: ""
                    },
                    {
                        name: "ИП Мосин М.Н.",
                        logoImagePath: ""
                    }
                ]
            }
        }
        this.contacts = {
            title: "Контакты",
            content: {
                phones: {
                    title: "Телефон",
                    contacts: [
                        "+7 (928) 155-09-87",
                        "+7 (929) 817-24-44",
                        "+7 (863) 279-38-09"
                    ]
                },
                emails: {
                    title: "Email",
                    contacts: [
                        "buh@donsinema.ru"
                    ]
                },
                addresses: {
                    title: "Адрес",
                    contacts: [
                        "г. Ростов-на-Дону ул. Платона Кляты 15 офис 66",
                        "г. Ростов-на-Дону ул. Вавилова 58 офис 309"
                    ]
                }
            }
        }

    }
}
interface Block {
    title: string;
    content: any;
}

// export interface About {
//     companyName: string;
//     about: Card;
//     callToAction: Card;
// }
export interface Services {
    title: string;
    categories: Category[];
}
// export interface Projects {
//     title: string;
//     films: Card[];
// }
// export interface Partners {
//     title: string;
//     partners: Partner[];
// }
// export interface Contacts {
//     title: string;
//     contactTypes: ContactType[];
// }

export interface Card {
    title: string;
    description: string;
    imagePath: string;
}
interface Category {
    title: string;
    cards: Card[];
}
// interface Partner {
//     name: string;
//     logoImagePath: string;
// }
// interface ContactType {
//     title: string;
//     contacts: string[];
// }