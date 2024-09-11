import css from './card.module.scss'
interface Card {
    img: string
}
export default function Card (props : Card){
    return (
        <div className={css.card}>
            <img src={props.img} alt=''/>
            <h1 className={css.title}>Project Tile goes here</h1>
            <span className={css.text}>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</span>
            <p className={css.stack}>Tech stack : HTML , JavaScript, SASS, React</p>
            <div className={css.links}>
            <a className={css.link}><img className={css.img} src='link.svg' alt=''/>Live Preview</a>
            <a className={css.link}> <img className={css.img} src='/githubsmol.svg' alt=''/>View Code</a>
            </div>

        </div>
    )
}