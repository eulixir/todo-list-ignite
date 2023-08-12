import { useState } from 'react'

import { Header } from './components/header/Header'
import { TaskInput } from './components/taskInput/TaskInput'
import { Tasks } from './components/tasks/Tasks'

import styles from './App.module.css'
import { NoTasks } from './components/noTasks/NoTasks'

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

  const calcCompletedTasks = () => {
    const completedTasks = tasks.filter((task) => task.isComplete === true)

    if (completedTasks.length === 0) {
      return 0
    }

    return `${completedTasks} de ${completedTasks.length}`
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
          {tasks.length === 0 ? <NoTasks /> : <Tasks tasks={tasks} />}
        </div>
      </div>
    </>
  )
}

export default App
