// 1ero: Paquetes de terceros
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import KBarMenu from "../../components/Kbar";
import Breadcrumb from '../../components/Breadcrumb';
// 2do: Paquetes de mi propio proyecto
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer';
import Title from '../../components/Title';

const Contact = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Contacto | GManriqe';
    });

    return (
        <>
            <KBarMenu></KBarMenu>
            <Header pathname={location} />
            <main className='main main-contact'>
                <div className='max-w-4xl mx-auto px-4'>
                    <section className='pt-5 sm:pt-13'>
                        <Breadcrumb linkMenu={location} linkName='CONTÁCTAME'/>
                        <Title title='Contáctame.' />
                        <div className='pt-5'>
                            <p>Si te interesa mi trabajo o las habilidades que tengo, puedes ponerte en contacto conmigo por cualquiera de estos medios.</p>
                        </div>
                    </section>
                    <section className='grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6'>
                        <a href='https://www.linkedin.com/in/gmanriqe' target='_blank' title='LINKEDIN' rel="noreferrer" className='flex p-6 bg-gray-50 contact-me'>
                            <div className='mr-4'>
                                <div className='flex items-center justify-center h-12 w-12 rounded-md text-white'>
                                    <i className='icon-linkedin text-4xl text-linkedin'></i>
                                </div>
                            </div>
                            <div className='text-base grow'>
                                <p className='text-lg leading-6 font-medium text-gray-900'>Linkedin</p>
                                <p className='relative'>Conecta conmigo .. <i className='icon-long-arrow-right ml-2 absolute'></i></p>
                            </div>
                        </a>
                        <a href='https://github.com/gmanriqe' target='_blank' title='GITHUB' rel="noreferrer" className='flex p-6 bg-gray-50 contact-me'>
                            <div className='mr-4'>
                                <div className='flex items-center justify-center h-12 w-12 rounded-md text-white'>
                                    <i className='icon-github text-4xl text-github'></i>
                                </div>
                            </div>
                            <div className='text-base grow'>
                                <p className='text-lg leading-6 font-medium text-gray-900'>Github</p>
                                <p className='relative'>Ver mis proyectos y código .. <i className='icon-long-arrow-right ml-2 absolute'></i></p>
                            </div>
                        </a>
                        <a href='https://twitter.com/gmanriqe/' target='_blank' title='TWITTER' rel="noreferrer" className='flex p-6 bg-gray-50 contact-me'>
                            <div className='mr-4'>
                                <div className='flex items-center justify-center h-12 w-12 rounded-md text-white'>
                                    <i className='icon-twitter text-4xl text-twitter'></i>
                                </div>
                            </div>
                            <div className='text-base grow'>
                                <p className='text-lg leading-6 font-medium text-gray-900'>Twitter</p>
                                <p className='relative'>Escríbeme @ .. <i className='icon-long-arrow-right ml-2 absolute'></i></p>
                            </div>
                        </a>
                        <a href='mailto:gmanriqe@gmail.com' target='_blank' title='EMAIL' rel="noreferrer" className='flex p-6 bg-gray-50 contact-me'>
                            <div className='mr-4'>
                                <div className='flex items-center justify-center h-12 w-12 rounded-md text-white'>
                                    <i className='icon-envelope text-4xl text-email'></i>
                                </div>
                            </div>
                            <div className='text-base grow'>
                                <p className='text-lg leading-6 font-medium text-gray-900'>Email</p>
                                <p className='relative'>Envíame un correo .. <i className='icon-long-arrow-right ml-2 absolute'></i></p>
                            </div>
                        </a>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact