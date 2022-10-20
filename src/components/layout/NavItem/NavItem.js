import { Link } from "react-router-dom"

import styles from './NavItem.module.css'

function NavItem({ path, content }) {
    return (
        <li className={styles.nav_item}>
            <Link to={path}>{content}</Link>
        </li>
    )
}

export default NavItem