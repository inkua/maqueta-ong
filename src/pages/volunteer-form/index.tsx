import useContextData from "hooks/useContextData";
import Hero from "@Component/Hero";
import VolunteerForm from "@Component/VolunteerForm";

const VolunteerFormPage = () => {
  const dataVolunteerFormPage = useContextData().pages.volunteerForm;
  const { dataHero, imageForm, emailToReceiveData } = dataVolunteerFormPage;

  return (
    <>
      <Hero data={dataHero} />
      <VolunteerForm imageForm={imageForm} emailToReceiveData={emailToReceiveData} />
    </>
  )
}

export default VolunteerFormPage;
