import React from "react"
import ConnectionBP from './Picture/kapcsolatfelvetel.jpg'
import './Connection.css'

function Connection() {
    return (
        <section className="connectionSection">
            <div className="connectionTitleDiv">
                <h1 className="connectionTitle">Kapcsolatfelvétel</h1>
            </div>
            <div className="conTitleDiv">
                <h2 className="conTitle1">Kérdése van?</h2>
                <h2 className="conTitle1">Írjon nekünk és hamarosan válaszolunk.</h2>
            </div>
            <img src={ConnectionBP} className='connectionBP' />

            <form className="connectionForm">
                <label className="conLabel">
                    Név
                    <input className="input" type="text" name="name" />
                </label>
                <label className="conLabel">
                    Tárgy
                    <input className="input" type="text" name="subject" />
                </label>
                <label className="conLabel">
                    Üzenet
                    <input className="inputMess" type="text" name="message" />
                </label>
                <input className="input" type="submit" value="Küldés" id="conBtn" />
            </form>

            <div className="map">

                <iframe className="mapPic"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.6043078285147!2d19.069207415817555!3d47.478139804836076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dcfef6773981%3A0xdef6e2e959da0aa9!2sBudapest%2C%20Vaskapu%20u.%2010-14%2C%201097!5e0!3m2!1shu!2shu!4v1649882127189!5m2!1shu!2shu"

                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />


            </div>
            <div className="connectionData">
                <h1>Elérhetőségeink</h1>
                <div>
                    <h2>+36 30 6897 726</h2>
                </div>
                <div>
                    <h2>vasgarazs@gmail.com</h2>
                </div>
                <div>
                    <h2>1097 Budapest, Vaskapu utca 10-14.</h2>
                </div>
            </div>

        </section>
    )
}

export default Connection;
