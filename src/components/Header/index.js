// 1ero: Paquetes de terceros
import { Link } from "react-router-dom";

export const Header = ({ pathname }) => {
    const path = pathname

    const handleOpenMenu = (evt) => {
        const $menu = document.querySelector('.close-button')
        $menu.classList.toggle('open')
    }

    return (
        <header className='header px-4'>
            <div className='max-w-screen-lg mx-auto px-4'>
                <div className='header__content flex justify-between items-center'>
                    <div>
                        <Link to='/' className='header__logo'>JA</Link>
                    </div>
                    <div>
                        {
                            (path.pathname === '/')
                                ? <Link to='/contacto' className='btn btn-small btn-primary'>CONTÁCTAME</Link>
                                : <div>
                                    <ul className='header__navegation'>
                                        <li>
                                            <Link to='/sobre-mi' className={path.pathname === '/sobre-mi' ? 'active' : ''}>Sobre mí</Link>
                                        </li>
                                        <li>
                                            <Link to='/experiencia' className={path.pathname === '/experiencia' ? 'active' : ''}>Experiencia</Link>
                                        </li>
                                        <li>
                                            <Link to='/portafolio' className={path.pathname === '/portafolio' ? 'active' : ''}>Portafolio</Link>
                                        </li>
                                    </ul>
                                    <div className='close-button' onClick={() => handleOpenMenu()}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}