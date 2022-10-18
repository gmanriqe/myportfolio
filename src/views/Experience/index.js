// 1ero: Paquetes de terceros
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import KBarMenu from "../../components/Kbar";
import Breadcrumb from '../../components/Breadcrumb';
// 2do: Paquetes propios
import { Experience as experience } from '../../mock/Experience';
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import Title from "../../components/Title";
import ExperienceCard from './components/ExperienceCard';
const Experience = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Experiencia | GManriqe';
    });

    return (
        <>
            <KBarMenu></KBarMenu>
            <Header pathname={location} />
            <main className='main main-experience'>
                <div className='max-w-4xl mx-auto px-4'>
                    <section className='pt-5 sm:pt-13'>
                        <Breadcrumb linkMenu={location} linkName='EXPERIENCIA'/>
                        <Title title='Experiencia.' />
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 sm:pt-10'>
                            {experience.map((item) => (
                                <ExperienceCard key={item.id} elem={item}/>
                            ))}
                        </div>
                    </section>
                    <section className='grid grid-cols-1 lg:grid-cols-10 pt-8 sm:pt-13'>
                        <Title title='Último proyecto.' />
                        <div className='typing-free col-span-7 pt-5 lg:pt-0'>
                            <p>Encargado de las propuestas de diseño, maquetación y funcionalidad de las vistas construidas para la nueva aplicación web de nombre WMS.</p>
                            <p>Tecnologías y herramientas que se utilizaron para el desarrollo del proyecto:</p>
                            <ul>
                                <li>Html5 (Pug)</li>
                                <li>Css3 (Bootstrap 4.6)</li>
                                <li>Javascript (ES6)</li>
                                <li>Webpack</li>
                                <li>API'S con Axios</li>
                                <li>Postman</li>
                                <li>Git</li>
                                <li>Trello</li>
                                <li>Adobe xd</li>
                            </ul>
                            <p>Modulos descargados desde npm:</p>
                            <ul>
                                <li>ExcelJS (Reporte)</li>
                                <li>Vanilla Datatable</li>
                                <li>Flatpickr (UI Fecha)</li>
                                <li>MomentJS (Formato Fecha)</li>
                                <li>CLEditor (Editor HTML)</li>
                                <li>Select2</li>
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