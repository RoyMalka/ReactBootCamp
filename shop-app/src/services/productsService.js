
let products = [];

async function loadProducts() {

    products = [
        {
            id: "_xs12cj6wf",
            title: "This Peephole",
            price: 12,
            image: "https://static.boredpanda.com/blog/wp-content/uploads/2016/10/most-pointless-useless-things-27-580efbbfaf47d__605.jpg",
            description: "Why look out a huge window when you can have the more intimate experience of using a creepy peephole?"
        },
        {
            id: "_ys12cj6wf",
            title: "Shoe umbrellas",
            price: 21,
            image: "https://static.independent.co.uk/s3fs-public/styles/story_medium/public/indy100/Z1Sd9fYMbl/21318-m8rc0d.jpg",
            description: "An invention from the Japanese market, these 'chindogu' shoe umbrellas are designed to keep your feet dry in the rain but might prove slightly tricky in high winds."
        },
        {
            id: "_zs12cj6wf",
            title: "The Toilet Paper Hat",
            price: 4,
            image: "https://qph.fs.quoracdn.net/main-qimg-8a6d075d7ac29620ab28c7914f3a3989.webp",
            description: "Now I know why they are cutting trees.."
        },
        {
            id: "_as12cj6wf",
            title: "The Remote Headband",
            price: 10,
            image: "https://qph.fs.quoracdn.net/main-qimg-d1ef0ac3fdf4e70e7e691ea88a4b1ea9.webp",
            description: "Think of a person wearing and walking around like this.."
        },
        {
            id: "_bs12cj6wf",
            title: "Noodle Fan",
            price: 112,
            image: "https://qph.fs.quoracdn.net/main-qimg-50fdea6382836fe34465b4a38c2f2e30",
            description: "For those impatient eaters that don't want to wait a minute."
        },
        {
            id: "_cs12cj6wf",
            title: "Diet Water",
            price: 32,
            image: "https://static.twentytwowords.com/wp-content/uploads/17water.jpg",
            description: "Does normal water just have too many negative calories for you?"
        },
        {
            id: "_ds12cj6wf",
            title: "YouTube Book",
            price: 45,
            image: "https://static.twentytwowords.com/wp-content/uploads/18book-2.jpg",
            description: "Instead of actually watching clips on YouTube, you can read about the clips you should probably watch on YouTube."
        },
        {
            id: "_es12cj6wf",
            title: "This Wiper",
            price: 3,
            image: "https://static.twentytwowords.com/wp-content/uploads/29wipe.jpg",
            description: "Unless they’ve swapped out wiper fluid for paint remover, I’m thinking that’s not going to really work."
        },
        {
            id: "_fs12cj6wf",
            title: "Phone Fingers",
            price: 50,
            image: "https://qph.fs.quoracdn.net/main-qimg-e973ee894f46b2f43e59f8d4599c8f1c.webp",
            description: "For the people who is master in patience.."
        }
    ];
    return products;
}


 function loadProduct(id) {
      var product = loadProducts().
        then(products => {
            return products.find(o => o.id === id);
        });
        return product;     
}


export default {
  loadProducts,
  loadProduct
}