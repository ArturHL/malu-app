import './index.css'

import { PiUserCircleDuotone } from "react-icons/pi";
import ContactCard from '../../components/contactCard/';
import useVariableRenderMenu from '../../hooks/Pages_Hooks/homePage/useVariableRenderMenu';

function HomePage() {
  const {variableRender} = useVariableRenderMenu();
  return (
    <>
      <section className='principalSection'>
        <h1>El mejor Pozole de CDMX</h1>
        <p>
          Con mas de 30 años de experiencia preparando este delicioso
          platillo, te ofrecemos el mejor sabor y calidad en cada uno de
          nuestros productos.
        </p>
      </section>
      <section className='promoSlider'>
        <h2 className='title'>¡Promociones!</h2>
        <div className='promoContainer'>
          <img src='Screenshot 2023-11-29 011326.png' alt='promo' />
        </div>
      </section>
      <section className='menuSection'>
        <h2 className='title'>Menú</h2>
        <div className='menuContainer'>
          {variableRender()}
        </div>
        <p className='redirection'>Puedes ver nuestro menu completo <a href="/menu"><span>Aqui</span></a></p>
      </section>
      <section className='reviewsSection'>
        <h2 className='title'>Lo que dicen nuestros clientes</h2>
        <div className='reviewsContainer'>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='locationSection'>
        <h2 className='title'>Ubicación y Contacto</h2>
        <ContactCard locationEmbebbed='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.158247345842!2d-99.14876932397316!3d19.362299442920595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffb5575f3263%3A0xb90ede229e5a09f2!2sAntojitos%20Mal%C3%BA!5e0!3m2!1ses-419!2smx!4v1702248468433!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                     locationName='Portales Norte.'
                     adress='Bélgica 815 col. Portales Nte Del, Benito Juárez, 03300 CDMX'
                     phone1='55 5555 5555'
                     phone2='55 5555 5555'
                     whastappNumber='5532019274'/>
      </section>
    </>
  )
}

export default HomePage