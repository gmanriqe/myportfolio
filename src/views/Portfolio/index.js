// 1ero: Paquetes de terceros
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
// 2do: Paquetes de mi propio proyecto
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import KBarMenu from "../../components/Kbar";
import { Portfolio as portfolio } from '../../mock/Portfolio';
const Portfolio = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Portafolio | GManriqe';
    });

    return (
        <>
            <KBarMenu></KBarMenu>
            <Header pathname={location} />
            <main className='main main-portfolio'>
                <div className='max-w-screen-lg mx-auto px-4'>
                    <section className='pt-13'>
                        <h2 className='title-icon'>
                            <span className='plus-signal'>+</span>
                            <div className='title-icon__box'>
                                Portafolio.
                                <span className='split'></span>
                            </div>
                        </h2>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10'>
                            {
                                portfolio.map((item, idx) => (
                                    <a key={idx} href={item.link} target='_blank' title={item.title} rel="noreferrer">
                                        <figure>
                                            <img src={item.image_URL} alt={item.description}></img>
                                            <figcaption><small>{item.marca}</small></figcaption>
                                        </figure>
                                    </a>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Portfolio;