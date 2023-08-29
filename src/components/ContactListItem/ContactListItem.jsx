import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li className={css.listItem} key={contact.id}>
      {contact.name}: {contact.number}
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem