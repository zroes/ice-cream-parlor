const menu = [
  [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
  }, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
  }, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
  }],
  [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
  }, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
  }],
  [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
  }, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
  }]
]


function drawMenu() {
  let template = ''
  menu[0].forEach(cream => {
    template += `
    <div onclick="addItem('${cream.name}')" class="col-3 ms-4 menu-card p-1 mx-2">
            <img class="menu-image p-1" src="${cream.image}" alt="icecream picture">
            <p class="mb-0 text-center">${cream.name}  $${cream.price}</p>
          </div>
    `
  })
  document.getElementById('flavor').innerHTML = template;

  template = ''
  menu[1].forEach(c => {
    template += `
    <div onclick="addItem('${c.name}')" class="col-3 ms-4 menu-card p-1 mx-2">
            <img class="menu-image p-1" src="${c.image}" alt="icecream picture">
            <p class="mb-0 text-center">${c.name}  $${c.price}</p>
          </div>
    `
  })
  document.getElementById('containers').innerHTML = template;

  template = ''
  menu[2].forEach(t => {
    template += `
    <div onclick="addItem('${t.name}')" class="col-3 ms-4 menu-card p-1 mx-2">
            <img class="menu-image p-1" src="${t.image}" alt="icecream picture">
            <p class="mb-0 text-center">${t.name}  $${t.price}</p>
          </div>
    `
  })
  document.getElementById('toppings').innerHTML = template;
}

function drawCart() {
  let template = ''
  let bgdarker = 'bg-darker'
  let bgnormal = 'bg-normal'
  let tracker = false
  menu.forEach(a => {
    a.forEach(i => {
      if (i.quantity) {
        tracker = !tracker;
        template += `
      <div class="row ${tracker ? bgdarker : bgnormal}">
          <div class="col-6">
            <h3 class="p-4 m-0">${i.name}</h3>
          </div>
          <div class="col-2">
            <h3 class="p-4 m-0 text-center color-lighter">${i.quantity}</h3>
          </div>
          <div class="col-2">
            <h3 class="p-4 m-0 text-center color-lighter">$${i.price}</h3>
          </div>
          <div class="col-2">
            <h3 class="p-4 m-0 text-center">$${i.price * i.quantity}</h3>
          </div>
      </div>`
      }
    })
  })
  let cartElem = document.getElementById('cart')
  if (cartElem)
    cartElem.innerHTML = template;
  document.getElementById('total').innerText = calcTotal().toString()
}

function calcTotal() {
  let total = 0
  menu.forEach(a => {
    a.forEach(item => {
      total += (item.price * item.quantity)
    })
  })
  return total
}

function addItem(name) {
  menu.forEach(a => {
    let item = a.find(f => f.name == name)
    if (item)
      item.quantity++
    drawCart()
  })

}

drawMenu()