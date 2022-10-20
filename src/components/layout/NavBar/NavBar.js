import {Link} from 'react-router-dom'

import NavItem from '../NavItem/NavItem'
import logo from '../../../img/costs_logo.png'
import Container from '../Container/Container'

import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <NavItem path="/" content="Home"/>
                    <NavItem path="/company" content="Empresa"/>
                    <NavItem path="/contact" content="Contato"/>
                    <NavItem path="/projects" content="Projetos"/>
                    <NavItem path="/newproject" content="Novo Projeto"/>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar