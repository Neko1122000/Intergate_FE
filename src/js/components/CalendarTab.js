import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function SecondTab() {
    return (
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            weekends={true}
            events={[
                { title: 'event 1', date: '2021-11-01' },
                { title: 'event 2', date: '2021-11-02' }
            ]}
        />
    );
};
