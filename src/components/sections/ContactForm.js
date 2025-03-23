import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const serviceOptions = [
  'Web Development',
  'UI/UX Design',
  'SEO Optimization',
  'Digital Marketing',
  'E-commerce Solutions',
  'Mobile App Development'
];

const ContactForm = () => {
  const [step, setStep] = useState(1);

  const initialValues = {
    services: [],
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = [
    // Step 1 Validation (At least one service must be selected)
    Yup.object({
      services: Yup.array().min(1, 'Please select at least one service')
    }),
    // Step 2 Validation (Personal details)
    Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().required('Message is required')
    })
  ];

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        values,
        'YOUR_USER_ID'
      )
      .then(() => {
        alert('Message sent successfully!');
        resetForm();
        setStep(1);
      })
      .catch(() => {
        alert('Failed to send message. Try again later.');
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section className='contact__section'>
      <div className='contact__container'>
        <h2 className='contact__title'>Connect with Us & Transform Your Ideas.</h2>

        {/* Progress Bar */}
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
                  <h3>Select the Services You Need</h3>
                  {serviceOptions.map((service) => (
                    <label key={service} className="checkbox-label">
                      <Field
                        type="checkbox"
                        name="services"
                        value={service}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setFieldValue(
                            'services',
                            checked
                              ? [...values.services, service]
                              : values.services.filter((s) => s !== service)
                          );
                        }}
                      />
                      {service}
                    </label>
                  ))}
                  <ErrorMessage name="services" component="div" className="error-message" />
                  <button type="button" disabled={!isValid} onClick={() => setStep(2)}>Next</button>
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <h3>Personal Details</h3>
                  <Field type="text" name="name" placeholder="Your Name" />
                  <ErrorMessage name="name" component="div" className="error-message" />
                  <Field type="email" name="email" placeholder="Your Email" />
                  <ErrorMessage name="email" component="div" className="error-message" />
                  <Field as="textarea" name="message" placeholder="Your Message" />
                  <ErrorMessage name="message" component="div" className="error-message" />

                  <div className="buttons">
                    <button type="button" onClick={() => setStep(1)}>Back</button>
                    <button type="button" disabled={!isValid} onClick={() => setStep(3)}>Next</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step">
                  <h3>Confirm Your Details</h3>
                  <p><strong>Services Selected:</strong> {values.services.join(', ')}</p>
                  <p><strong>Name:</strong> {values.name}</p>
                  <p><strong>Email:</strong> {values.email}</p>
                  <p><strong>Message:</strong> {values.message}</p>

                  <div className="buttons">
                    <button type="button" onClick={() => setStep(2)}>Back</button>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
