import css from './header.module.scss'
export default function Header(){
    return (
        <header className={css.header}>
            <img className={css.img} src='https://melmanpvp.github.io/portfolio-project//logo.svg' alt=''/>
            <ul className={css.list}>
                <li className={css.item}>Home</li>
                <li className={css.item}>About</li>
                <li className={css.item}>Tech Stack</li>
                <li className={css.item}>Projects</li>
                <li className={css.item}>Contact</li>
            </ul>
            <div className={css.icons}>
                <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//github.svg' alt=''/>
                <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//twitter.svg' alt=''/>
                <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//linkedin.svg' alt=''/>
            </div>
        </header>
    )
}