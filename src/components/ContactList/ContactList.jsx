import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import  ContactListItem  from 'components/ContactListItem/ContactListItem'

const ContactList = ({ filtredСontacts, deleteContact }) => {
	return (
		<ul className={css.contactList}>
			{filtredСontacts.map(contact => {
				return <ContactListItem 
				key={contact.id}
				contact={contact}
				deleteContact={deleteContact}/>
			}
			)}
		</ul>
	)
}

ContactList.propTypes = {
	filtredСontacts: PropTypes.array.isRequired, 
	deleteContact: PropTypes.func.isRequired,
};

export default ContactList