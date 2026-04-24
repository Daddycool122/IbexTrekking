import React, { useState } from 'react';
import styles from './FaqAccordion.module.css';

export default function FaqAccordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <div className={styles.faq_container}>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`${styles.faq_item} ${openIndex === index ? styles.open : ''}`}
                >
                    <div className={styles.question} onClick={() => toggleOpen(index)}>
                        <span>{faq.question}</span>
                        <span className={styles.icon}>
                            {openIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    <div
                        className={styles.answer_wrapper}
                        style={{ maxHeight: openIndex === index ? '500px' : '0px' }}
                    >
                        <div className={styles.answer}>
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
