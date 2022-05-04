import { Todo as TodoType } from '../types/Todo';
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import TodoEditModal from '../components/pages/index/TodoEditModal';
import styles from '../styles/Index.module.scss'
import Todo from '../components/commons/Todo';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [tmpTitle, setTmpTitle] = useState<string>('');
  const [tmpText, setTmpText] = useState<string>('');

  // edit
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const addTodo = (): void => {
    if (tmpTitle == "" || tmpText == "") return;

    setTodos([...todos, {
      title: tmpTitle,
      text: tmpText,
    }]);
    setTmpTitle('');
    setTmpText('');
  }
  
  const delTodo = (index: number): void => {
    const tmpTodos = todos.filter((todo, todoIndex) => todoIndex != index)
    setTodos(tmpTodos);
  }

  const submit = (): void => {
    const tmpTodos = Array.from(todos);
    tmpTodos[index].title = title;
    tmpTodos[index].text = text;
    setTodos(tmpTodos);
    setIsModalOpen(false);
    setIndex(0);
    setTitle('');
    setText('');
  }
  
  return (
    <div className={styles.index}>
      <div className={styles.index__icon}>
        <div className={styles.index__icon__line}></div>
        <div className={styles.index__icon__line}></div>
        <div className={styles.index__icon__line}></div>
      </div>
      <input className={styles.index__input} placeholder='TODO' type="text" onChange={e => setTmpTitle(e.target.value)} value={tmpTitle} />
      <input className={styles.index__input} placeholder='Contents' type="text" onChange={e => setTmpText(e.target.value)} value={tmpText} />
      <button className={styles.index__button} onClick={addTodo}>追加</button>
      {todos.map((todo ,index) => (
        <Todo 
          key={index} 
          title={todo.title}
          text={todo.text}
          del={() => delTodo(index)}
          edit={() => {
            setTitle(todo.title);
            setText(todo.text);
            setIndex(index);
            setIsModalOpen(true);
          }}
        />
      ))
      }
      {
        isModalOpen ?
        <TodoEditModal
          title={title}
          text={text}
          editTitle={e => setTitle(e.target.value)}
          editText={e => setText(e.target.value)}
          submit={submit}
          close={() => setIsModalOpen(false)}
        />
        :
        <></>
      }
    </div>
  )
}

export default Home
