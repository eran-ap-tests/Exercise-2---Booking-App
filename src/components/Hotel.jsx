import React, {Component} from 'react';
import {APIURLs} from '../constants/apis_constants';
import axios from 'axios';
import '../styles/hotel.scss';
class HotelComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotelCurrentStatusData: {}
        };
    }

    componentDidMount () {
        const hotelInfoURL = APIURLs.bookingSnapshotURL;
        axios.get(hotelInfoURL).then(
            results => {
                console.log(results.data);
                this.setState ({
                    hotelCurrentStatusData: results.data
                }
                );
            }
        );
    }
    
    render () {
        //console.log (Object.keys(this.state.hotelCurrentStatusData));
        if (Object.keys(this.state.hotelCurrentStatusData).length !== 0) {
            const currentReservedRooms = this.state.hotelCurrentStatusData.reservedRooms;
            const currentAvailableRooms = this.state.hotelCurrentStatusData.availableRooms;
            const currentCheckedInRooms =this.state.hotelCurrentStatusData.checkedIn;
            return (
                <div className="hotel-wrapper">
                    <div className="hotel-stats">
                        <span className="number">{currentAvailableRooms}</span>
                        <span className="title">Available Rooms</span>
                    </div>
                    <div className="hotel-stats">
                        <span className="number">{currentReservedRooms}</span>
                        <span className="title">Reserved Rooms</span>
                    </div>
                    <div className="hotel-stats">
                        <span className="number">{currentCheckedInRooms}</span>
                        <span className="title">Checked In Rooms</span>
                    </div>
                </div>
            );
        }
        else {
            return (
            <div>Loading...</div>
            )   
        }
    }
}

export default HotelComponent;