import styles from "./vote-block.module.scss"

const VoteBlock = ({title, children}) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>{title}</h4>
            {children}
        </div>
    )
}

export default VoteBlock;