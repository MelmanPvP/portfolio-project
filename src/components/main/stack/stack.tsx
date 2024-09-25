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
                    return <img src={`https://melmanpvp.github.io/portfolio-project/` + item.img} alt={item.img} key={item.img} />;
                })}
                {/*{imgs.map((item) =>*/}
                {/*{ return <img src={`https://melmanpvp.github.io/portfolio-project//`+ item.img} alt={item.img}/>})}*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//html.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//css.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//javascript.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//react.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//Vector.png' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//bootstrap.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//tailwind.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//scss.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//git.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//greensock.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//vscode.svg' alt=''/>*/}
                {/*<img src='https://melmanpvp.github.io/portfolio-project//github2.svg' alt=''/>*/}
            </div>
        </div>
    )
}