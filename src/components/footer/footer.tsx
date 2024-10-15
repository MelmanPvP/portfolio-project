import css from './footer.module.scss'
export default function Footer (){
    return (
        <footer>
            <ul className={css.list}>
                <li className={css.item}><a className={css.item} href='#'>Home</a></li>
                <li className={css.item}><a className={css.item} href='#about'>About</a></li>
                <li className={css.item}><a className={css.item} href='#stack'>Tech Stack</a></li>
                <li className={css.item}><a className={css.item} href='#projects'>Projects</a></li>
                <li className={css.item}><a className={css.item} href='#contact'>Contact</a></li>
            </ul>
            <p className={css.text}>Designed and built by <span className={css.name}>Pavan MG</span> with <span className={css.love}>Love</span> & <span className={css.coffee}>Coffee</span></p>
        </footer>
    )
}