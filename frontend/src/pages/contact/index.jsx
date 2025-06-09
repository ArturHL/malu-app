import './index.css';
import ContactCard from '../../components/contactCard';

const ContactPage = () => {
  return (
    <section className='contactSection'>
      <h1 className='title'>Contactanos</h1>
      <ContactCard locationEmbebbed='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.158247345842!2d-99.14876932397316!3d19.362299442920595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffb5575f3263%3A0xb90ede229e5a09f2!2sAntojitos%20Mal%C3%BA!5e0!3m2!1ses-419!2smx!4v1702248468433!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                   locationName='Portales Norte.'
                   adress='Bélgica 815 col. Portales Nte Del, Benito Juárez, 03300 CDMX'
                   phone1='55 5555 5555'
                   phone2='55 5555 5555'
                   whastappNumber='5532019274'/>
      <div>
        <h2 className='title'>Buscas algo mas?</h2>
        <p className='redirection'>Puedes ver nuestro menu completo <span onClick={()=>{location.href = '/menu'}}>Aqui</span></p>
        <button className='buttonB' onClick={()=>{location.href = '/reserves'}}>Reserva Ahora</button>
        <button className='buttonA' onClick={()=>{location.href = '/menu'}}>Haz un pedido</button>
      </div>
    </section>
  );
};

export default ContactPage;
