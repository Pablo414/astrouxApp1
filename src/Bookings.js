import React from 'react';

function Bookings(props) {
  return (
    <div>
      
      <div style={{margin: "auto", marginTop: 84}}>
	<rux-timeline timezone="America/New_York" start="2023-09-22T00:00:00.000Z" end="2023-09-24T00:00:00.000Z" playhead="2023-09-22T04:00:00.000Z" interval="hour" zoom="2">
		<rux-track>
			<div slot="label">Region 1</div>
			<rux-time-region start={props.booking.time_start} end="2023-09-22 03:32:15.811" status="serious">
				{[props.booking.username]} 
				<rux-pop-up open="false" placement="bottom-end" enable-animation-frame>
	<rux-icon icon="apps" slot="trigger"></rux-icon>
	<p>
		booking_id: {props.booking.booking_id},
		object_id: {props.booking.object_id},
		station_id: {props.booking.station_id}, 
  		time_aos: {props.booking.time_aos},
		<br></br>
		time_end: {props.booking.time_end},
		time_los: {props.booking.time_los}, 
  		<br></br>
		time_start: {props.booking.time_start},
		username: {props.booking.username} 
	</p>
	</rux-pop-up>
	</rux-time-region>
	</rux-track>
		<rux-track>
			<div slot="label">Region 2</div>
			<rux-time-region start="2021-02-01T10:00:00Z" end="2021-02-01T12:00:00Z" status="serious">Event 2.1</rux-time-region>
		</rux-track>
		<rux-track>
			<div slot="label">Region 3</div>
			<rux-time-region start="2021-02-01T00:00:00Z" end="2021-02-02T02:00:00Z" status="standby">Event 3.1</rux-time-region>
		</rux-track>
		<rux-track>
			<div slot="label">Region 4</div>
			<rux-time-region start="2021-02-01T03:00:00Z" end="2021-02-02T04:33:00Z" status="critical">Event 4.1</rux-time-region>
		</rux-track>
		<rux-track>
			<div slot="label">Region 5</div>
			<rux-time-region start="2021-02-01T05:00:00Z" end="2021-02-02T05:33:00Z" status="caution">Event 5.1</rux-time-region>
		</rux-track>
		<rux-track>
			<div slot="label">Region 6</div>
			<rux-time-region start="2021-02-01T05:00:00Z" end="2021-02-02T05:33:00Z" status="normal">Event 6.1</rux-time-region>
		</rux-track>
		<rux-track>
			<div slot="label">Region 7</div>
			<rux-time-region start="2021-02-01T05:00:00Z" end="2021-02-02T05:33:00Z" status="normal">Event 7.1</rux-time-region>
		</rux-track>
		<rux-track slot="ruler">
			<rux-ruler></rux-ruler>
		</rux-track>
	</rux-timeline>
</div>
    </div>
  )
}

export default Bookings
