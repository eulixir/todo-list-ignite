import { TaskProps } from '../../App'
import styles from './Tasks.module.css'

import { Circle, CheckCircle, Trash } from 'phosphor-react'
interface TasksProps {
  tasks: TaskProps[]
  updateStatus: (id: number, state: boolean) => void
}

export const Tasks = (props: TasksProps) => {
  const { updateStatus, tasks } = props

  return (
    <div>
      {tasks.map((task) => (
        <div className={styles.task} key={task.id}>
          {task.isComplete ? (
            <button className={styles.completed}>
              <CheckCircle
                onClick={() => updateStatus(task.id, false)}
                size={24}
              />
            </button>
          ) : (
            <button className={styles.toComplete}>
              <Circle size={24} onClick={() => updateStatus(task.id, true)} />
            </button>
          )}

          <p>{task.title}</p>

          <button className={styles.removeIcon}>
            <Trash size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}
