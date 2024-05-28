import Link from "next/link"
import { Suspense } from "react"

import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"

export async function Meals() {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
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
        <Suspense
          fallback={<p className={classes.loading}>Loading Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
