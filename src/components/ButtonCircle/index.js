import { useLocation } from "react-router-dom";
import { useKBar } from 'kbar'

const ButtonCircle = () => {
    const $html = document.querySelector('html')

    const { query } = useKBar()
    const location = useLocation();

    if (localStorage.getItem('darkMode') === null) localStorage.setItem('darkMode', 'false')

    const handleDarkMode = () => {
        if (localStorage.getItem('darkMode') === 'true') { // Dark
            localStorage.setItem('darkMode', false)
            $html.classList.remove('dark')

            const $pathSVG = document.getElementById('mode')
            $pathSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-600 dark:text-gray-300"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`
            return
        }

        if (localStorage.getItem('darkMode') === 'false') { // Light
            localStorage.setItem('darkMode', true)
            $html.classList.add('dark')

            const $pathSVG = document.getElementById('mode')
            $pathSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-600 dark:text-gray-300"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`
            return
        }
    }

    return (

        (location.pathname !== '/')
            ? <>
                <button type="button" className="circle-button mx-3" id='mode' onClick={() => handleDarkMode()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-600 dark:text-gray-300">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                </button>
                <button class="circle-button sm:flex hidden" title='MENU' onClick={query.toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                </button>
            </>
            : <button type="button" className="circle-button mx-3" id='mode' onClick={() => handleDarkMode()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-600 dark:text-gray-300">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            </button>
    )
}

export default ButtonCircle;