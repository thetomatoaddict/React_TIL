
function items(title, price) {
    this.title = title
    this.price = price
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`)
    }
}

item1 = items("연필", 1000)
item2 = items("마우스", 12000)
item3 = items("헤드폰", 33000)

console.log(item1, item2, item3)

item3.showPrice()