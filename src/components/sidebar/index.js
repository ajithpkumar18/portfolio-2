// import { Link, NavLink } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logos from '../../assets/images/logo1.png'
import logoSubtitle from '../../assets/images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={logos} alt="logo" />
      <img className="sub-logo" src={logoSubtitle} alt="Joshi" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="/">
          <FontAwesomeIcon icon={faLinkedin} color="$d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="/">
          <FontAwesomeIcon icon={faGithub} color="$d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="/">
          <FontAwesomeIcon icon={faSkype} color="$d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
