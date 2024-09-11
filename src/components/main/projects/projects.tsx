import css from './projects.module.scss'
import Card from "./card/card.tsx";
export default function Projects() {
    const info = [
        {
            id: 1,
            img: 'https://melmanpvp.github.io/portfolio-project//pic1.png'
        },
        {
            id: 2,
            img: 'https://melmanpvp.github.io/portfolio-project//pic2.png'
        },
        {
            id: 3,
            img: 'https://melmanpvp.github.io/portfolio-project//pic3.png'
        },
        {
            id: 4,
            img: 'https://melmanpvp.github.io/portfolio-project//pic4.png'
        },
        {
            id: 5,
            img: 'https://melmanpvp.github.io/portfolio-project//pic5.png'
        },
        {
            id: 6,
            img: 'https://melmanpvp.github.io/portfolio-project//pic6.png'
        },
    ]
    return (
        <div>
            <h2 className={css.title}>Projects</h2>
            <span className={css.text}>Things I’ve built so far</span>
            <div className={css.projects}>
                {info.map(item => <Card {...item} />)}
            </div>
            <div className={css.info}>
                <img className={css.img} src='/logo2.svg' alt=''/>
                <div className={css.data}>
                <span className={css.info_text}>+91 12345 09876</span>
                <span className={css.info_text}>info@example.com</span>
                    <div className={css.icons}>
                        <img className={css.icon} src='/github1.svg' alt=''/>
                        <img className={css.icon}  src='/twitter1.svg' alt=''/>
                        <img className={css.icon} src='/linkedin1.svg' alt=''/>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}