import { useState } from 'react';
import Image from 'next/image';
import countriesAndSubdivissions from "data/countries_and_subdivissions.json";
import styles from './VolunteerForm.module.css';

type FormProps = {
  imageForm: string;
  emailToReceiveData: string;
}

const VolunteerForm = ({ imageForm, emailToReceiveData }: FormProps) => {
  const [countries] = useState(Object.keys(countriesAndSubdivissions));
  const [regions, setRegions] = useState([]);
  const [message, setMessage] = useState(""); // state to show a message if the mail was sent
  const [isError, setIsError] = useState(false); // state to know if it's a error message

  const updateRegions = (countrie: string) => {
    countriesAndSubdivissions[countrie] ?
      setRegions(countriesAndSubdivissions[countrie].subdivisions) :
      setRegions([]);
  };

  const showMessage = (message: string, error = false) => {
    setMessage(message);
    if (error) setIsError(true);
    window.setTimeout(() => {
      setMessage("");
      setIsError(false);
    }, 10000);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData),
    };

    e.currentTarget.reset(); //reset form

    try {
      const response = await fetch(`https://formsubmit.co/${emailToReceiveData}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }); // send the form data to the email received

      if (response.ok) {
        showMessage("Your information has been sent."); //show a message
      } else {
        throw new Error("The data could not be sent.")
      }
    } catch (error) {
      showMessage(error.message, true); //show a error message
    }
  };

  //calculates the minimum date to be a volunteer, as a test, 12 years old
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear() - 12, currentDate.getMonth(), currentDate.getDate()).toISOString().split('T')[0];

  return (
    <section id='volunteer_form' className={styles.section__form}>
      <h2 className={styles.title}>Complete the form to join</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <input
            className={styles.field__input}
            type="text"
            name="name"
            placeholder='Name'
            required
          />
          <Image src="/images/person.svg" alt='person icon' width={18} height={18} className={styles.field__icon} />
        </div>
        <div className={styles.field}>
          <input
            className={styles.field__input}
            type="date"
            name="birthdate"
            placeholder="Birthdate"
            max={minDate}
            required
          />
        </div>
        <div className={styles.field}>
          <input
            className={styles.field__input}
            type="email"
            name="email"
            placeholder='Email'
            required
          />
          <Image src="/images/mail.svg" alt='email icon' width={18} height={18} className={styles.field__icon} />
        </div>
        <div className={styles.field}>
          <select
            className={styles.field__select}
            name="country"
            onChange={(e) => updateRegions(e.target.value)}
            required
          >
            <option value="">Country</option>
            {countries.map((countrie) => (
              <option value={countrie} key={countrie}>{countrie}</option>
            ))}
          </select>
          <select
            className={styles.field__select}
            name="region"
            required>
            <option value="">Region</option>
            {regions.map((region) => (
              <option value={region} key={region}>{region}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <input
            className={styles.field__input}
            type="tel"
            name="phoneNumber"
            placeholder='Phone number'
            required
          />
          <Image src="/images/phone.svg" alt='phone icon' width={18} height={18} className={styles.field__icon} />
        </div>
        <div className={styles.field}>
          <label htmlFor="comment" className={styles.field__label}>Tell us why you want to join</label>
          <textarea
            className={styles.field__textarea}
            id='comment'
            name="comment"
            placeholder='Type a message'
            required
          />
        </div>
        {message.length > 0 &&
            <span className={`${!isError ? styles.form__message : styles["form__message-error"]}`}>
              {message}
            </span>}
        <button type="submit" className={`${styles.button} button-transition`}>Send request</button>
      </form>
      <div className={styles.container__image}>
        <Image
          className={styles.image__form}
          src={imageForm}
          alt='Volunteer Form'
          width={600}
          height={650}
        />
      </div>
    </section>
  );
};

export default VolunteerForm;
