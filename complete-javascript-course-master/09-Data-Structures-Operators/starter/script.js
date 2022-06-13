'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  placeOrder: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Your order will be delivered on address: ${address} at ${time}, Your main menu is: ${this.mainMenu[mainIndex]}  and starter is: ${this.starterMenu[starterIndex]}`
    );
  },
};

// restaurant.placeOrder({
//   time: '12:00',
//   address: 'Nashik',
//   starterIndex: 0,
//   mainIndex: 1,
// });

/*
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
*/

// const [starter, main] = restaurant.order(2, 1);
// console.log(starter, main);

// const nested = [2, 3, 4, [5, 6, 7]];
// const [i, , j, [k, , l]] = nested;
// console.log(i, j, k, l);

// const { name: newName, openingHours } = restaurant;
// console.log(newName, openingHours);

// const { name: newName = [], openingHours: hours = [] } = restaurant;
// console.log(newName, hours);

// let a = 10;
// let b = 20;

// const obj = {
//   a: 100,
//   b: 200,
// };

// ({ a, b } = obj);
// console.log(a, b);

// const { openingHours } = restaurant;
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [1, 2, 3, 4, 5, 6];
// const [a, b, ...others] = arr;
// const newArr = [1, 2, ...arr]
// console.log(a, b, others);
// console.log(newArr);

const { sat: weekend, ...weekdays } = restaurant.openingHours;
// console.log(weekend, weekdays);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk1, ...rest1] = players1;
const [gk2, ...rest2] = players2;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'thiago', 'Coutino', 'Peristic'];
// const { team1, draw, team2 } = game.odds; //Error

const {
  odds: { team1, x: draw, team2 },
} = game;

// console.log(team1, draw, team2);

// for (const item of allPlayers.entries()) {
//   console.log(item);
// }

// for (const [i, el] of allPlayers.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day} : ${open}`);
}

console.log(restaurant.order?.(1, 1) ?? 'Method not exist');

const entries = Object.entries(restaurant.openingHours);
for (const [key, { open, close }] of entries) {
  console.log(key, open, close);
}
