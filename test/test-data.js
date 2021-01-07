const users = [
  {id: 1,
  name: "Saige O'Kon",
  pantry: [{id: 1,
  amount: 2},

  {id: 2,
  amount: 5},

  {id: 3,
  amount: 3}],
  favoriteRecipes: [],
  recipesToCook: []
}]

const recipeData = [
  {id: 1,
  name: 'Chicken Parmesan',
  image:'www.example.com/image.jpg',
  tags: ['dinner', 'lunch', 'main dish'],
  ingredients: [{id: 1,
  quantity: {
    amount: 1,
    unit: 'large'
  }},

  {id: 5,
  quantity: {
    amount: .25,
    unit: 'c'
  }}],
  instructions: ['step one', 'second step', 'a third step', 'anotha one']},

  {id: 2,
  name: 'Somen',
  image: 'www.example.com/image.jpg',
  tags: ['dinner', 'lunch', 'side dish'],
  ingredients: [{id: 2,
  quantity: {
    amount: 1,
    unit: 'lb'
  }},

  {id: 3,
  quantity: {
    amount: 1,
    unit: 'tbs'
  }}],
  instructions: ['step one', 'second step', 'a third step', 'anotha one']},

  {id: 3,
  name: 'Yakisoba',
  image: 'www.example.com/image.jpg',
  tags: ['lunch', 'side dish'],
  ingredients: [{id: 2,
  quantity: {
    amount: 1,
    unit: 'lb'
  }},

  {id: 4,
  quantity: {
    amount: .25,
    unit: 'c'
  }}],
  instructions: ['step one', 'second step', 'a third step', 'anotha one']}

]


const ingredients = [
  {
    id: 1,
    name: 'chicken breast',
    estimatedCostInCents: 10
  },

  {
    id: 2,
    name: 'noodles',
    estimatedCostInCents: 20
  },

  {
    id: 3,
    name: 'soy sauce',
    estimatedCostInCents: 30
  },

  {
    id: 4,
    name: 'oil',
    estimatedCostInCents: 40
  },

  {
    id: 5,
    name: 'parmesan',
    estimatedCostInCents: 50
  }
]

export {users, recipeData, ingredients};
