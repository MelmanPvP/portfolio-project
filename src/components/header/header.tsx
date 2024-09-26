import css from './header.module.scss'
import BurgerMenu from "../burgermenu/burgermenu.tsx";
export default function Header(){
    return (
        <header className={css.header}>
            <img className={css.img} src='https://melmanpvp.github.io/portfolio-project//logo.svg' alt=''/>
            <BurgerMenu/>
            <ul className={css.list}>
                <li className={css.item}><a className={css.item} href='#'>Home</a></li>
                <li className={css.item}><a className={css.item} href='#'>About</a></li>
                <li className={css.item}><a className={css.item} href='#'>Tech Stack</a></li>
                <li className={css.item}><a className={css.item} href='#'>Projects</a></li>
                <li className={css.item}><a className={css.item} href='#'>Contact</a></li>
            </ul>
            <div className={css.icons}>
                <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//github.svg' alt=''/>
                <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//twitter.svg' alt=''/>
                <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//linkedin.svg' alt=''/>
            </div>
        </header>
    )
}