import css from './stack.module.scss'
import {imgs} from "../../data/data.ts";
export default function Stack() {
    return (
        <div className={css.stack}>
           <h2 className={css.title}>
               My Tech Stack
           </h2>
            <span className={css.text}> Technologies I’ve been working with recently</span>
            <div className={css.tech}>
                {imgs.map((item) => {
                    return <img className={css.img} src={`https://melmanpvp.github.io/portfolio-project/` + item.img} alt={item.img} key={item.img} />;
                })}
            </div>
        </div>
    )
}