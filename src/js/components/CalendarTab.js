import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';

class CalendarTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calendars: [],
        };
        this.getCalendarsFromAPI = this.getCalendarsFromAPI.bind(this)
        // this.getUetCalendars = this.getUetCalendars.bind(this);
        // this.getGoogleCalendars = this.getGoogleCalendars.bind(this);
        // this.getCalendarsFromEmail = this.getCalendarsFromEmail.bind(this);
    }

    async componentDidMount() {
        await this.getCalendarsFromAPI(`/rest/uet-courses-calendar`);
        await this.getCalendarsFromAPI(`/rest/google-calendar`);
        await this.getCalendarsFromAPI(`/rest/google-gmail`);
    }

    async getCalendarsFromAPI(url) {
        await axios.get(url)
            .then((res) => {

                var calendarsReSponse = res.data;

                let listCalendarsTemp = [...this.state.calendars];

                for(var i = 0; i < calendarsReSponse.length; i++){
                    listCalendarsTemp.push(calendarsReSponse[i]);
                }

                this.setState({calendars : listCalendarsTemp});

                // this.setState({uetCalendars : res.data});
                console.log(this.state.calendars);
            })
            .catch(error => console.log(error));
    }

    // getGoogleCalendars(){
    // //     /rest/google-mail
    // // /rest/google-calendar
    // }
    //
    // getCalendarsFromEmail(){
    // }

    render() {
        return (
            <div>
                {/*<div>*/}
                {/*    <div>*/}
                {/*        <button className="btn btn-primary d-block w-100 dongbo"*/}
                {/*                type="button"*/}
                {/*                onClick={this.getUetCalendars}*/}
                {/*        >Đồng bộ</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <h2>{this.state.name}</h2>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                    events={this.state.calendars}
                />
            </div>

        );
    }
};

export default CalendarTab;
