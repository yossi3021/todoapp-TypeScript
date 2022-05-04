import styles from "./Modal.module.scss"

type ModalProps = {
    children: React.ReactNode,
    close: React.MouseEventHandler<HTMLButtonElement>
};

const Modal = ({children, close}: ModalProps) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__inner__header}>
                    <button onClick={close} className={styles.modal__inner__header__close}>X</button>
                </div>
                <div className={styles.modal__inner__contents}>{children}</div>
            </div>
        </div>
    )
}

export default Modal;