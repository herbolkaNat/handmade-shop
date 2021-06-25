const productJSON =
[
    {
        'id': '1',
        'title': 'Скринька з павичем',
        'description': 'Для прикрас і маленьких жіночих таємниць. Скринька в техніці декyпаж з об’ємною ліпниною для зберігання прикрас та інших дрібниць. Рyчна робота. Матеріал: МДФ. Розмір: вис.11(15)см, шир. 18см, дов. 10,5 см. Вага: 633гр.',
        'price': 700,
        'imgUrl': 'img/peacock.jpg',
        'type': 'boxes'
    },
    {
        'id': '2',
        'title': 'Скринька з калиною',
        'description': 'Для прикрас і маленьких жіночих таємниць. Скринька в техніці декyпаж для прикрас та інших дрібниць. Рyчна робота.',
        'price': 200,
        'imgUrl': 'img/guelder-rose.jpg',
        'type': 'boxes'
    },
    {
        'id': '3',
        'title': 'Скринька кругла старовинна',
        'description': 'Для прикрас і маленьких жіночих таємниць. Скринька з об’ємною ліпниною для прикрас та інших дрібниць. Рyчна робота.',
        'price': 200,
        'imgUrl': 'img/round-box.jpg',
        'type': 'boxes'
    },
    {
        'id': '4',
        'title': 'Прикраса коник',
        'description': 'Новорічна декоративна прикраса. Виконана в техніці декyпаж. Рyчна робота. Матеріал: МДФ.',
        'price': 50,
        'imgUrl': 'img/horse.jpg',
        'type': 'new-year-decorations'
    },
    {
        'id': '5',
        'title': 'Прикраса ялинка',
        'description': 'Новорічна декоративна прикраса. Виконана в техніці декyпаж. Рyчна робота. Матеріал: МДФ.',
        'price': 70,
        'imgUrl': 'img/christmas-tree.jpg',
        'type': 'new-year-decorations'
    },
    {
        'id': '6',
        'title': 'Прикраса етно-іграшка',
        'description': 'Новорічна декоративна прикраса з об’ємною ліпниною. Рyчна робота. Матеріал: МДФ.',
        'price': 50,
        'imgUrl': 'img/ethno-toy.jpg',
        'type': 'new-year-decorations'
    },
]
;
renderProducts(products) {
    let productHTML ' ';
    for (const product of products) {
        productHTML += ` <article>
        <img src="${product.imgUrl}" alt="${product.title}">
        <h4>${product.title}</h4>
        <p>${product.description}</p>
        <button>Додати до кошика - ${product.price}</button>
    </article>`
    }
}