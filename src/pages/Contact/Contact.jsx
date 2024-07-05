"use client";
import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'El nombre es requerido';
        if (!formData.email) {
            tempErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'El email no es válido';
        }
        if (!formData.message) tempErrors.message = 'El mensaje es requerido';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {

            setSuccessMessage('¡Formulario enviado con éxito!');

            setFormData({
                name: '',
                email: '',
                message: ''
            });

            setErrors({});
        } else {
            setSuccessMessage('');
        }
    };

    return (
        <section 
            className={styles.contactSection}
            id="contacto"
        >
            <h2 className={styles.contactHeader}>Contacto</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={styles.formInput}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        className={styles.formTextarea}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>
                <button type="submit" className={styles.submitButton}>Enviar</button>
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            </form>
        </section>
    )
}

export default Contact;
