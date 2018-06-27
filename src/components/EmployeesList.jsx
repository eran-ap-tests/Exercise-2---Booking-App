import React, {Component} from 'react';
import {APIURLs} from '../constants/apis_constants';
import EmployeeService from '../services/employeeService';
import axios from 'axios';
import TopEmployees from './TopEmployees';
export default class EmployeesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topEmployees: []
        }
    }
    componentDidMount() {
        const bookingsInformationURL = APIURLs.bookingsURL;
        axios.get(bookingsInformationURL).then(results => {
            this.setState({
                topEmployees: EmployeeService.getTopEmployeeSellers(results.data)
            });
        }   
        )
    }
    render() {
       if (this.state.topEmployees.length > 0) {
        return (
                <TopEmployees {...this.state} />
            );
        }
        else return (
            <div>Loading...</div>
        );
    }
}