import { useState } from 'react';
import css from './burgermenu.module.scss';

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={css.burger_menu}>
            {/* Burger Icon */}
            <div className={` ${css.burger_icon} ${isOpen ? css.open : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Menu */}
            <div className={` ${css.menu} ${isOpen ? css.open : ''}`}>
                <ul>
                    <li className={css.item}><a className={css.item} href="#">Home</a></li>
                    <li className={css.item}><a className={css.item} href="#">About</a></li>
                    <li className={css.item}><a className={css.item} href="#">Tech Stack</a></li>
                    <li className={css.item}><a className={css.item} href="#">Services</a></li>
                    <li className={css.item}><a className={css.item} href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}
