import css from './stack.module.scss'
export default function Stack() {
    return (
        <div className={css.stack}>
           <h2 className={css.title}>
               My Tech Stack
           </h2>
            <span className={css.text}> Technologies I’ve been working with recently</span>
            <div className={css.tech}>
                <img src='/html.svg' alt=''/>
                <img src='/css.svg' alt=''/>
                <img src='/javascript.svg' alt=''/>
                <img src='/react.svg' alt=''/>
                <img src='/Vector.png' alt=''/>
                <img src='/bootstrap.svg' alt=''/>
                <img src='/tailwind.svg' alt=''/>
                <img src='/scss.svg' alt=''/>
                <img src='/git.svg' alt=''/>
                <img src='/greensock.svg' alt=''/>
                <img src='/vscode.svg' alt=''/>
                <img src='/github2.svg' alt=''/>
            </div>
        </div>
    )
}