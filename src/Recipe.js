import React from 'react'
import style from './recipe.module.css';

const Recipe = ({title, originalUrl, image, ingredients, healthLabels}) => {
    return(
        <div className={style.recipe}>
            <h2 className={style.title}>{title}</h2>
            <img className={style.image} src={image} alt="" />
            <div className={style.ingredients}>
                <ul>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul> 
            </div>
           
            <a href={originalUrl} className={style.originalUrl}>View recipe</a>
            <p className={style.healthLabels}><strong>Health Labels: </strong>{healthLabels}</p>
        </div>
    );
}

export default Recipe;