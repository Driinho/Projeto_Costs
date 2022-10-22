import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    function novaAba(url) {
        window.open(url, '_blank')
    }

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram
                        onClick={() =>
                            novaAba(
                                'https://www.instagram.com/nascimento_pedro04/'
                            )
                        }
                    />
                </li>
                <li>
                    <FaGithub
                        onClick={() => novaAba('https://github.com/Driinho')}
                    />
                </li>
                <li>
                    <FaLinkedin
                        onClick={() =>
                            novaAba(
                                'https://www.linkedin.com/in/pedro-nascimento-4906b5217/'
                            )
                        }
                    />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer
