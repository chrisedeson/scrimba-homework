import cards_array from "./data"
import Card from "./Card"

const array = cards_array.map((card, index) => {
  return (
    <Card
      key={index} 
      title={card.title}
      paragraph={card.paragraph}
    />
  )
})


function App() {

  return (
    <>
      <h1>CARDS</h1>

      <div className="cards">
        {array}
      </div>
    </>
  )
}

export default App
