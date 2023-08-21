import useContextData from 'hooks/useContextData';
import Card from '@Component/Card/Card';
import Hero from '@Component/Hero';
import BtnBeAVolunteer from '@Component/Button';
import styles from './volunteer.module.css'

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
          <h2 className={styles.align__title}>{dataVolunteerDoes.title}</h2>
          <p className={`article-description ${styles.align__paragraph}`}>
            {dataVolunteerDoes.description}
          </p>
          <section className={`article-section ${styles.objectives__requirements}`}>
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
        <div>
          <h2 className={styles.align__title}>{dataExperiencesOfVolunteers.title}</h2>
          <article className={`article-section ${styles.experiences}`}>
            {
              dataExperiencesOfVolunteers.experiences.map((experience) => (
                <Card
                  key={experience.title}
                  title={experience.title}
                  description={experience.description}
                  widthCard='320px'
                />
              ))
            }
          </article>
        </div>
        <BtnBeAVolunteer title='Be a volunteer' url='/volunteer-form' typeArrow={'\u{1F86A}'} />
      </section>
    </>
  )
}

export default Volunteer
