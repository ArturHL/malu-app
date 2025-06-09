import './index.css'
import PropTypes from 'prop-types'
import useCategoryCard from '../../hooks/Component_Hooks/useCategoryCard'

const CategoryCard = ({id, title, url, click}) => {
  const { location, style } = useCategoryCard({id, title, url, click})

  return (
    <section className='categoryCard' onClick={location}>
      <div style={style}></div>
      <h3>{title}</h3>
    </section>
  )
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  click: PropTypes.bool.isRequired,
}

export default CategoryCard
