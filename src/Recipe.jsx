import React, { useState } from "react";
import style from "./recipe.module.css";
import { motion } from "framer-motion";

function Recipe({ title, image, ingredients }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      style={{
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
      }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className={style.recipe}
    >
      <motion.h3 layout="position">{title}</motion.h3>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <img className={style.image} src={image} alt="..." />
            <h4>Recipe 🍱</h4>
          <ol className={style.ol}>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Recipe;
