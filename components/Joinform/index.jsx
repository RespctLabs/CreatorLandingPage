import React, {useState} from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
export default class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({email: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An email was submitted: ' + this.state.email);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>

                <div className={styles.headerContainer}>
                    Join us
                </div>
                <br/>

                <div className={styles.formContainer}>
                    <div className={styles.buttonContainer} >
                            <div className={styles.textButton}>
                                <Link href="/">
                                    <a>Creator</a>
                                </Link>
                            </div>

                            <div className={styles.textButton}>
                                <Link href="/">
                                    <a>Fan</a>
                                </Link>
                            </div>
                    </div>
                    <div className={styles.formContainer}>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.email} onChange={this.handleChange} />
                            <br/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>


            </div>
        </div>
      );
    }
  }