import style from './Form.module.css'


export const Form = () => {

    const count = 1
    const name = 'Zhen'

    return <form className={style.form}>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <input type="text" />
        <button>Click</button>
    </form>
}