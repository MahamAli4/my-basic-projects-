const container = document.querySelector('.container')
const ingrideintsInput = document.querySelector('.ingrideints')
const searchBtn = document.getElementById('btn')
const receipeResult = document.querySelector('.receipeResult')
const apiKey = '0404fbf1b718492481a85346c130e757'

searchBtn.addEventListener("click", () => {
    const ingrideints = ingrideintsInput.value.trim()
    fetchResponse(ingrideints);
})

const fetchResponse = async (ingrideints) => {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingrideints}&number=10&apiKey=${apiKey}`);
        const recipes = await response.json()
        console.log(recipes);
        displayRecipes(recipes)
    } catch (error) {
        console.log(error);
    }
}

const displayRecipes = (recipes) => {
    receipeResult.innerHTML = ""
    if (recipes.length === 0) {
        receipeResult.innerHTML = `<p class="text-danger">Recipe Not Found, Please Try Again...!</p>`;
        return;
    }
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement('div')
        recipeCard.classList.add("col-sm-6", "col-lg-4") // ✅ Bootstrap responsive columns
        recipeCard.innerHTML = `
        <div class="card h-100 text-center">
          <img src="${recipe.image}" class="card-img-top" alt="Food" />
          <div class="card-body">
            <p class="card-text">${recipe.title}</p>
          </div>
          <div class="card-footer bg-white border-0">
            <button class="btn btn-success w-100">Save to Favorite</button>
          </div>
        </div>
        `
        receipeResult.appendChild(recipeCard)
    });
}
