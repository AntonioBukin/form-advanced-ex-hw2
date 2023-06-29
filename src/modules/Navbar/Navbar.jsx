import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./navbar.module.scss";

const Navbar = ({menuItems}) => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.navbarRow}>
                <a href="#top">Logo</a>
                <NavbarMenu items={menuItems}/>
                <button>To do list</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;