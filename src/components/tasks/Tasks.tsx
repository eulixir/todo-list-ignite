import { TaskProps } from '../../App'
import styles from './Tasks.module.css'

import { Circle, CheckCircle, Trash } from 'phosphor-react'
import { FormEvent } from 'react'
interface TasksProps {
  tasks: TaskProps[]
  updateStatus: (id: number, state: boolean) => void
  removeTask: (id: number) => void
}

interface handleUpdateStatusProps {
  event: FormEvent
  id: number
  isCompleted: boolean
}

export const Tasks = (props: TasksProps) => {
  const { updateStatus, tasks, removeTask } = props

  const handleUpdateStatus = ({
    event,
    id,
    isCompleted,
  }: handleUpdateStatusProps) => {
    event.preventDefault()

    if (isCompleted) {
      return updateStatus(id, false)
    }

    return updateStatus(id, true)
  }

  return (
    <div>
      {tasks.map((task) => (
        <div className={styles.task} key={task.id}>
          <form
            onSubmit={(event) =>
              handleUpdateStatus({
                event,
                id: task.id,
                isCompleted: task.isComplete,
              })
            }
          >
            {task.isComplete ? (
              <button className={styles.completed}>
                <CheckCircle size={24} />
              </button>
            ) : (
              <button className={styles.toComplete}>
                <Circle size={24} />
              </button>
            )}
          </form>

          <p>{task.title}</p>

          <button
            className={styles.removeIcon}
            onClick={() => removeTask(task.id)}
          >
            <Trash size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}
