import _ from 'lodash';
import * as moment from 'moment';
import DateService from './dateService';
class EmployeeService {
    getTopEmployeeSellers(bookings) {
        let employeesData = {};
        bookings.forEach(bookingInfo => {
            if (this.employeeInfoExistsInBooking(bookingInfo)) {
                if (!employeesData[bookingInfo.employee.id]){
                    employeesData[bookingInfo.employee.id] = this.getEmployeeData(bookingInfo);
                }
                this.addHoursSoldToEmployee(bookingInfo, employeesData[bookingInfo.employee.id]);
            }
        });
        return this.getTopEmployeesArr(employeesData);
    }

    employeeInfoExistsInBooking(bookingInfo){
        return !!bookingInfo.employee;
    }

    getEmployeeData (bookingInfo) {
        const employeeCopy = Object.assign({}, bookingInfo.employee);
        return Object.assign({}, employeeCopy, {hoursSold: 0});
    }

    addHoursSoldToEmployee(bookingInfo, employee) {
        const convertedCheckInDate = DateService.formatDate(bookingInfo.checkInDate);
        const convertedCheckOutDate = DateService.formatDate(bookingInfo.checkOutDate);
        const checkInDate = moment(new Date(convertedCheckInDate));
        const checkOutDate = moment(new Date(convertedCheckOutDate));
        const dateDifference = moment.duration(checkOutDate.diff(checkInDate));
        employee["hoursSold"] += dateDifference.asHours();
    }

    getTopEmployeesArr(employeesData){
        let employeesArr = [];
        for (let key in employeesData) {
            employeesArr.push(employeesData[key]);
        }
        return _.orderBy(employeesArr,"hoursSold",'desc').slice(0,3);
    }
}

const employeeService = new EmployeeService();
export default employeeService;