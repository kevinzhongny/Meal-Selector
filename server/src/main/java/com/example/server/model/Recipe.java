package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name="recipe_list")
public class Recipe {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String cuisine;

    @Column
    private String ingredient1;

    @Column
    private String ingredient2;

    @Column
    private String ingredient3;

    @Column
    private String ingredient4;

    @Column
    private String ingredient5;

    @Column
    private String url;

    public Recipe() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getIngredient1() {
        return ingredient1;
    }

    public void setIngredient1(String ingredient1) {
        this.ingredient1 = ingredient1;
    }

    public String getIngredient2() {
        return ingredient2;
    }

    public void setIngredient2(String ingredient2) {
        this.ingredient2 = ingredient2;
    }

    public String getIngredient3() {
        return ingredient3;
    }

    public void setIngredient3(String ingredient3) {
        this.ingredient3 = ingredient3;
    }

    public String getIngredient4() {
        return ingredient4;
    }

    public void setIngredient4(String ingredient4) {
        this.ingredient4 = ingredient4;
    }

    public String getIngredient5() {
        return ingredient5;
    }

    public void setIngredient5(String ingredient5) {
        this.ingredient5 = ingredient5;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
