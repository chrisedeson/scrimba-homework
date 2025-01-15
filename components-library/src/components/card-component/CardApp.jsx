import cards_array from "./data"
import Card from "./Card"
import styles from './CardApp.module.css'

const array = cards_array.map((card, index) => {
  return (
    <Card
      key={index} 
      title={card.title}
      paragraph={card.paragraph}
    />
  )
})


function CardApp() {

  return (
    <>
      <h1>CARDS</h1>

      <div className={styles.cards}>
        {array}
      </div>
    </>
  )
}

export default CardApp
