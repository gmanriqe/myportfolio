import {createCustomElement} from '../helpers/index.js'

const createModal = (content, nameModal = '', classModal = '') => {
    let body = document.querySelector('body')

    const modalContentElement = createCustomElement('div', {
        id: 'modal-window-content',
        class: `modal-window-content ${classModal}`,
    }, [content]),
        modalEl = createCustomElement('div', {
            id: 'modal-window ',
            class: `modal-window modal-custom bg-black bg-opacity-25 ${nameModal}`,
        },
            [modalContentElement]
        )

    body.appendChild(modalEl)
}

export default createModal