"use server"

import { saveMeal } from "./meals"

function isInvalidText(text) {
  return !meal.title || meal.title.trim() === ""
}

// create a server function for form submission
export async function ShareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }

  //server side input validation
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid Input")
  }

  await saveMeal(meal)
}
