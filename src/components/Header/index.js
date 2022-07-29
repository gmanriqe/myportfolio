// 1ero: Paquetes de terceros
import { Link } from "react-router-dom";
import { useKBar } from 'kbar'

export const Header = ({ pathname }) => {
    const path = pathname
    const { query } = useKBar()

    const handleDarkMode = () => {
        console.log(typeof localStorage.getItem('darkMode'))
        if(localStorage.getItem('darkMode') === 'true') {
            localStorage.setItem('darkMode', false)
            document.querySelector('html').classList.add('dark')
            return
        }

        if(localStorage.getItem('darkMode') === 'false') {
            localStorage.setItem('darkMode', true)
            document.querySelector('html').classList.remove('dark')
            return
        }
    }

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
                                ? <Link to='/contactame' className='btn btn-small btn-primary'>CONTÁCTAME</Link>
                                : <div className='flex items-center'>
                                    <button type="button" className="circle-button mx-3" onClick={()=> handleDarkMode()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-600 dark:text-gray-300"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                    </button>
                                    <ul className='flex items-center gap-2'>
                                        <li>
                                            <a href='https://www.linkedin.com/in/gmanriqe/' target='_blank' title='LINKEDIN' rel="noreferrer"><i class='icon-linkedin text-xl'></i></a>
                                        </li>
                                        <li>
                                            <a href='https://github.com/gmanriqe/' target='_blank' title='GITHUB' rel="noreferrer"><i class='icon-github text-xl'></i></a>
                                        </li>
                                    </ul>
                                    <button type='button' className="flex align-middle rounded-md bg-transparent w-6 h-6 border-0 cursor-pointer outline-none ml-3" title='MENU' onClick={query.toggle}>
                                        <svg height="24" viewBox="0 0 20 20" fill="#000000"><path d="M6.023 7.296v5.419H3.648C1.644 12.715 0 14.316 0 16.342 0 18.355 1.644 20 3.648 20a3.657 3.657 0 003.648-3.659v-2.375h5.397v2.376A3.657 3.657 0 0016.343 20c2.004 0 3.647-1.644 3.647-3.659 0-2.025-1.643-3.626-3.648-3.626h-2.375v-5.42h2.376c2.004 0 3.647-1.611 3.647-3.626C19.99 1.644 18.346 0 16.341 0c-2.014 0-3.648 1.644-3.648 3.67v2.364H7.296V3.669C7.296 1.644 5.663 0 3.648 0 1.644 0 0 1.644 0 3.67c0 2.014 1.644 3.626 3.648 3.626h2.375zm-2.375-1.24c-1.294 0-2.375-1.083-2.375-2.387 0-1.315 1.081-2.396 2.375-2.396 1.304 0 2.375 1.081 2.375 2.396v2.386H3.648zm12.694 0h-2.376V3.668c0-1.315 1.071-2.396 2.376-2.396 1.293 0 2.375 1.081 2.375 2.396 0 1.304-1.082 2.386-2.375 2.386zm-9.046 6.67V7.274h5.397v5.45H7.296zm-3.648 1.219h2.375v2.386a2.387 2.387 0 01-2.375 2.386 2.394 2.394 0 01-2.375-2.386 2.394 2.394 0 012.375-2.386zm12.694 0a2.394 2.394 0 012.375 2.386 2.394 2.394 0 01-2.375 2.386 2.387 2.387 0 01-2.376-2.386v-2.386h2.376z"></path></svg>
                                    </button>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </header>
    )
}