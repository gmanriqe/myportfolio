// 1ero: Paquetes de terceros
import { Link } from "react-router-dom";
import ButtonCircle from "../ButtonCircle";

export const Header = ({ pathname }) => {
    const path = pathname

    return (
        <header className='header'>
            <div className='max-w-screen-lg mx-auto px-4'>
                <div className='header__content flex justify-between items-center'>
                    <div>
                        <Link to='/' className='header__logo'>JA</Link>
                    </div>
                    <div>
                        {
                            (path.pathname === '/')
                                ? <div className='flex items-center'>
                                    <Link to='/contactame' className='btn btn-small btn-primary'>CONTÁCTAME</Link>
                                    <ButtonCircle/>
                                </div>
                                : <div className='flex items-center'>
                                    <ul className='flex items-center gap-2'>
                                        <li>
                                            <a href='https://www.linkedin.com/in/gmanriqe/' target='_blank' title='LINKEDIN' rel="noreferrer"><i className='icon-linkedin text-xl'></i></a>
                                        </li>
                                        <li>
                                            <a href='https://github.com/gmanriqe/' target='_blank' title='GITHUB' rel="noreferrer"><i className='icon-github text-xl'></i></a>
                                        </li>
                                    </ul>
                                    <ButtonCircle />
                                </div>

                        }
                    </div>
                </div>
            </div>
        </header>
    )
}