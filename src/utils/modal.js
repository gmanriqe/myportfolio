import {createCustomElement, __elem} from '../helpers/index.js'

const createModal = (content, nameModal = '', classModal = '') => {
    let body = document.querySelector('body')

    const modalContentElement = createCustomElement('div', { // container modal (into)
        id: 'modal-window-content',
        class: `modal-window-content ${classModal}`,
    }, [content]),
        modalEl = createCustomElement('div', { // container modal
            id: 'modal-window ',
            class: `modal-window modal-custom bg-black bg-opacity-25 ${nameModal}`,
        },
            [modalContentElement]
        )

    body.appendChild(modalEl)

    /**
     * Handle close modal
     */
    let btnClose = __elem('.m-close')
    if(btnClose){
        btnClose.addEventListener('click', () => {
            removeModal()
        })
    }

    /**
     * Remove modal
     */
    const removeModal = () => {
        modalContentElement.parentNode.removeChild(modalContentElement)
        modalEl.parentNode.removeChild(modalEl)
    }
}

export default createModal