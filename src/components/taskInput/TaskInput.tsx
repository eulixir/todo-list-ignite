import { FormEvent, useState } from 'react'
import { TaskProps } from '../../App'
import plusIcon from '../../assets/plusIcon.svg'

import styles from './TaskInput.module.css'

interface TaskInputProps {
  createTask: (task: TaskProps) => void
}

export const TaskInput = ({ createTask }: TaskInputProps) => {
  const [tiping, setTiping] = useState('')

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()

    const newTask = buildNewtask()

    createTask(newTask)

    return
  }

  const buildNewtask = () => {
    return {
      id: Math.random(),
      title: tiping,
      isComplete: false,
    }
  }

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          value={tiping}
          onChange={(e) => setTiping(e.target.value)}
          placeholder="Adicione uma tarefa"
        />
        <button type="submit">
          Criar <img src={plusIcon} />
        </button>
      </form>
    </div>
  )
}
