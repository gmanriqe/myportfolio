export const __elemId = (elem) => document.getElementById(elem);
export const __elem = (elem) => document.querySelector(elem);
export const __elems = (elems) => document.querySelectorAll(elems);

export const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
    }
};

export const createCustomElement = (element, attributes, children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
        if (el.nodeType) {
            if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
        } else {
            customElement.innerHTML += el;
        }
    });

    addAttributes(customElement, attributes);
    return customElement;
};

