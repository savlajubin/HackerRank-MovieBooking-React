import React from 'react';
import './App.css';
import 'h8k-components';
import { TicketBooking } from './components/TicketBooking';
const title = "Ticket Booking";

const App = () => {
    return (
        <div className="App">
			<h8k-navbar header={title}></h8k-navbar>
			<TicketBooking />
        </div>
    );
}

export default App;
