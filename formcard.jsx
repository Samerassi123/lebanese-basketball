import React, { useState } from 'react';

const FormCard = ({ title, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({});
    e.target.reset();
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h3>{title}</h3>
      {fields.map((field, idx) => (
        <div key={idx} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              onChange={handleChange}
              required={field.required}
            >
              {field.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit" className="btn">
        {title}
      </button>
      {submitted && (
        <div className="success-message">
          ✅ Successfully submitted!
        </div>
      )}
    </form>
  );
};

export default FormCard;