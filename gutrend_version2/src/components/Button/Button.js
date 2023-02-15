import clsx from 'clsx'
import styles from './Button.module.css'

function Button({ primary, secondary, success, warning, danger, info, light, dark, link, }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.success]: success,
        [styles.warning]: warning,
        [styles.danger]: danger,
        [styles.info]: info,
        [styles.light]: light,
        [styles.dark]: dark,
        [styles.link]: link,


    })
    return (
        <>
            <button className={classes}>
                Click Me !
            </button>
        </>
    )
}

export default Button