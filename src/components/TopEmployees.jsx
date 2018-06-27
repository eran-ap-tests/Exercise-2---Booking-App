import React from 'react';
import {Image, ProgressBar} from 'react-bootstrap';
//import Progress from 'react-progressbar';
import '../styles/employees.scss';
const TopEmployees = ({topEmployees}) => {
    const maxHours = topEmployees && topEmployees[0] && topEmployees[0].hoursSold;
    const calculatePercent = (employee) => {
        return ((employee.hoursSold / maxHours) * 100)
    }

    const topEmployeesList = topEmployees.map((topEmployee) => {
        console.log(calculatePercent(topEmployee) + " percent");
        return (
            <div className="employee-wrapper" key={topEmployee.id}> 
                <Image className="profile-img" src={topEmployee.profileImageUrl} />
                <div className="name-wrapper">
                    <span className="employee-name">{topEmployee.firstName} {topEmployee.lastName}</span>
                    <ProgressBar now={calculatePercent(topEmployee)} />
                </div>
                <span className="employee-hours">{topEmployee.hoursSold} hours</span>
            </div>
        )
    })
    return (
        <div className="employees-wrapper">
            <span className="employees-stats">Employee stats</span>
            <div className="employees-details">
                {topEmployeesList}
            </div>
        </div>
    )
}
export default TopEmployees;