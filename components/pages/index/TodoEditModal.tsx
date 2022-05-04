import Modal from "../../commons/Modal";
import {Todo} from "../../../types/Todo";

type TodoEditModalProps = Todo & {
    editTitle: React.ChangeEventHandler<HTMLInputElement>,
    editText: React.ChangeEventHandler<HTMLInputElement>,
    submit: React.MouseEventHandler<HTMLButtonElement>,
    close: React.MouseEventHandler<HTMLButtonElement>
}

const TodoEditModal = ({title, text, editTitle, editText, submit, close}: TodoEditModalProps) => {
    return (<Modal close={close}>
        <input type="text" onChange={editTitle} value={title} />
        <input type="text" onChange={editText} value={text} />
        <button onClick={submit}>編集</button>
    </Modal>)
}

export default TodoEditModal;