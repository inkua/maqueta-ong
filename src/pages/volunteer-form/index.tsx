import VolunteerForm from "@Component/VolunteerForm";
import DATA from "data/ong";

const VolunteerFormPage = () => {
  return (
    <>
      <VolunteerForm imageForm={DATA.pages.volunteerForm.imageForm} />
    </>
  )
}

export default VolunteerFormPage;
