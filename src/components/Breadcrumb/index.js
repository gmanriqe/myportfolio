import { Link } from "react-router-dom";

const Breadcrumb = ({linkMenu, linkName}) => {
    return (
        <ul className='breadcrumb flex gap text-xs col-span-10 mb-3'>
            <li><Link to='/'>INICIO</Link></li>
            <li><Link to={linkMenu.pathname}>{linkName}</Link></li>
        </ul>
    )
}

export default Breadcrumb;
