import "../styles/index.scss"
import Recipes from "./Recipes"
import dog3 from "../images/dog3.png"
import dog2 from "../images/dog2.svg"

export default function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello react</h1>
        </section>
        <img src={dog3} alt="dog" width="250" />
        <img src={dog2} alt="dog" width="250" />
        <Recipes/>
      </main>   
    </>
  )
}
