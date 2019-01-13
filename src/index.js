import React, { Component } from 'react';
import { render } from 'react-dom'; 
import styles from './scss/main.scss'; 

console.warn('>>>>------------> ', styles);

class App extends Component {
    render () {
        return (<div>
            <h1 className={styles['title_1']}>Título 1</h1>
            <h2 className={styles['title_2']}>Título 2</h2>
            <div className={[styles.arrow, styles.icon].join(" ")}></div>
            <div>Contenido</div>
        </div>);
    }
}
 
render(<App/>, document.getElementById("app")); 