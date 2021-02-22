import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recipes() {
    const [recipes, setRecipes] = useState(null);

    async function getRecipes() {
        try {
            const res = await axios.get('http://localhost:8080/recipes', {
                params: {
                    name: "Mapo Tofu"
                }
            });
            setRecipes(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    useEffect(() => {
        getRecipes();
    }, [])

    async function deleteRecipe(recipeId) {
        try {
            const res = await axios.delete('http://localhost:8080/recipes/' + recipeId);
            console.log(res.data);
            getRecipes();
        } catch (e) {
            console.error(e, e.message);
        }
    }

    return(
        <div>
            { recipes && recipes.map(recipe => <Recipe recipe= { recipe } deleteRecipe = { deleteRecipe } key= { recipe.id }/>)}
        </div>
    )
}

function Recipe({ recipe, deleteRecipe }) {
    return(
        <div>
            <form>
                <span>
                    <ul><b>Name:</b> { recipe.name }<br></br>
                    <b>Cuisine:</b> { recipe.cuisine }<br></br>
                    <b>Ingredients:</b> { recipe.ingredient1 }, { recipe.ingredient2 }, { recipe.ingredient3 }, { recipe.ingredient4 }, { recipe.ingredient5 }<br></br>
                    <a href={ recipe.url }>{ recipe.url }</a><br></br>
                    <button onClick={ () => deleteRecipe(recipe.id) }>Delete Recipe</button></ul>
                </span>
            </form>
        </div>
    )
}

export default Recipes;