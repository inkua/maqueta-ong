import Hero from "@Component/Hero";
import VolunteerForm from "@Component/VolunteerForm";
import DATA from "data/ong";

const VolunteerFormPage = () => {
  return (
    <>
      <Hero data={DATA.pages.volunteerForm.dataHero} />
      <VolunteerForm imageForm={DATA.pages.volunteerForm.imageForm} />
    </>
  )
}

export default VolunteerFormPage;
