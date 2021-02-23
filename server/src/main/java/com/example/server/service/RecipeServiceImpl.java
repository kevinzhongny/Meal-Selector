package com.example.server.service;

import com.example.server.model.Recipe;
import com.example.server.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeRepository recipeRepository;


    @Override
    public Iterable<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

//    @Override
//    public Recipe getRecipeById(Long id) {
//        return recipeRepository.findById(id).get();
//    }

    @Override
    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public Recipe updateRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public HttpStatus deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
