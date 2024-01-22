import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList';
import Done from './components/Done/Done';

function App() {
  const [tasks, setTask] = useState([
      {category: 'Дела на кухне', tasks:['Помыть посуду', 'Помыть газовую плиту', 'Протереть столы'], id: 1},
      {category: 'За компьтером', tasks:['Устанавить Linux', 'Посмотреть 58й урок', 'Сделать Д/з'], id: 2},
      {category: 'Купить в магазине', tasks:['Сахар', 'Молоко', 'Мука'], id: 3},
      {category: 'Другие дела', tasks:['Искупать сына', 'Проверить д/з сына', 'Готовить'], id: 4}
  ]);

  const [doneTasks, setDoneTasks] = useState([]);

  const doneTask = (id:number) => {
      let doneTask;
      setTask(prevState => {
          prevState.forEach((task, i) => {
              if(task.id === id){
                  doneTask = task
                  prevState.splice(i, 1)
                  }
           })
          return [...prevState]
          });
      setDoneTasks(prevState => {
          return [...prevState, doneTask]
      })
    }

  return (
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-center fw-bold text-uppercase" href="#">Todo list</a>
            </div>
        </nav>
        <div className="d-flex">
            <div className="w-50">
                <TodoList doneTask={doneTask} tasks={tasks} />
            </div>
            <div className="w-50">
                <Done tasks={doneTasks}/>
            </div>
        </div>
    </>
  )
}

export default App
