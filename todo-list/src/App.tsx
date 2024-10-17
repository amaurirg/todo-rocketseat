import './global.css'
import style from './App.module.css'
import ToDoLogo from './assets/images/logo-todo-rocket.svg'
import { Task } from './components/Tasks'


export function App() {

  return (
    <>
      <div className={style.container}>
        <header className={style.header}>
          <img className={style['img-logo']} src={ToDoLogo} alt="Logo ToDo - Foguete" />
        </header>

        <Task />

      </div>
    </>
  )
}

export default App
