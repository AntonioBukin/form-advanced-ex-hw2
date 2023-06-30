import styles from "./my-booksPages.module.scss";

const MyBooksPages = ({items, onDeleteBook}) => { //items (це props, список книг, який ми хочемо вивести)
    const elements = items.map(({id, title, author }) => (
        <li className={styles.listItem} key={id}>
            Title: {title}. Author: {author}. <button onClick={() => onDeleteBook(id)}>delete</button>
        </li>
    ))

    return (
        <ol className={styles.list}>
        {elements}
        </ol>
    )

}

export default MyBooksPages;