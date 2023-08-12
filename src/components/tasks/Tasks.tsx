import { TaskProps } from '../../App'
import styles from './Tasks.module.css'

interface TasksProps {
  task: TaskProps
}
export const Tasks = (props: TasksProps) => {
  return <div className={styles.tasks}>{props.task.title}</div>
}
