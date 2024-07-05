"use client";
import { useState } from 'react';
import styles from './Contact.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';

const Contact = () => {
  
    return (
        <section 
            className={styles.contactSection}
            id="contacto"
        >
            <h2 className={styles.contactHeader}>Contacto</h2>
            <ContactForm />
        </section>
    )
}

export default Contact;
