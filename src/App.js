// 1ero: Paquetes de terceros
import RoutesComponent from './routes/index';
import { useNavigate } from 'react-router-dom';
import { KBarProvider } from 'kbar';
// 2do: Paquetes propios
import { ThemeProvider} from './context/ThemeContext';

const App = () => {
    const navegation = useNavigate()
    
    const actions = [
        {
            id: 'home',
            name: 'Inicio',
            shortcut: ["h"],
            icon: '',
            perform: () => (navegation("/")),
            section: 'Navegación',
        },
        {
            id: 'about-me',
            name: 'Sobre mi',
            shortcut: ["s"],
            icon: '',
            perform: () => (navegation("/sobre-mi")),
            section: 'Navegación',
        },
        {
            id: 'experience',
            name: 'Experiencia',
            shortcut: ["e"],
            icon: '',
            perform: () => (navegation("/experiencia")),
            section: 'Navegación',
        },
        {
            id: 'portfolio',
            name: 'Portafolio',
            shortcut: ["p"],
            icon: '',
            perform: () => (navegation("/portafolio")),
            section: 'Navegación',
        },
        {
            id: "blog",
            name: "Blog",
            shortcut: ["b"],
            icon: '',
            perform: () => (navegation("/blog")),
            section: 'Navegación',
        },
        {
            id: "contact",
            name: "Contáctame",
            shortcut: ["c"],
            keywords: "email",
            icon: '',
            perform: () => (navegation("/contactame")),
            section: 'Navegación',
        }
    ]
    
    return (
        <div className='App'>
            <ThemeProvider>
                <KBarProvider actions={actions}>
                    <RoutesComponent />
                </KBarProvider>
            </ThemeProvider>
        </div>
    )
}

export default App;
