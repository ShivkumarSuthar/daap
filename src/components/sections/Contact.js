import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { COMPANY_INFO } from '../common/constant';

const serviceOptions = [
  'Web Development', 'UI/UX Design', 'SEO Optimization',
  'Digital Marketing', 'E-commerce Solutions', 'Mobile App Development'
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state

  const initialValues = { services: [], name: '', email: '', message: '' };

  const validationSchema = [
    Yup.object({ services: Yup.array().min(1, 'Please select at least one service') }),
    Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().required('Message is required')
    })
  ];

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true); // Show loader

    const emailParams = {
      from_name: values.name,
      from_email: values.email,
      selected_services: values.services.join(', '),
      message: values.message
    };

    emailjs
      .send(
        COMPANY_INFO.contact.service_id,  
        COMPANY_INFO.contact.template_id, 
        emailParams,                        
        COMPANY_INFO.contact.primary_key   
      )
      .then(() => {
        setTimeout(() => {
          setIsSubmitting(false); // Hide loader
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'We will get back to you soon.',
            confirmButtonColor: '#ff7e2e',
          });

          resetForm();
          setStep(1);
          setShowPopup(false);
        }, 1000);
      })
      .catch(() => {
        setIsSubmitting(false); 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Try again later.',
        });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section className='contact__section'>
      <div className='contact__container'>
        <div className='contact__left'>
          <h2 className='contact__title'>Connect with Us & Transform Your Ideas.</h2>
        </div>
        <div className='contact__right'>
          <p className='contact__description'>
            Have a project in mind? Our team at DAP Solutions is ready to bring your vision to life.
          </p>
          <button className='contact__button' onClick={() => setShowPopup(true)}>Start Conversation</button>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowPopup(false)}>✖</button>

            <div className="progress-bar">
              <div className={`progress-step ${step >= 1 ? 'active' : ''}`}></div>
              <div className={`progress-step ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`progress-step ${step === 3 ? 'active' : ''}`}></div>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema[step - 1]}
              onSubmit={step === 3 ? handleSubmit : () => setStep(step + 1)}
            >
              {({ values, setFieldValue, isValid }) => (
                <Form className="contact-form">
                  {step === 1 && (
                    <div className="form-step">
                      <h4>Let's Build Something Amazing! 🚀</h4>
                      <p>Tell us what you need help with, and we'll make it happen.</p>

                      <div className="services-grid">
                        {serviceOptions.map((service) => (
                          <div
                            key={service}
                            className={`service-card ${values.services.includes(service) ? 'selected' : ''}`}
                            onClick={() => {
                              const selected = values.services.includes(service);
                              setFieldValue(
                                'services',
                                selected
                                  ? values.services.filter((s) => s !== service)
                                  : [...values.services, service]
                              );
                            }}
                          >
                            {service}
                          </div>
                        ))}
                      </div>

                      <ErrorMessage name="services" component="div" className="error-message" />
                      <button type="button" disabled={!values.services.length} onClick={() => setStep(2)}>Next</button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="form-step">
                      <h4>Almost There! 🚀</h4>
                      <p>Tell us a bit more about yourself.</p>

                      <div className="input-group">
                        <label>Your Name</label>
                        <Field type="text" name="name" placeholder="Enter your full name" className="input-field" />
                        <ErrorMessage name="name" component="div" className="error-message" />
                      </div>

                      <div className="input-group">
                        <label>Your Email</label>
                        <Field type="email" name="email" placeholder="Enter your email address" className="input-field" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                      </div>

                      <div className="input-group">
                        <label>Your Message</label>
                        <Field as="textarea" name="message" placeholder="Write your message here..." className="input-field textarea" />
                        <ErrorMessage name="message" component="div" className="error-message" />
                      </div>

                      <div className="buttons">
                        <button type="button" className="back-btn" onClick={() => setStep(1)}>Back</button>
                        <button type="button" className="next-btn" disabled={!isValid} onClick={() => setStep(3)}>Next</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="form-step confirm-step">
                      <h3>🔍 Review & Confirm</h3>
                      <p>Please review your details before submitting.</p>

                      <div className="confirmation-box">
                        <p><strong>📌 Services Selected:</strong> {values.services.join(', ')}</p>
                        <p><strong>📝 Name:</strong> {values.name}</p>
                        <p><strong>📧 Email:</strong> {values.email}</p>
                        <p><strong>💬 Message:</strong> {values.message || "No message provided"}</p>
                      </div>

                      <div className="buttons">
                        <button type="button" className="back-btn" onClick={() => setStep(2)}>Back</button>
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
