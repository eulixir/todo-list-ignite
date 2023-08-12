import styles from './NoTasks.module.css'

import noteIcon from '../../assets/note.svg'

export const NoTasks = () => {
  return (
    <div className={styles.emptyContainer}>
      <div>
        <img src={noteIcon} alt="" />
        <h6>Você ainda não tem tarefas cadastradas</h6>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
