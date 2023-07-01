import {Component} from "react";

import initialState from "./initialState";

import styles from "./my-books-form.module.scss";


//створюємо класовий компонент
class MyBooksForm extends Component {
    state = { // в state ми будемо зберігати всі класові компоненти
       ...initialState
    }

    handleChange = ({target}) => {
        const {name, value, checked, type} = target;
        const newValue = type === "checkbox" ? checked : value;
        this.setState({
            [name]: newValue
        })
        //console.log(name);
        //console.log(value);
    }

        handleSubmit = (e) => {
            e.preventDefault();
            const {onSubmit} = this.props;
            onSubmit({...this.state});
            this.reset();
            
        }

        reset() {
            this.setState({...initialState})
        }

        render() {
            const {title, author, favorite} = this.state;
            
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
            <div className={styles.formGroup}>
                <label>Favorite</label>
                <input checked={favorite} name="favorite" onChange={this.handleChange} className={styles.checkbox} type="checkbox" />
            </div>
            <button type="submit">Add book</button>
        </form>
        )

    }

}

export default MyBooksForm;