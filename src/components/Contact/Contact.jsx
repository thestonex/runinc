import React from 'react'
import './contact.scss'
import Maps from '../../gfx/img/map.JPG'


const Contact = () => {
    return (
        <div className="Contactcontainer">

            <div className="map">
                <img src={Maps} alt=""/>
            </div>

            <div className="contactinfo">
                    <h1>RUNNIC</h1>
                    <p>Kannikegade 12</p>
                    <p>8000 århus c</p>
                    <a className="tele" href="tel:1-26-12-2696">Telefon 26-12-2696</a>
                    <a className="mail" href = "info@runnic.dk">info@runnic.dk</a>

            </div>

            <div className="tekstboks">
                <h1>Send en Besked</h1>

                <br></br>
                <form>
                    <label for="fname">Navn:</label>
                    <br></br>
                    <input type="text" id="fname" name="fname"></input>
                    <br></br>
                    <label for="email">email:</label>
                    <br></br>
                    <input type="text" id="email" name="email"></input>
                    <br></br>
                    <label for="tele">Telefon Nummer:</label>
                    <br></br>
                    <input type="text" id="tele" name="tele"></input>
                    <br></br>
                    <label for="tekstboks">tekstboks:</label>
                    <br></br>
                    <textarea id="tekstboks" rows="4" cols="20"></textarea>
                    <br></br>
                    <button className="blackbutton">send en Besked</button>
                    
                </form>
            </div>

            <div className="contactmapbar">
                Contact
            </div>
            
        </div>
    )
}

export default Contact
