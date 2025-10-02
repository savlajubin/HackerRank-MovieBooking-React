import React from "react"

import "./TicketBooking.css"
export const TicketBooking = () => {
	const rows = 10
	const cols = 10
	const [bookedSeats, setBookedSeats] = React.useState([])
	const [selectedSeats, setSelectedSeats] = React.useState([])

	let seatRowsTimeAuto = ""
	for (let i = 0; i <= cols; i++) {
		seatRowsTimeAuto += 'auto '
	}

	const handleSeatClick = (row, col) => {
		const seatId = `${row}${col}`
		if (bookedSeats.includes(seatId)) return
		if (selectedSeats.includes(seatId)) {
			setSelectedSeats(selectedSeats.filter(s => s !== seatId))
		} else {
			setSelectedSeats([...selectedSeats, seatId])
		}
	}

	const handleBookSeats = () => {
		if (selectedSeats.length === 0) {
			window.alert('Please select at least one seat')
			return
		}
		setBookedSeats([...bookedSeats, ...selectedSeats])
		setSelectedSeats([])
	};

	const handleClear = () => {
		setSelectedSeats([])
	};

	const handleReset = () => {
		setBookedSeats([])
		setSelectedSeats([])
	};

	return (
		<div className="mt-50 layout-column justify-content-center align-items-center">
			<div className="display-flex">
				<button data-testid="book-seats" onClick={handleBookSeats}>Book Seats</button>
				<button data-testid="clear-selection" className="danger" onClick={handleClear}>Clear</button>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: `${seatRowsTimeAuto}` }}>
				{Array(rows).fill(0).map((_, row) => (
					<div key={row} style={row === 4 ? { marginRight: '40px' } : null}>{
						Array(cols).fill(0).map((_, col) => {
							const seatId = `${row}${col}`
							let className = 'seat'
							if (bookedSeats.includes(seatId)) {
								className = 'disabled seat'
							} else if (selectedSeats.includes(seatId)) {
								className = 'selected seat'
							}
							return (
								<div
									data-testid={seatId}
									className={className}
									key={seatId}
									onClick={() => handleSeatClick(row, col)}
								>
									{`${String.fromCharCode(65 + col)}${row}`}
								</div>
							)
						})
					}</div>
				))}
			</div>
			<br />
			<button data-testid="reset" onClick={handleReset}>Reset Bookings</button>
		</div>
	);
	}