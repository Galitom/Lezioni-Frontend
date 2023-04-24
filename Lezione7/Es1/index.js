const recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cumin", "cinnamon", "cocoa"],
};

console.log(recipe.title);
console.log("Servings: " + recipe.servings);
console.log("Ingredients:");
recipe.ingredients.forEach((element) => {
    console.log(element);
});
/*
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}
*/

const books = [
    {
        title: "In cucina con Ciccio",
        author: "Cicciogamer89",
        alreadyRead: false,
    },
    {
        title: "Fortnite Trucchi e Segreti",
        author: "Cicciogamer89",
        alreadyRead: true,
    },
];

for (let i = 0; i < books.length; i++) {
    const bookInfo = books[i].title + '" by ' + books[i].author;
    if (books[i].alreadyRead) {
        console.log('You already read "' + bookInfo);
    } else {
        console.log('You still need to read "' + bookInfo);
    }
}
