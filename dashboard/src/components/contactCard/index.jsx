import './index.css';
import PropTypes from 'prop-types';

import { PiPhoneFill } from "react-icons/pi";
import WhatsAppBtn from '../whatsAppBtn';

const ContactCard = ({locationEmbebbed, locationName, adress, phone1, phone2, whastappNumber}) => {
  return (
    <div className='locationContainer'>
      <div className='locationMap' dangerouslySetInnerHTML={{ __html: locationEmbebbed }}>
      </div>
      <div className='locationInfo'>
        <h2>{locationName}</h2>
        <p>
          {adress}
        </p>
        <div className='contactInfo'>
          <p className='contactOption'>
            <PiPhoneFill/> Tel: {phone1}
          </p>
          <p className='contactOption'>
            <PiPhoneFill/> Tel: {phone2}
          </p>
          <WhatsAppBtn phone={whastappNumber} text='Chatea con nosotros'/>
      </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  locationEmbebbed: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  phone1: PropTypes.string.isRequired,
  phone2: PropTypes.string.isRequired,
  whastappNumber: PropTypes.string.isRequired,
}

export default ContactCard;
