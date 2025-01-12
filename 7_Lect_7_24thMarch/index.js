// const arr = [1, 2, 3, 4, 5, 6, 7];

// const newArr = arr.map((x) => x + 1);

// console.log(newArr);

// const multiplyArray = arr.map((x) => {
//   if (x % 2 === 0) return x * 2;
//   else return x * 5;
// });

// console.log(multiplyArray);

// const names = ['abc', 'bjbn', 'cghjk', 'dtryuil', 'eghnbm', 'fertyuio'];
// const namesLength = names.map((x) => x.length)
// console.log(namesLength);

// const filteredName = names.filter((name) => name.length < 7);
// console.log(filteredName);

const storeData = {
    women: {
      top: {
        id: "at12",
        availability: [
          { id: 1, color: "blue", quantity: 5, inStock: true },
          { id: 2, color: "black", quantity: 3, inStock: true }
        ]
      },
      jeans: {
        id: "aj12",
        availability: [
          { id: 3, color: "dark blue", quantity: 0, inStock: false },
          { id: 4, color: "dark blue", quantity: 5, inStock: true },
          { id: 5, color: "black", quantity: 5, inStock: true }
        ]
      },
      purse: {
        id: "ap12",
        availability: [
          { id: 6, color: "red", quantity: 5, inStock: true },
          { id: 7, color: "white", quantity: 0, inStock: false }
        ]
      }
    },
    men: {
        shirt: {
          id: "ms12",
          availability: [
            { id: 8, color: "yellow", quantity: 5, inStock: true },
            { id: 9, color: "black", quantity: 3, inStock: true }
          ]
        },
        jeans: {
          id: "mj12",
          availability: [
            { id: 10, color: "blue", quantity: 0, inStock: false },
            { id: 11, color: "black", quantity: 9, inStock: true }
          ]
        },
        wallet: {
          id: "mw12",
          availability: [
            { id: 12, color: "blue", quantity: 15, inStock: true },
            { id: 13, color: "black", quantity: 10, inStock: true }
          ]
        }
      }
    };

    const blueJeans = storeData.women.jeans.availability.filter(item => item.color === 'dark blue' && item.inStock);
    console.log(blueJeans);
    const wallets = storeData.men.wallet.availability.filter(item => item.quantity > 10);
    console.log(wallets);
    const shirt = storeData.men.shirt.availability.filter(item => item.quantity > 3 && item.inStock && item.color === 'yellow');
    console.log(shirt);