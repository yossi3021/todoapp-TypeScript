import { Todo as TodoType } from '../../types/Todo';
import styles from "./Todo.module.scss"; 

type TodoProps = TodoType & {
    del: React.MouseEventHandler<HTMLButtonElement>,
    edit: React.MouseEventHandler<HTMLButtonElement>
}

const Todo = ({ title, text, del, edit }: TodoProps) => {
    return (
        <div className={styles.todo}>
            <div className={styles.todo__contents}>
                <h1 className={styles.todo__contents__title}>{title}</h1>
                <p className={styles.todo__contents__text}>{text}</p>
            </div>
            <div className={styles.todo__actions}>
                <button onClick={edit} className={styles.todo__actions__button}>編集</button>
                <button onClick={del} className={`${styles.todo__actions__button} ${styles.todo__actions__button_delete}`}>削除</button>
            </div>
        </div>
    );
}

export default Todo;