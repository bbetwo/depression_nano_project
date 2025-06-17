import type { ProductItemType } from "../types";



export const productMock = (num:number): ProductItemType[] => {
    const arr = Array.from({length:num},(_,id) => {
        return {
            id: id + 1,
            name: ["Смартфон","Нубук","Наушники"][id % 3],
            price: [299.99, 1258.34, 172.99][id % 3],
            description: ["Флагманский смартфон с лучшей камерой","Беспроводные наушники с шумоподавлением", "Мощный игровой ноутбук"][id % 3],
            image: ["/phone.jpg", "/nubook.jpg", "/headphones.jpg"][id % 3]
        }
    })

    return arr;
}
