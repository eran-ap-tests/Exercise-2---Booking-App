import React, { Component } from 'react';
//import styles from './App.module.scss';
import HotelComponent from './Hotel'
import EmployeesComponent from './EmployeesList';
import '../styles/app.scss';
export default class App extends Component {
    render() {
        return (
            <div className="wrapper"> 
                <div className="page-content">
                    <HotelComponent />
                    <EmployeesComponent />
                </div>
            </div>
        );
    }
}