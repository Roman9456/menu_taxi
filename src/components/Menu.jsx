import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Menu({ menuItems }) {
  return (
    <nav className='menu'>
      {menuItems.map((elem, i) =>
        <NavLink
          key={i}
          to={elem.link}
          className={({ isActive }) =>
            isActive ? 'menu__item menu__item-active' : 'menu__item'
          }
        >
          {elem.title}
        </NavLink>
      )}
    </nav>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default Menu;