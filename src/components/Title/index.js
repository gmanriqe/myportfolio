import { useEffect, useRef } from "react";

const Title = ({ title }) => {
    const elemTitle = useRef(null)

    useEffect(() => {
        let words = title.split(' ')
        let html = ''
        words.map((item) => (
            html += `<em>${item}</em>`
        ))
        elemTitle.current.innerHTML = html
    })

    return (
        <h2 className='title-icon col-span-10 lg:col-span-3'>
            <div className='title-icon__box'>
                <div className='title-icon__name' id='title' ref={elemTitle}></div>
                <span className='title-icon__split'></span>
            </div>
        </h2>
    )
}

export default Title