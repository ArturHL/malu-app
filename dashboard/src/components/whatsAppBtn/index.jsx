import './index.css';

import { FaWhatsapp } from "react-icons/fa";
import PropTypes from 'prop-types';

const WhatsAppBtn = ({phone, text}) => {
  {/* https://wa.me/1XXXXXXXXXX */}
  const whastappNumber = phone;
  return (
    <a className='whatsAppChat' href={`https://wa.me/${whastappNumber}`}><FaWhatsapp/>{text}</a>
  );
};

WhatsAppBtn.propTypes = {
  phone: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default WhatsAppBtn;
