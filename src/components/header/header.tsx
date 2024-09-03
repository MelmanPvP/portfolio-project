import css from './header.module.scss'
export default function Header(){
    return (
        <header className={css.header}>
            <img className={css.img} src='../../../public/logo.svg' alt=''/>
            <ul className={css.list}>
                <li className={css.item}>Home</li>
                <li className={css.item}>About</li>
                <li className={css.item}>Tech Stack</li>
                <li className={css.item}>Projects</li>
                <li className={css.item}>Contact</li>
            </ul>
            <div className={css.icons}>
                <img className={css.icon} src='../../../public/github.svg' alt=''/>
                <img className={css.icon} src='../../../public/twitter.svg' alt=''/>
                <img className={css.icon} src='../../../public/linkedin.svg' alt=''/>
            </div>
        </header>
    )
}