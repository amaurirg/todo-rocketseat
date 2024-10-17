import style from './Tasks.module.css'
import imgEmptyList from '../assets/images/empty-list.svg'
import { useState } from 'react'


export function Task() {
  const createdTasks = useState([])
  const completedTasks = useState([1])
  return (
    <>
      <div className={style.content}>

        <div className={style['create-task']}>
          <input className={style['add-task']} type='text' placeholder='Adicione uma nova tarefa' />
          <button className={style['btn-create-task']}>Criar <span className={style.plus}>+</span></button>
        </div>

        <div className={style['title-table']}>
          <div className={style['created-tasks']}>
            <span className='text-blue'>Tarefas criadas</span>
            <span className={style['count-tasks']}>0</span>
          </div>
          <div className={style['created-tasks']}>
            <span className='text-purple'>Concluídas</span>
            <span className={style['count-tasks']}>0</span>
          </div>
        </div>

        {!createdTasks.length && !completedTasks.length ? (
          <div className={style['empty-list']}>
            <img src={imgEmptyList} alt="Imagem de lista vazia" />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          // <Task />
          <div className={style['tasks-list']}>
            <p>Componente Task</p>
        </div>
        )}

      </div>
    </>
  )
}