"use server"

import { revalidatePath } from "next/cache"
import { saveMeal } from "./meals"

function isInvalidText(text) {
  return !meal.title || meal.title.trim() === ""
}

// create a server function for form submission
export async function ShareMeal(prevState, formData) {
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
    return {
      message: "Invalid input",
    }
  }

  await saveMeal(meal)
  revalidatePath("/meals")
  redirect("/meals")
}
