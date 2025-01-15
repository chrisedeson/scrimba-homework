import data from "./data.mjs"
import Testimonial from "./Testimonial"
import './TestimonialApp.css'


const testimonial_array = data.map((testimony, index) => {
  return(
    <Testimonial key={index}
      img={testimony.img} 
      image={testimony.image} 
      alt={testimony.alt} 
      name={testimony.name} 
      writing={testimony.writing} 
      company={testimony.company} 
    />
  )
})


function TestimonialApp() {

  return (
    <>
      {testimonial_array}
    </>
  )
}

export default TestimonialApp
