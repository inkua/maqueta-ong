import Card from '@Component/Card/Card';
import DATA from 'data/ong';

const Contenido_Cards = DATA.requeriments; //objetivos y requerimientos
const volunteerExperiences = DATA.experiences; // experiencias

const Volunteer = () => {
  return (
    <>
    <div>Volunteer</div>
    <section className='h-50 d-flex flex-nowrap flex-xxl-nowrap flex-xl-nowrap flex-md-wrap flex-sm-wrap flex-wrap p-5 my-5 gap-5 container container-sm container-md container-lg'>
      {
        Contenido_Cards.map((contenido) => {
          return(
            <Card key={contenido.id} {...contenido} />
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
            <Card key={experiencias.id} titulo={experiencias.name} texto={experiencias.experience} />
          )
        })
      }
      </div>
    </section>
    </>
  )
}

export default Volunteer
