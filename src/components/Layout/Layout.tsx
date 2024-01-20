import {Link, Outlet} from "react-router-dom";
import s from './styles.module.css'

const Layout = () => {
    return (
        <div>
            <div className={s.container}>
                <nav className={s.nav}>
                    <Link to={'/'}>home</Link>
                    <Link to={'/query'}>query</Link>
                </nav>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout;