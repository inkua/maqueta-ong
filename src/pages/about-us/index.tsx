import DATA from 'data/ong';
import Card from '@Component/Card/Card';


const Contenido_Cards = DATA.about_us;

const AboutUs = () => {
  return (
    <section className='h-50 d-flex p-5 gap-5 container container-sm container-md container-lg'>
      {
        Contenido_Cards.map((contenido) => {
          console.log(contenido);
          return(
            <Card key={contenido.id}
            title={contenido.titulo}
            text={contenido.texto} />
          )
        })
      }
    </section>
  )
}

export default AboutUs
