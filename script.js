import { getFromBackEnd } from './utils/http.js';

const itemsContainer = document.getElementById('items');

getFromBackEnd()
  .then(items =>{
    let shopItems = '';
    items.forEach((item) => {
      console.log('item', item);
      
      shopItems += `
        <div class="box-item">
          <img src="${item.img}" />
          <button>Add to card</button>
        </div>
      `
    });
    itemsContainer.innerHTML = shopItems
  })


