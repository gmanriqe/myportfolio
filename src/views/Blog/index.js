// 1ero: Paquetes de terceros
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import KBarMenu from "../../components/Kbar";
import Breadcrumb from '../../components/Breadcrumb';
// 2do: Paquetes de mi propio proyecto
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import Title from "../../components/Title";

const Blog = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Inicio | GManriqe';
    });

    return (
        <>
            <KBarMenu></KBarMenu>
            <Header pathname={location} />
            <main className='main main-blog'>
                <div className='max-w-4xl mx-auto px-4'>
                    <section className='pt-5 sm:pt-13'>
                        <Breadcrumb />
                        <Title title='Blog.' />
                        <div className='pt-5'>
                            <p>Sin resultado...</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Blog