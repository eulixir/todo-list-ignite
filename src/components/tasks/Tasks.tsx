import { TaskProps } from '../../App'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskProps[]
}
export const Tasks = ({ tasks }: TasksProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className={styles.task} key={task.id}>
          <p>{task.title}</p>
          <div>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  )
}
