import css from './info.module.scss'
export default function Info () {
    return (
        <div className={css.info}>
            <div>
                <p className={css.text}>
                    Hi 👋,<br/>
                    My name is <br/>
                    <span className={css.name}>Pavan MG</span> <br/>
                    I build things for web
                </p>
            </div>
            <img className={css.img} src='https://melmanpvp.github.io/portfolio-project//man.png' alt=''/>
        </div>
    )
}