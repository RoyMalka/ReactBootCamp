var cartItems = [];

async function loadCartItems() {
    return cartItems;
}

async function addToCart(product) {
    if(itemExist(product.id)) {
        const mappedItems = cartItems.map( item => {
            if(item.product.id === product.id) {
                item = { ...item, number: item.number + 1}
            }
            return item;
        });
        cartItems = mappedItems;       
    } else {
        cartItems.push({
            id: generateId(),
            product: product,
            number: 1
        });
    }
}

 function deleteFromCart(id) {
    if(numberOfItems(id) !== 1){
        const mappedItems = cartItems.map( item => {
            if(item.id === id) {
                item = { ...item, number: item.number - 1}
            }
            return item;
        });
        cartItems = mappedItems; 
        
    } else {
        cartItems = cartItems.filter(o=> o.id !== id);
    }

    return cartItems;
}

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function itemExist(id) {
    let result = false;
    cartItems.forEach(item=> {
        if(item.product.id === id) {
            result = true;
        }
    });

    return result;
}


function numberOfItems(id) {
    return cartItems.find(o => o.id === id).number;
}

export default {
    loadCartItems,
    addToCart,
    numberOfItems,
    itemExist,
    generateId,
    deleteFromCart

}



    