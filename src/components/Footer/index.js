// 1ero: Paquetes de terceros
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className='footer py-5'>
            <div className='max-w-screen-lg mx-auto px-4'>
                <section className='grid grid-cols-1 gap-3'>
                    <div className='text-center'>
                        ❤ By Frontend Developer. Hecho en Perú
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between text-center sm:text-left'>
                        <div>
                            <p className='technologys'>Hecho con
                                <a href='https://reactjs.org/' target='_blank' title='REACTJS' rel="noreferrer"> ReactJS</a>,
                                <a href='https://tailwindcss.com/' target='_blank' title='TAILWINDCSS' rel="noreferrer"> TailwindCSS</a>,
                                <a href='https://vercel.com/' target='_blank' title='VERCEL' rel="noreferrer"> Vercel</a>
                            </p>
                        </div>
                        <ul className='flex justify-center sm:justify-end gap-2'>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contacto'>Contáctame</Link></li>
                            <li><a href='https://github.com/gmanriqe' target='_blank' title='GITHUB' rel="noreferrer"><i className="icon-github"></i></a></li>
                            <li><a href='https://www.linkedin.com/in/gmanriqe' target='_blank' title='LINKEDIN' rel="noreferrer"><i className="icon-linkedin"></i></a></li>
                            <li><a href='https://twitter.com/gmanriqe' target='_blank' title='TWITTER' rel="noreferrer"><i className="icon-twitter"></i></a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    )
}