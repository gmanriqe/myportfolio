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

const About = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Sobre mi | GManriqe';
    });

    return (
        <>
            <KBarMenu></KBarMenu>
            <Header pathname={location} />
            <main className='main main-about'>
                <div className='max-w-4xl mx-auto px-4'>
                    <section className='grid grid-cols-1 lg:grid-cols-10 pt-5 sm:pt-13'>
                        <Breadcrumb linkMenu={location} linkName='SOBRE MÍ'/>
                        <Title title='Sobre mí.' />
                        <div className='typing-free col-span-7 pt-5 lg:pt-0'>
                            <p><strong>Hola, ¿Como te vá? 👋 </strong></p>
                            <p>Soy Jesús Gonzales, bachiller en <strong>Ingeniería Informática</strong> con experiencia haciendo sitios web modernos que sean amigables e intuitivos desarrolladas con HTML5, CSS3, JAVASCRIPT(ES6), y REACTJS. Enfocado en los detalles visuales, con gran destreza en CSS y familiariazado con diferentes frameworks como: Bootstrap y Tailwind.</p>
                            <p>Aunque mis sentimientos son muy fuertes por el Frontend, cuento con conocimientos del lado Backend con NodeJS (Express), utilizando el patron MVC y manejo de Base de Datos con SQL Server.</p>
                            <p>Integrante del team Devmaster, ganadores del <strong>1er puesto</strong> en la categoría <strong>Innovación en la Hackatrix 2018</strong> con la idea "te lo compro", organizado por el Banco de Crédito del Perú (BCP) y Belatrixsf.</p>
                            <p>Docente del curso <a href='https://github.com/devmasterperu/DesarrolloWeb-Grupo11' target='_blank' title='REPOSITORIO' rel="noreferrer"><strong>Desarrollo Web Frontend</strong></a> en Devmaster.</p>
                        </div>
                    </section>
                    <section className='pt-8 sm:pt-13'>
                        <Title title='Habilidades.' />
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 sm:pt-10'>
                            {Skills.map((item, idx) => (
                                <div className='card-skills' key={idx}>
                                    <div className='card-skills__header'>
                                        <h6>{item.title}</h6>
                                    </div>
                                    <div className='card-skills__body'>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
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