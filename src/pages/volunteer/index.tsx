import Card from '@Component/Card/Card';

const Contenido_Cards = [
  {
    titulo: "Our Objectives",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo delectus distinctio eligendi doloremque consequuntur deleniti recusandae ipsa animi? Temporibus impedit vitae eaque quam aspernatur aut quas. Accusamus, nostrum facilis."
  },
  {
    titulo: "Requirements",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo delectus distinctio eligendi doloremque consequuntur deleniti recusandae ipsa animi? Temporibus impedit vitae eaque quam aspernatur aut quas. Accusamus, nostrum facilis."
  }
]

const volunteerExperiences = [
  {
    name: "Name",
    experience: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa enim fugiat nobis quod blanditiis aliquid consequuntur ad, non voluptatum, delectus quasi eaque quidem eum perspiciatis quae laboriosam praesentium cumque dolore."
  },
  {
    name: "Name",
    experience: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa enim fugiat nobis quod blanditiis aliquid consequuntur ad, non voluptatum, delectus quasi eaque quidem eum perspiciatis quae laboriosam praesentium cumque dolore."
  },
  {
    name: "Name",
    experience: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa enim fugiat nobis quod blanditiis aliquid consequuntur ad, non voluptatum, delectus quasi eaque quidem eum perspiciatis quae laboriosam praesentium cumque dolore."
  }
]

const Volunteer = () => {
  return (
    <>
    <div>Volunteer</div>
    <section className='h-50 d-flex flex-nowrap flex-xxl-nowrap flex-xl-nowrap flex-md-wrap flex-sm-wrap flex-wrap p-5 my-5 gap-5 container container-sm container-md container-lg'>
      {
        Contenido_Cards.map((contenido) => {
          return(
            <Card {...contenido} />
          )
        })
      }
    </section>
    <section className='h-100 d-flex flex-column'>
      <h2 className='text-center py-5 my-5'>Experiences Of Our Volunteers</h2>
      <div className='h-100 d-flex p-5 my-5 gap-5 container container-sm container-md container-lg'>
      {
        volunteerExperiences.map((experiencias) => {
          return(
            <Card titulo={experiencias.name} texto={experiencias.experience} />
          )
        })
      }
      </div>
    </section>
    </>
  )
}

export default Volunteer
