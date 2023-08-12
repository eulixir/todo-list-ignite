import { useState } from 'react'

import { Header } from './components/header/Header'
import { TaskInput } from './components/taskInput/TaskInput'
import { Tasks } from './components/tasks/Tasks'

import styles from './App.module.css'
import noteIcon from './assets/note.svg'

export interface TaskProps {
  id: number
  title: string
  isComplete: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[] | []>([])

  const pushNewTask = (task: TaskProps) => {
    setTasks([...tasks, task])

    return
  }

  const updateStatus = (id: number, state: boolean) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: state,
        }
      } else {
        return task
      }
    })

    setTasks(updatedTask)

    return
  }

  const calcCompletedTasks = () => {
    const completedTasks = tasks.filter((task) => task.isComplete === true)

    if (completedTasks.length === 0) {
      return 0
    }

    return `${completedTasks.length} de ${tasks.length}`
  }

  const removeTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)

    setTasks(updatedTasks)

    return
  }

  const orderTasksByStatus = () => {
    const completedTasks = tasks.filter((task) => task.isComplete)
    const toCompleteTasks = tasks.filter((task) => !task.isComplete)

    return [...toCompleteTasks, ...completedTasks]
  }

  return (
    <>
      <Header />
      <div className={styles.taskContainer}>
        <TaskInput createTask={pushNewTask} />

        <div className={styles.taskInfo}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Concluídas <span>{calcCompletedTasks()}</span>
          </p>
        </div>

        <div className={styles.tasksContainer}>
          {tasks.length === 0 ? (
            <div className={styles.emptyContainer}>
              <div>
                <img src={noteIcon} alt="" />
                <h6>Você ainda não tem tarefas cadastradas</h6>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          ) : (
            <Tasks
              tasks={orderTasksByStatus(tasks)}
              updateStatus={updateStatus}
              removeTask={removeTask}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
