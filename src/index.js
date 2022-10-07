import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app'
ReactDOM.render(<App/>, document.getElementById('root'))

// Вариант 1 - через function
// Значения атрибутов props только для чтения, больше изменять их нельзя
/*
function WhoAmI (props) {
    return (
//        <React.Fragment>
//          <h1>My name is {props.name}, surname - {props.surname}</h1>
//          <a href={props.link} >My profile</a>
//        </React.Fragment>
//то же, с другим синтаксисом
        <>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link} >My profile</a>
        </>
    )
)
*/

// Вариант 2, в стиле ООП, через КЛАСС. 
// В state храним активное состояние компонента, то, что будет меняться.
// для изменения state нужны события и обработчики событий
//class WhoAmI extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            years: 19
        }
        //теперь необходимо ПРИВЯЗАТЬ обработчик события к контексту вызова this
        //для этого есть 3 СПОСОБА
        //1 способ: с помощью bind жестко забиндить к this каждого новосозданного объекта
        this.nextYear = this.nextYear.bind(this);
    }
    nextYear() {
        //this.state.years++; СРАЗУ ОБРАТИВШИСЬ к свойству в state, 
        // просто перезаписать его не получится, нужно использовать this.setState
        // например так:
        //this.setState({years: 27})
        // так как state обновляется асинхронно, то есть может не успеть
        //выполниться до следующего обращени, и получится ошибка. 
        // следующим образом мы испоьзуем предыдущее состояние state:
        this.setState(state => ({
            years: ++state.years
        }))
    }
*/
//2й способ
//class WhoAmI extends React.Component {
/*
    constructor(props) {
        super(props);
        this.state = {
            years: 19
        }
        this.nextYear = () => {
            this.setState(state => ({
                years: ++state.years
            }))
        }
    }
*/
//СПОСОБ 3 - CLASS FIELDS. Функции можно записывать не только в объект,
//но и просто так. В том числе и STATE
//class WhoAmI extends React.Component {
/*
    state = {
        years: 19
    }
    nextYear = () => {
        this.setState(state => ({
            years: ++state.years
        }))
    }
    // ДАЛЕЕ
    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;  //вытаскиваем
        return (
            // вытащив... 2мя строчками ниже вместо этого <h1>My name is {name}, surname - {surname}, years = {this.state.years}</-!h1>
            <>  <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <a href={link} >My profile</a>
            </>
        )
    }
}
*/
// И НАКОНЕЦ
/*
const All = () => {
    return (
        <>
            <WhoAmI name="John" surname="Smith" link="fb.com"/>
            <WhoAmI name="Sam" surname="McBurger" link="sam.com"/>
            <WhoAmI name="Otto" surname="Bergner" link="mmm.com"/>
        </>
    )
}
ReactDOM.render(<All/>, document.getElementById('root'))
*/


