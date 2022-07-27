// 1ero: Paquetes de terceros
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import KBarMenu from "../../components/Kbar";
// 2do: Paquetes de mi propio proyecto
import { Experience as experience } from '../../mock/Experience';
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";

const Experience = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Experiencia | GManriqe';
    });
    
    return (
        <>
            <KBarMenu></KBarMenu>
            <Header pathname={location}/>
            <main className='main main-experience'>
                <div className='max-w-screen-lg mx-auto px-4'>
                    <section className='pt-13'>
                        <h2 className='title-icon'>
                            <span className='plus-signal'>+</span>
                            <div className='title-icon__box'>
                                <em>Experiencia.</em>
                                <span className='split'></span>
                            </div>
                        </h2>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-5 sm:pt-10'>
                            {experience.map((item, idx) => (
                                <div className='card-experience' key={idx}>
                                    <h6>{item.business} <em>{(item.business_type.length > 0) ? `- ${item.business_type}` : ''}</em></h6>
                                    <p>{item.duration}</p>
                                    <span>{item.profile}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className='grid grid-cols-1 sm:grid-cols-2 pt-5 sm:pt-13'>
                        <h2 className='title-icon'>
                            <span className='plus-signal'>+</span>
                            <div className='title-icon__box'>
                                <em>Último</em><em>projecto.</em>
                                <span className='split'></span>
                            </div>
                        </h2>
                        <div className='typing-free pt-5 sm:pt-0'>
                            <p>Encargado de la maquetación y funcionalidad de las vistas construidas para la nueva aplicación web que se está migrando de nombre WMS, dividiendolo en pequeños modulos y construyendolo según prioridades.</p>
                            <p>Tecnologías que se utilizaron para desarrollar el proyecto:</p>
                            <ul>
                                <li>HTML5 (Pug)</li>
                                <li>CSS3 (Scss / Bootstrap 4.6)</li>
                                <li>JAVASCRIPT (ES6 / AXIOS)</li>
                                <li>WEBPACK</li>
                                <li>ADOBEXD</li>
                                <li>GIT</li>
                                <li>TRELLO</li>
                            </ul>
                            <p>La aplicación con los meses iba creciendo, el cual me llevaba a una constante investigación y al uso de modulos muy usados por los desarrolladores. Mencionaré algunos utilizados:</p>
                            <ul>
                                <li>ExcelJS (Reporte)</li>
                                <li>Vanilla Datatable (Tabla incluye: buscador y paginador)</li>
                                <li>Flatpickr (UI Fecha)</li>
                                <li>MomentJS (Formato Fecha)</li>
                                <li>CLEditor (Editor HTML)</li>
                                <li>Select2 (Autocompletado)</li>
                                <li>Algunos más..</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
export default Experience;