import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';

class CalendarTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uetCalendars: [],
        };
        this.getUetCalendars = this.getUetCalendars.bind(this);
        this.getGoogleCalendars = this.getGoogleCalendars.bind(this);
        this.getCalendarsFromEmail = this.getCalendarsFromEmail.bind(this);
    }

    async componentDidMount() {
        await this.getUetCalendars();
        await this.getGoogleCalendars();
        await this.getCalendarsFromEmail();

    }

    async getUetCalendars() {
        await axios.get(`/rest/uet-courses-calendar`)
            .then((res) => {

                var uetCalendarsReSponse = res.data;

                let listCalendarsTemp = [...this.state.uetCalendars];

                for(var i = 0; i < uetCalendarsReSponse.length; i++){
                    listCalendarsTemp.push(uetCalendarsReSponse[i]);
                }

                this.setState({uetCalendars : listCalendarsTemp});

                // this.setState({uetCalendars : res.data});
            })
            .catch(error => console.log(error));
    }

    getGoogleCalendars(){
    }

    getCalendarsFromEmail(){
    }

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
                    events={this.state.uetCalendars}
                />
            </div>

        );
    }
};

export default CalendarTab;
