// 1ero: Paquetes de terceros
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 2do: Paquetes de mi propio proyecto
import Home from '../views/Home';
import About from '../views/About';
import Experience from '../views/Experience';
import Porfolio from '../views/Portfolio';
import Blog from '../views/Blog';
import Contact from '../views/Contact';
import Page404 from '../views/Page404';

// recuerda este componente no tiene llaves, directo con parentesis
const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/portafolio" element={<Porfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/page-404" element={<Page404 />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
)

export default RoutesComponent;