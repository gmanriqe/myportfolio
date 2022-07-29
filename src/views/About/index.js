// 1ero: Paquetes de terceros
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import KBarMenu from "../../components/Kbar";
import Breadcrumb from "../../components/Breadcrumb";
// 2do: Paquetes de mi propio proyecto
import { Skills } from "../../mock/Skills";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Title from "../../components/Title";
import createModal from "../../utils/modal";
import hackatrix from '../../assets/images/others/hackatrix_2018.jpeg';
import SkillsCard from "./components/Skills";

const About = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Sobre mi | GManriqe';
    });

    const handleModal = () => {
        let modal = `
            <div class='container-photography-award'>
                <div class='m-title'>
                    <div class='flex justify-between'>
                        <div></div>
                        <div class='m-title__close m-close' title='CLOSE'>
                            <div class='m-title__close-icon'>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <figure>
                    <img src=${hackatrix}>
                </figure>
            </div>
        `
        createModal(modal, 'modal-photography-award')
    }

    return (
        <>
            <KBarMenu></KBarMenu>
            <Header pathname={location} />
            <main className='main main-about'>
                <div className='max-w-4xl mx-auto px-4'>
                    <section className='grid grid-cols-1 lg:grid-cols-10 pt-5 sm:pt-13'>
                        <Breadcrumb linkMenu={location} linkName='SOBRE MÍ' />
                        <Title title='Sobre mí.' />
                        <div className='typing-free col-span-10 lg:col-span-7 pt-5 lg:pt-0'>
                            <p><strong>Hola, ¿Como te vá? 👋 </strong></p>
                            <p>Soy Jesús Gonzales, Frontend Developer con bachiller en Ingeniería Informática.</p>
                            <p>Me gusta construir sitios webs y aplicaciones modernas que sean amigables e intuitivas para el usuario, desarrolladas con HTML5, CSS3, JAVASCRIPT(ES6), y REACTJS. Enfocado en los detalles visuales, con gran destreza en CSS y familiarizado con diferentes frameworks como Bootstrap y Tailwind.</p>
                            <p>En el lado Backend cuento con conocimientos en NODEJS(EXPRESS), manejo de base de datos con SQL Server y controlando el versionamiento de código a través de Git con Github.</p>
                            <p>Apasionado por el aprendizaje constante y evolutivo, ya sea profundizando en competencias ya adquiridas o ampliando conocimientos en nuevas tecnologías y siempre dispuesto a afrantar nuevos retos.</p>
                            <p>Docente del curso <a href='https://github.com/devmasterperu/DesarrolloWeb-Grupo11' target='_blank' title='REPOSITORIO' rel="noreferrer"><strong><u>Desarrollo Web Frontend</u></strong></a> en Devmaster.</p>
                        </div>
                    </section>
                    <section className='pt-8 sm:pt-13'>
                        <Title title='Habilidades.' />
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 sm:pt-10'>
                            {Skills.map((item, idx) => (
                                <SkillsCard elem={item} elemKey={idx}/>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default About;