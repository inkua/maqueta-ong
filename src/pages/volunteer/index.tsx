import Card from '@Component/Card/Card';
import Hero from '@Component/Hero';
import styles from './volunteer.module.css'
import useContextData from 'hooks/useContextData';

const Volunteer = () => {
  const dataVolunteerPage = useContextData().pages.volunteer;
  const {
    dataHero,
    dataVolunteerDoes,
    dataObjectivesAndRequirements,
    dataExperiencesOfVolunteers
  } = dataVolunteerPage;

  return (
    <>
      <Hero data={dataHero} />
      <section className='sections-container'>
        <article className='article'>
          <h2 className='article-title'>{dataVolunteerDoes.title}</h2>
          <p className={`article-description ${styles.align__paragraph}`}>
            {dataVolunteerDoes.description}
          </p>
          <section className={`article-section ${styles.section__history}`}>
            <Card
              key={dataObjectivesAndRequirements.objetives.title}
              title={dataObjectivesAndRequirements.objetives.title}
              description={dataObjectivesAndRequirements.objetives.description}
            />
            <Card
              key={dataObjectivesAndRequirements.requirements.title}
              title={dataObjectivesAndRequirements.requirements.title}
              description={dataObjectivesAndRequirements.requirements.description}
            />
          </section>
        </article>
      </section>
    </>
  )
}

export default Volunteer
