import {Component} from "react";

import styles from "./my-books-form.module.scss";


//створюємо класовий компонент
class MyBooksForm extends Component {
    state = { // в state ми будемо зберігати всі класові компоненти
        title: "", 
        author: "",
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
        //console.log(name);
        //console.log(value);
    }

        handleSubmit = (e) => {
            e.preventDefault();
            this.reset();
        }

        reset() {
            this.setState({title: "", author: ""})
        }

        render() {
            const {title, author} = this.state;
            
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label>Book title</label>
                <input value={title} name="title" onChange={this.handleChange} className={styles.textField} placeholder="Book title"/>
            </div>
            <div className={styles.formGroup}>
                <label>Book author</label>
                <input value={author} name="author" onChange={this.handleChange} className={styles.textField} placeholder="Book author"/>
            </div>
            <button type="submit">Add book</button>
        </form>
        )

    }

}

export default MyBooksForm;