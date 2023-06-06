import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './VolunteerForm.module.css';
import personIcon from 'assets/person.svg';
import emailIcon from 'assets/mail.svg';
import phoneIcon from 'assets/phone.svg';

type EventType = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

type ImageForm = {
  imageForm: string | StaticImageData;
}

const VolunteerForm = ({ imageForm } : ImageForm) => {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    email: '',
    country: '',
    region: '',
    phoneNumber: '',
    comment: ''
  });

  const handleInputChange = (event: EventType) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const cleanData = () => {
    setFormData({
      name: '',
      birthdate: '',
      email: '',
      country: '',
      region: '',
      phoneNumber: '',
      comment: ''
    });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    cleanData();
  };

  //calculates the minimum date to be a volunteer, as a test, 12 years old
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear() - 12, currentDate.getMonth(), currentDate.getDate()).toISOString().split('T')[0];

  return (
    <section className={styles.section__form}>
      <h2 className={styles.title}>Complete the form to join</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <input
            className={styles.field__input}
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Image src={personIcon} alt='person icon' width={18} className={styles.field__icon} />
        </div>
        <div className={styles.field}>
          <input
            className={styles.field__input}
            type="date"
            name="birthdate"
            placeholder="Birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Image src={emailIcon} alt='email icon' width={18} className={styles.field__icon} />
        </div>
        <div className={styles.field}>
          <select
            className={styles.field__select}
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
            <option value="">Country</option>
            <option value="opcion2">Opción 1</option>
            <option value="opcion3">Opción 2</option>
          </select>
          <select
            className={styles.field__select}
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            required>
            <option value="">Region</option>
            <option value="opcion2">Opción 1</option>
            <option value="opcion3">Opción 2</option>
          </select>
        </div>
        <div className={styles.field}>
          <input
            className={styles.field__input}
            type="tel"
            name="phoneNumber"
            placeholder='Phone number'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <Image src={phoneIcon} alt='phone icon' width={18} className={styles.field__icon} />
        </div>
        <div className={styles.field}>
          <label htmlFor="comment" className={styles.field__label}>Tell us why you want to join</label>
          <textarea
            className={styles.field__textarea}
            id='comment'
            name="comment"
            placeholder='Type a message'
            value={formData.comment}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className={`${styles.button} button-transition`}>Send request</button>
      </form>
      <Image
        className={styles.image__form}
        src={imageForm}
        alt='Volunteer Form'
        width={600}
        height={650}
      />
    </section>
  );
};

export default VolunteerForm;
