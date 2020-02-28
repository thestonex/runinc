import React from 'react'
import event from '../../gfx/img/event.jpg';
import './nextevent.scss'

const NextEvent = () => {
    return (
        <div className="containereventgrid">
            <div className="ekstraeventgrid">
                <div className="eventgrid">
                    <img src={event} alt="" className="eventimg" />
                    <h3 className="nextevent">NEXT EVENT</h3>
                </div>
            </div>

            <div className="events">
                <h2 className="eventsfont">Events</h2>
                <p className="bigger">COPENHAGEN MARATHON</p>
                <p className="smaller">DEN 29. MAJ 2018</p>
                <p className="bigger">AARHUS CITY RUN</p>
                <p className="smaller">DEN 1.JUNI 2018</p>
                <p className="bigger">BERLIN MARATHON</p>
                <p className="smaller">DEN 6.JUNI 2018</p>
            </div>
        </div>
    )
}

export default NextEvent
