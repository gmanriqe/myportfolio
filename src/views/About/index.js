import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 2do: Paquetes de mi propio proyecto
import { Skills } from "../../mock/Skills";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const About = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Sobre mi | GManriqe';
    });
    return (
        <>
            <Header pathname={location}/>
            <main className='main main-about'>
                <div className='max-w-screen-lg mx-auto px-4'>
                    <section className='grid grid-cols-1 sm:grid-cols-2 pt-5 sm:pt-13'>
                        <h2 className='title-icon'>
                            <span className='plus-signal'>+</span>
                            <div className='title-icon__box'>
                                <em>Sobre</em><em>mí.</em>
                                <span className='split'></span>
                            </div>
                        </h2>
                        <div className='typing-free pt-5 sm:pt-0'>
                            <p>Bachiller en <strong>Ingeniería Informática</strong> con experiencia haciendo sitios web modernos que sean simples, amigables e intuitivos, utilizando HTML5, CSS3, JAVASCRIPT (ES6) y REACTJS.</p>
                            <p>Enfocado en los detalles visuales, con gran destreza en CSS y familiariazado con diferentes preprocesadores tales como: Scss (CSS) y Pug (HTML).</p>
                            <p>Aunque mis sentimientos son muy fuertes por el Frontend, también cuento con conocimientos del lado Backend con NodeJS (Express) utilizando el patron MVC y manejo de Base de Datos con SQL Server y MySQL.</p>
                            <p>Integrante del Team Devmaster Ganador del Primer Puesto en la Categoria Innovación en la Hackatrix 2018 Organizado por el BCP y Belatrixsf.</p>
                            <p>Docente del Curso Desarrollo Web Frontend en Devmaster Perú.</p>
                            <ul className='list-inline-icon'>
                                <li><a href='https://github.com/gmanriqe' target='_blank' title='GITHUB' rel="noreferrer"><i className="icon-github"></i></a></li>
                                <li><a href='https://www.linkedin.com/in/gmanriqe' target='_blank' title='LINKEDIN' rel="noreferrer"><i className="icon-linkedin"></i></a></li>
                                <li><a href='https://twitter.com/gmanriqe' target='_blank' title='TWITTER' rel="noreferrer"><i className="icon-twitter"></i></a></li>
                            </ul>
                        </div>
                    </section>
                    <section className='pt-13'>
                        <h2 className='title-icon'>
                            <span className='plus-signal'>+</span>
                            <div className='title-icon__box'>
                                <em>Habilidades.</em>
                                <span className='split'></span>
                            </div>
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-5 sm:pt-10'>
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