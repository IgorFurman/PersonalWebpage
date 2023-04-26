import { useState } from 'react';

export const FormValidator = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  return {
    handleInputChange,
    handleSubmit,
    errors,
  };
};


