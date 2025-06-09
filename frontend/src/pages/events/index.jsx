import CategoryCard from '../../components/categoryCard';
import WhatsAppBtn from '../../components/whatsAppBtn';
import useEventsPage from '../../hooks/Pages_Hooks/useEventsPage';
import './index.css';

const EventPage = () => {
  const { dropSubMenu } = useEventsPage();

  return (
    <>
    <h1 className='title'>Taquizas y Banquetes</h1>
    <div className='eventsContainer'>
      <div>
        <div onClick={()=>{dropSubMenu('guisados')}}>
          <CategoryCard click={false} title='Cazuelas de Guisados' url='https://www.taquizascancun.com/wp-content/uploads/2020/12/cazuelas-de-guisados-1.jpg'/>
        </div>
        <section className='eventSubMenu guisados inactive'>
          <h2 className='title'>Cazuelas de Guisados</h2>
          <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
          <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
        </section>
      </div>
      <div>
        <div onClick={()=>{dropSubMenu('guarniciones')}}>
          <CategoryCard click={false} title='Cazuelas de Guarniciones' url='https://i.ytimg.com/vi/8rHh39P5TrY/sddefault.jpg?v=5ed03668'/>
        </div>
        <section className='eventSubMenu guarniciones inactive'>
          <h2 className='title'>Cazuelas de Guarniciones</h2>
          <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
          <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
        </section>
      </div>
      <div>
        <div onClick={()=>{dropSubMenu('banquetes')}}>
          <CategoryCard click={false} title='Cenas Navideñas' url='cenaNavidad.jpg'/>
        </div>
        <section className='eventSubMenu banquetes inactive'>
          <h2 className='title'>Cenas Navideñas</h2>
          <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
          <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
        </section>
      </div>
      <div>
        <div onClick={()=>{dropSubMenu('terraza')}}>
          <CategoryCard click={false} title='Renta nuestra terraza' url='https://lh3.googleusercontent.com/p/AF1QipPbX19ll654iFlOx7fFTvXIl_zcWuim03iMxzdT=s680-w680-h510'/>
        </div>
        <section className='eventSubMenu terraza inactive'>
          <h2 className='title'>Renta nuestra terraza</h2>
          <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
          <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
        </section>
      </div>
    </div>
    </>
    
  );
};

export default EventPage;
