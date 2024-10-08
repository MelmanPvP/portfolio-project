import css from './projects.module.scss'
import Card from "./card/card.tsx";
import {info} from "../../data/data.ts";
export default function Projects() {

    return (
        <div>
            <h2 className={css.title}>Projects</h2>
            <span className={css.text}>Things I’ve built so far</span>
            <div className={css.projects}>
                {info.map(item => <Card key={item.id} {...item} />)}
            </div>
            <div className={css.info}>
                <img className={css.img} src='https://melmanpvp.github.io/portfolio-project//logo2.svg' alt=''/>
                <div className={css.data}>
                <span className={css.info_text}>+91 12345 09876</span>
                <span className={css.info_text}>info@example.com</span>
                    <div className={css.icons}>
                        <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//github1.svg' alt=''/>
                        <img className={css.icon}  src='https://melmanpvp.github.io/portfolio-project//twitter1.svg' alt=''/>
                        <img className={css.icon} src='https://melmanpvp.github.io/portfolio-project//linkedin1.svg' alt=''/>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}