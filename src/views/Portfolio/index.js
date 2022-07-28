// 1ero: Paquetes de terceros
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Breadcrumb from '../../components/Breadcrumb';
// 2do: Paquetes de mi propio proyecto
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import { Portfolio as portfolio } from '../../mock/Portfolio';
import KBarMenu from "../../components/Kbar";
import Title from '../../components/Title';

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
                <div className='max-w-4xl mx-auto px-4'>
                    <section className='pt-5 sm:pt-13'>
                        <Breadcrumb />
                        <Title title='Portafolio.' />
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 sm:pt-10'>
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