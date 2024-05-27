import Link from "next/link"

import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid"

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favoutite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/link">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid
          meals={[
            {
              title: "Spaghetti Carbonara",
              slug: "spaghetti-carbonara",
              image: "/images/meals/spaghetti-carbonara.jpg",
              summary:
                "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
              creator: "Chef Mario",
            },
            {
              title: "Chicken Tikka Masala",
              slug: "chicken-tikka-masala",
              image: "/images/meals/chicken-tikka-masala.jpg",
              summary:
                "A popular Indian curry dish made with marinated chicken in a spiced tomato sauce.",
              creator: "Chef Anjali",
            },
            {
              title: "Sushi Platter",
              slug: "sushi-platter",
              image: "/images/meals/sushi-platter.jpg",
              summary:
                "A variety of fresh sushi rolls, nigiri, and sashimi served with soy sauce and wasabi.",
              creator: "Chef Hiro",
            },
            {
              title: "Vegan Buddha Bowl",
              slug: "vegan-buddha-bowl",
              image: "/images/meals/vegan-buddha-bowl.jpg",
              summary:
                "A nutritious bowl of quinoa, roasted vegetables, avocado, and tahini dressing.",
              creator: "Chef Maya",
            },
          ]}
        />
      </main>
    </>
  )
}
