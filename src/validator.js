import { useState } from 'react';
import axios from 'axios';

export const FormValidator = (validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [sendMessage, setSendMessage] = useState(null);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setSendMessage(null)
		const validationErrors = validate(values);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length === 0) {
			try {
				const response = await axios.post(
					'https://formspree.io/f/xleyrnaq',
					values
				);
				if (response.status === 200) {
					setSendMessage('Message sent successfully');
				}
			} catch (error) {
				setSendMessage('Error sending message, please try again later of send it directly to igorfurman555@gmail.com'); 
			}
		}
	};

	return {
		handleInputChange,
		handleSubmit,
		errors,
		sendMessage,
	};
};
