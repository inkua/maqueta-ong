import Card from '@Component/Card/Card';


const Contenido_Cards = [
  {
    titulo: "Our Values",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo delectus distinctio eligendi doloremque consequuntur deleniti recusandae ipsa animi? Temporibus impedit vitae eaque quam aspernatur aut quas. Accusamus, nostrum facilis."
  },
  {
    titulo: "What we support?",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo delectus distinctio eligendi doloremque consequuntur deleniti recusandae ipsa animi? Temporibus impedit vitae eaque quam aspernatur aut quas. Accusamus, nostrum facilis."
  }
]

const AboutUs = () => {
  return (
    <section className='h-50 d-flex p-5 gap-5 container container-sm container-md container-lg'>
      {
        Contenido_Cards.map((contenido) => {
          return(
            <Card {...contenido} />
          )
        })
      }
    </section>
  )
}

export default AboutUs
