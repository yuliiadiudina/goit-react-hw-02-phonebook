import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	}

	handleChange = event => {
		this.setState({[event.currentTarget.name]: event.currentTarget.value});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({ 
			name: '', number: '' 
		});
	}

	render() {
		return (
			<form className={css.contactForm} onSubmit={this.handleSubmit}>
				<label className={css.label}>
					Name
					<input 
						type="text"
						name="name"
						className={css.input}
						onChange={this.handleChange}
						value={this.state.name}
						pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				  </label>
				  <label className={css.label}>
					Number
					<input
						type="tel"
						name="number"
						className={css.input}
						onChange={this.handleChange}
						value={this.state.number}
						pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
				  </label>
				<button type="submit" className={css.submitBtn}>Add contact</button>
			</form>
		);
	}	
}
