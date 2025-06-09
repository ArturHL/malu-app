import './index.css'

import useProductCard from '../../hooks/Component_Hooks/useProductCard'
import { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useContext } from 'react';
import { ErrorContext } from '../../context/errorContext';
import AppButton from '../appButton';
import ErrorTicket from '../errorTicket';

function ProductDescription ({productId: id, editable, handleEditable}) {
  const [type, setType] = useState('')
  const [product, setProduct] = useState({})
  const [descriptionObject, setDescriptionObject] = useState([typeDescription(id)])
  const [activeMenuDescription, setActiveMenuDescription] = useState(-1)
  const {searchProduct, addProducts} = useProductCard()
  const { updateValueInput, addInput } = useContext(ErrorContext);

  function setButtonSuscription() {
    if (id == 1) {
      setType('pozole')
    }
    if (id == 3) {
      setType('pozoleCh')
    }
    if (id == 25) {
      setType('flautas')
    }
    if (id == 26) {
      setType('flautasAhogadas')
    }
    if (id == 35) {
      setType('quesadillaS')
    }
    if (id == 36) {
      setType('quesadillaC')
    }
    if (id == 37) {
      setType('quesadillaSP')
    }
    if (id == 38) {
      setType('quesadillaCP')
    }
    if (id == 40) {
      setType('pambazoG')
    }
    if (id == 42) {
      setType('pambazoGQ')
    }
    if (id == 43) {
      setType('sopeS')
    }
    if (id == 46) {
      setType('sopeSQ')
    }
    if (id == 44) {
      setType('sopeG')
    }
    if (id == 47) {
      setType('sopeGQ')
    }
    if (id == 45) {
      setType('sopeB')
    }
    if (id == 48) {
      setType('sopeBQ')
    }
  }

  function activeMenu(id) {
    activeMenuDescription == id ? setActiveMenuDescription(-1) : setActiveMenuDescription(id)
  }

  function typeDescription(id) {
    if(id == 1 || id == 3) {
      return ({
        Proteina: 'Maciza',
        Lechuga: false,
        Cebolla: false,
        Rabano: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if(id == 2 || id == 4) {
      return ({
        Lechuga: false,
        Rabano: false,
        Cebolla: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if(id == 15) {
      return ({
        Aguacate: false,
        Chile: false,
        Chicharron: false,
        Crema: false,
        QuesoManchego: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if(id == 12) {
      return ({
        Chile: false,
        Cilantro: false,
        Cebolla: false,
        Aguacate: false,
        Arroz: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if(id == 13) {
      return ({
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 15 && id < 22) {
      return ({
        Cebolla: false,
        Cilantro: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 21 && id < 25){
      return ({
        Frijoles: false,
        Lechuga: false,
        Crema: false,
        QuesoRallado: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 24 && id < 27) {
      return ({
        Relleno: '',
        Lechuga: false,
        Crema: false,
        QuesoRallado: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 26 && id < 31) {
      return ({
        Cebolla: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 30 && id < 35) {
      return ({
        Cebolla: false,
        Cilantro: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 35 || id == 37) {
      return ({
        Coccion: '',
        Guisado: '',
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 36 || id == 38) {
      return ({
        Coccion: '',
        Guisado: '',
        Guisado2: '',
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 39 || id == 41) {
      return ({
        Lechuga: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 40 || id == 42) {
      return ({
        Guisado: '',
        Lechuga: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 42 && id < 49 && id != 44 && id != 47) {
      return ({
        Coccion: '',
        Frijoles: false,
        Lechuga: false,
        Cebolla: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 44 || id == 47) {
      return ({
        Coccion: '',
        Guisado: '',
        Frijoles: false,
        Lechuga: false,
        Cebolla: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
  }

  function descriptionListener(e, key, type) {
    const newDescription = [...descriptionObject]
    if (type == 'Proteina') {
      newDescription[key].Proteina = e.target.value
      updateValueInput(e.target.value, `requiredDescription${key === 0 ? '' : key}`, 'pozole')
    }
    if (type == 'Extras') {
      newDescription[key].Extras[e.target.previousSibling.textContent] = e.target.checked
    }
    if (type == 'SalsaVerde') {
      newDescription[key].Salsa.Verde = e.target.checked
    }
    if (type == 'SalsaRoja') {
      newDescription[key].Salsa.Roja = e.target.checked
    }
    if (type == 'Limones') {
      newDescription[key].Limones = e.target.checked
    }
    if (type == 'Aguacate') {
      newDescription[key].Aguacate = e.target.checked
    }
    if (type == 'Chile') {
      newDescription[key].Chile = e.target.checked
    }
    if (type == 'Chicharron') {
      newDescription[key].Chicharron = e.target.checked
    }
    if (type == 'Crema') {
      newDescription[key].Crema = e.target.checked
    }
    if (type == 'Manchego') {
      newDescription[key].QuesoManchego = e.target.checked
    }
    if (type == 'Cilantro') {
      newDescription[key].Cilantro = e.target.checked
    }
    if (type == 'Cebolla') {
      newDescription[key].Cebolla = e.target.checked
    }
    if (type == 'Arroz') {
      newDescription[key].Arroz = e.target.checked
    }
    if (type == 'QuesoRallado') {
      newDescription[key].QuesoRallado = e.target.checked
    }
    if (type == 'Frijoles') {
      newDescription[key].Frijoles = e.target.checked
    }
    if (type == 'Lechuga') {
      newDescription[key].Lechuga = e.target.checked
    }
    if (type == 'Rabano') {
      newDescription[key].Rabano = e.target.checked
    }
    if (type == 'Relleno') {
      newDescription[key].Relleno = e.target.value
      updateValueInput(e.target.value, `requiredDescription${key === 0 ? '' : key}`, `${`flautas${product.id === 25 ? '' : 'Ahogadas'}`}`)
    }
    if (type == 'Coccion') {
      newDescription[key].Coccion = e.target.value
      updateFunctionsByInput(type, e.target.value, key)
    }
    if (type == 'Guisado') {
      newDescription[key].Guisado = e.target.value
      updateFunctionsByInput(type, e.target.value, key)
    }
    if (type == 'Guisado2') {
      newDescription[key].Guisado2 = e.target.value
      updateFunctionsByInput(type, e.target.value, key)
    }
    setDescriptionObject(newDescription)
  }

  function updateFunctionsByInput(inputType, value, key) {
    if (inputType == 'Coccion') {
      updateValueInput(value, `${type}${key === 0 ? '' : key}.coccion`, `${type}`)
    } 
    if (inputType == 'Guisado') {
      updateValueInput(value, `${type}${key === 0 ? '' : key}.relleno`, `${type}`)
    }
    if (inputType == 'Guisado2') {
      updateValueInput(value, `${type}${key === 0 ? '' : key}.relleno2`, `${type}`)
    }
  }

  function handleMenu(id, key) {

    function extrasMenu() {
      return (
        <>
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
          </ul>
        </>
      )
    }

    function salsaMenu() {
      return (
        <>
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
            </li>
          </ul>
        </>
      )
    }

    function modificadoresMenu(platillo) {
      const modificadores = {
        Lechuga: false,
        Cebolla: false,
        Cilantro: false,
        QuesoRallado: false,
        Crema: false,
        Rabano: false,
        Chile: false,
        Aguacate: false,
        Chicharron: false,
        QuesoManchego: false,
        Arroz: false,
        Frijoles: false,
      }
      if (platillo == 'Pozole') {
        modificadores.Lechuga = true
        modificadores.Cebolla = true
        modificadores.Rabano = true
      }
      if (platillo == 'SopaTortilla') {
        modificadores.Aguacate = true
        modificadores.Chile = true
        modificadores.Chicharron = true
        modificadores.Crema = true
        modificadores.QuesoManchego = true
      }
      if (platillo == 'Ranchero') {
        modificadores.Chile = true
        modificadores.Cilantro = true
        modificadores.Cebolla = true
        modificadores.Aguacate = true
        modificadores.Arroz = true
      }
      if (platillo == 'Gorditas') {
        modificadores.Cebolla = true
        modificadores.Cilantro = true
        modificadores.QuesoRallado = true
        modificadores.Crema = true
      }
      if (platillo == 'Tostadas') {
        modificadores.Frijoles = true
        modificadores.Lechuga = true
        modificadores.Crema = true
        modificadores.QuesoRallado = true
      }
      if (platillo == 'Flautas') {
        modificadores.Lechuga = true
        modificadores.Crema = true
        modificadores.QuesoRallado = true
      }
      if (platillo == 'Enchiladas') {
        modificadores.Cebolla = true
        modificadores.QuesoRallado = true
        modificadores.Crema = true
      }
      if (platillo == 'Chilaquiles') {
        modificadores.Cebolla = true
        modificadores.Cilantro = true
        modificadores.QuesoRallado = true
        modificadores.Crema = true
      }
      if (platillo == 'Pambazo') {
        modificadores.Lechuga = true
        modificadores.QuesoRallado = true
        modificadores.Crema = true
      }
      if (platillo == 'Sope') {
        modificadores.Cebolla = true
        modificadores.Frijoles = true
        modificadores.QuesoRallado = true
        modificadores.Crema = true
      }

      return (
        <>
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li className={modificadores.Lechuga ? '' : 'inactive'}>
              <p>Lechuga</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Lechuga')}}/>
            </li>
            <li className={modificadores.Cebolla ? '' : 'inactive'}>
              <p>Cebolla</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cebolla')}}/>
            </li>
            <li className={modificadores.Cilantro ? '' : 'inactive'}>
              <p>Cilantro</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cilantro')}}/>
            </li>
            <li className={modificadores.QuesoRallado ? '' : 'inactive'}>
              <p>Queso Rallado</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
            </li>
            <li className={modificadores.Crema ? '' : 'inactive'}>
              <p>Crema</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
            </li>
            <li className={modificadores.Rabano ? '' : 'inactive'}>
              <p>Rabano</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Rabano')}}/>
            </li>
            <li className={modificadores.Chile ? '' : 'inactive'}>
              <p>Chile</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Chile')}}/>
            </li>
            <li className={modificadores.Aguacate ? '' : 'inactive'}>
              <p>Aguacate</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Aguacate')}}/>
            </li>
            <li className={modificadores.Chicharron ? '' : 'inactive'}>
              <p>Chicharron</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Chicharron')}}/>
            </li>
            <li className={modificadores.QuesoManchego ? '' : 'inactive'}>
              <p>Queso Manchego</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Manchego')}}/>
            </li>
            <li className={modificadores.Arroz ? '' : 'inactive'}>
              <p>Arroz</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Arroz')}}/>
            </li>
            <li className={modificadores.Frijoles ? '' : 'inactive'}>
              <p>Frijoles</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Frijoles')}}/>
            </li>
          </ul>
        </>
      )
    }

    // Pozole Menu
    if(id == 1 || id == 3) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pozole {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <div className={`errorMenuFormDescription ${activeMenuDescription == key ? 'inactive' : ''}`}>
            <ErrorTicket type={`requiredDescription${key === 0 ? '' : key}`} form={id === 1 ? 'pozole' : 'pozoleCh'}/>
          </div>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          <h4>Elige tu Proteina 🥩</h4>
          <ul>
            <li>
              <p>Maciza</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Maciza'}/>
            </li>
            <li>
              <p>Cabeza</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Cabeza'}/>
            </li>
            <li>
              <p>Pollo</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Pollo'}/>
            </li>
            <li>
              <p>Surtido</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Surtido'}/>
            </li>
            <li>
              <p>Mixto</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Mixto'}/>
            </li>
          </ul>
          <ErrorTicket type={`requiredDescription${key === 0 ? '' : key}`} form={id === 1 ? 'pozole' : 'pozoleCh'}/>
          <br />
          {modificadoresMenu('Pozole')}
          <br />
          {extrasMenu()}
          </section>
        </>
      )
    }
    // Pozole sin carne Menu
    if(id == 2 || id == 4) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pozole sin Maiz {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          {modificadoresMenu('Pozole')}
          <br />
          {extrasMenu()}
          </section>
        </>
      )
    }
    // Sopa de Tortilla Menu
    if(id == 15) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Sopa de Tortilla {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            {modificadoresMenu('SopaTortilla')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
        
      )
    }
    // Consome ranchero Menu
    if (id == 12) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Consome Ranchero {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            {modificadoresMenu('Ranchero')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Consome de Pollo Menu
    if (id == 13) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Caldo de Pollo {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Gorditas Menu
    if (product.category == 3){
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Gordita {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          {modificadoresMenu('Gorditas')}
          <br />
          {salsaMenu()}
          <br />
          {extrasMenu()}
          </section>
        </>
      )
    }
    // Tostadas Menu
    if (product.category == 4){
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Tostada {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            {modificadoresMenu('Tostadas')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Flautas Menu
    if (product.category == 5) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Flautas {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <div className={`errorMenuFormDescription ${activeMenuDescription == key ? 'inactive' : ''}`}>
            <ErrorTicket type={`requiredDescription${key === 0 ? '' : key}`} form={id === 25 ? 'flautas' : id === 26 ? 'flautasAhogadas' : ''}/>
          </div>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Rellenas de? 🍗</h4>
            <ul>
              <li>
                <p>Pollo</p>
                <input type="radio" name={`relleno${key}`} value={'Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
              <li>
                <p>Res</p>
                <input type="radio" name={`relleno${key}`} value={'Res'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`relleno${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
              <li>
                <p>Surtidas</p>
                <input type="radio" name={`relleno${key}`} value={'Surtidas'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
            </ul>
            <ErrorTicket type={`requiredDescription${key === 0 ? '' : key}`} form={id === 25 ? 'flautas' : id === 26 ? 'flautasAhogadas' : ''}/>
            <br />
            {modificadoresMenu('Flautas')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Enchiladas Menu
    if (product.category == 6) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Enchiladas {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            {modificadoresMenu('Enchiladas')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Chilaquiles Menu
    if (product.category == 7) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Chilaquiles {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            {modificadoresMenu('Chilaquiles')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Quesadillas Sencilla Menu
    if (id == 35 || id == 37) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Quesadilla {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <div className={`errorMenuFormDescription ${activeMenuDescription == key ? 'inactive' : ''}`}>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 35 ? 'quesadillaS' : 'quesadillaSP'}/>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 35 ? 'quesadillaS' : 'quesadillaSP'}/>
          </div>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Frita o Asada? 🥟</h4>
            <ul>
              <li>
                <p>Frita</p>
                <input type="radio" name={`coccion${key}`} value={'Frita'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
              <li>
                <p>Asada</p>
                <input type="radio" name={`coccion${key}`} value={'Asada'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
            </ul>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 35 ? 'quesadillaS' : 'quesadillaSP'}/>
            <br />
            <h4>¿Elige tu guisado? 🥘</h4>
            <ul>
              <li>
                <p>Queso</p>
                <input type="radio" name={`guisado${key}`} value={'Queso'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa C/chorizo</p>
                <input type="radio" name={`guisado${key}`} value={'Papa C/chorizo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
            </ul>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 35 ? 'quesadillaS' : 'quesadillaSP'}/>
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Quesadillas Combinada Menu
    if (id == 36 || id == 38) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Quesadilla {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <div className={`errorMenuFormDescription ${activeMenuDescription == key ? 'inactive' : ''}`}>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 36 ? 'quesadillaC' : 'quesadillaCP'}/>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 36 ? 'quesadillaC' : 'quesadillaCP'}/>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno2`} form={id === 36 ? 'quesadillaC' : 'quesadillaCP'}/>
          </div>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Frita o Asada? 🥟</h4>
            <ul>
              <li>
                <p>Frita</p>
                <input type="radio" name={`coccion${key}`} value={'Frita'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
              <li>
                <p>Asada</p>
                <input type="radio" name={`coccion${key}`} value={'Asada'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
            </ul>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 36 ? 'quesadillaC' : 'quesadillaCP'}/>
            <br />
            <h4>¿Elige tu primer guisado? 🥘</h4>
            <ul>
              <li>
                <p>Queso</p>
                <input type="radio" name={`guisado${key}`} value={'Queso'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa C/chorizo</p>
                <input type="radio" name={`guisado${key}`} value={'Papa C/chorizo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
            </ul>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 36 ? 'quesadillaC' : 'quesadillaCP'}/>
            <br />
            <h4>¿Elige tu segundo guisado? 🥘</h4>
            <ul>
              <li>
                <p>Queso</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Queso'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Papa C/chorizo</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Papa C/chorizo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
            </ul>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno2`} form={id === 36 ? 'quesadillaC' : 'quesadillaCP'}/>
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Pambazos Menu
    if (id == 39 || id == 41) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pambazo {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            {modificadoresMenu('Pambazo')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Pambazos con guisado Menu
    if (id == 40 || id == 42) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pambazo {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <div className={`errorMenuFormDescription ${activeMenuDescription == key ? 'inactive' : ''}`}>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 40 ? 'pambazoG' : 'pambazoGQ'}/>
          </div>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Elige tu guisado? 🥘</h4>
            <ul>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
            </ul>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 40 ? 'pambazoG' : 'pambazoGQ'}/>
            <br />
            {modificadoresMenu('Pambazo')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Sopes Menu
    if (product.category == 10 && id != 44 && id != 47) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Sope {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <div className={`errorMenuFormDescription ${activeMenuDescription == key ? 'inactive' : ''}`}>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 43 ? 'sopeS' : id === 45 ? 'sopeB' : id === 46 ? 'sopeSQ' : 'sopeBQ'}/>
          </div>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Frita o Asada? 🥟</h4>
            <ul>
              <li>
                <p>Frita</p>
                <input type="radio" name={`coccion${key}`} value={'Frita'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
              <li>
                <p>Asada</p>
                <input type="radio" name={`coccion${key}`} value={'Asada'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
            </ul>
            <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 43 ? 'sopeS' : id === 45 ? 'sopeB' : id === 46 ? 'sopeSQ' : 'sopeBQ'}/>
            <br />
            {modificadoresMenu('Sope')}
            <br />
            {salsaMenu()}
            <br />
            {extrasMenu()}
          </section>
        </>
      )
    }
    // Sopes con guisado Menu
    if (id == 44 || id == 47) {
      return (
        <>
        <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Sope {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
        <div className={`errorMenuFormDescription ${activeMenuDescription == key ? 'inactive' : ''}`}>
          <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 44 ? 'sopeG' : 'sopeGQ'}/>
          <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 44 ? 'sopeG' : 'sopeGQ'}/>
        </div>
        <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          <h4>¿Frito o Asado? 🥟</h4>
          <ul>
            <li>
              <p>Frita</p>
              <input type="radio" name={`coccion${key}`} value={'Frita'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
            </li>
            <li>
              <p>Asada</p>
              <input type="radio" name={`coccion${key}`} value={'Asada'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
            </li>
          </ul>
          <ErrorTicket type={`${type}${key === 0 ? '' : key}.coccion`} form={id === 44 ? 'sopeG' : 'sopeGQ'}/>
          <br />
          <h4>¿Elige tu guisado? 🥘</h4>
          <ul>
            <li>
              <p>Papa C/chorizo</p>
              <input type="radio" name={`guisado${key}`} value={'Papa C/chorizo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Papa</p>
              <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Tinga de Pollo</p>
              <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Tinga de Res</p>
              <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Tinga de Setas</p>
              <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Hongos</p>
              <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Chicharron</p>
              <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Picadillo</p>
              <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
          </ul>
          <ErrorTicket type={`${type}${key === 0 ? '' : key}.relleno`} form={id === 44 ? 'sopeG' : 'sopeGQ'}/>
          <br />
          {modificadoresMenu('Sope')}
          <br />
          {salsaMenu()}
          <br />
          {extrasMenu()}
        </section>
      </>
      )
    }
  }

  function addOrRemoveProduct(plus) {
    if(plus) {
      const copy = {...product}
      addInput(type, `${id > 34 ? type : 'requiredDescription'}${copy.quantity}`)
      const copyDescription = [...descriptionObject]
      copy.quantity += 1
      copyDescription.push(typeDescription(id))
      setProduct(copy)
      setDescriptionObject(copyDescription)
    } else {
      if(product.quantity == 1) {
        return
      }
      const copy = {...product}
      const copyDescription = [...descriptionObject]
      copy.quantity -= 1
      copyDescription.pop()
      setProduct(copy)
      setDescriptionObject(copyDescription)
    }
  }

  async function setInitialProduct() {
    const product = await searchProduct(id)
    product.quantity = 1
    setProduct(product);
  }

  function addButton() {
    const completeProduct = {...product}
    completeProduct.description = descriptionObject
    addProducts(completeProduct);
    handleEditable(id);
    const isOneClickBuy = localStorage.getItem('oneClickBuy')
    if(isOneClickBuy === 'true') {
      location.href = '/checkout'
    }
  }
  
  function variableRender() {
    const elements = [];
    for (let index = 0; index < product.quantity; index++) {
      elements.push(handleMenu(id, index))
    }
    return elements
  }
  
  useEffect(() => {setInitialProduct(); setButtonSuscription()}, [])

  return (
    <>
      <div className={`backGroundMenu ${editable ? 'inactive' : ''}`}>
        <div className='productDescriptionMenu'>
          <p className='goBack' onClick={handleEditable}><IoIosArrowUp />Cancelar</p>
          <section className='section1'>
            <h2>{product.name}</h2>
            <div className='productController'>
              <button onClick={()=>{addOrRemoveProduct(false)}}> - </button>
              <p>{product.quantity}</p>
              <button onClick={()=>{addOrRemoveProduct(true)}}> + </button>
            </div>
          </section>
          <form className='formDescription'>
            <div>
              {variableRender()}
              {id > 4 && id < 12 || id === 14 || id > 48 ? (
                <>
                  <p style={{fontSize: '25px', position: 'relative', top: '20%', width: '100%', textAlign: 'center'}}>No hay nada que modificar! <br />Elige la cantidad deseada y agregalo a tu carrito 🥛🍮</p>
                </>
              ) : null}
            </div>
            <AppButton text='Agregar al Carrito' onClick={()=>{addButton()}} className='buttonA' form={type}/>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductDescription