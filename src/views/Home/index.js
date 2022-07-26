// 1ero: Paquetes de terceros
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// 2do: Paquetes de mi propio proyecto
import { Header } from "../../components/Header";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Inicio | GManriqe';
    });

    return (
        <>
            <Header pathname={location} />
            <main className='main main-home'>
                <div className='max-w-screen-lg mx-auto px-4'>
                    <div className='home flex flex-col justify-center items-center'>
                        <div className='h1 my-only-title'>¡Hey! Bienvenido<p><span className='plus-signal'>+</span> Frontend Developer.</p></div>
                        <ul className='flex flex-col sm:flex-row justify-center gap-2 sm:gap-10 mt-10 w-full'>
                            <li>
                                <Link to='/sobre-mi' className='btn'>SOBRE MI</Link>
                            </li>
                            <li>
                                <Link to='/experiencia' className='btn'>EXPERIENCIA</Link>
                            </li>
                            <li>
                                <Link to='/portafolio' className='btn'>PORTAFOLIO</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home;