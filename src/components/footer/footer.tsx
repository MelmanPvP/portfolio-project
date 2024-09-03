import css from './footer.module.scss'
export default function Footer (){
    return (
        <footer>
            <ul className={css.list}>
                <li className={css.item}>Home</li>
                <li className={css.item}>About</li>
                <li className={css.item}>Tech Stack</li>
                <li className={css.item}>Projects</li>
                <li className={css.item}>Contact</li>
            </ul>
            <p className={css.text}>Designed and built by <span className={css.name}>Pavan MG</span> with <span className={css.love}>Love</span> & <span className={css.coffee}>Coffee</span></p>
        </footer>
    )
}