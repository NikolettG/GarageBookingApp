import React, { lazy, Suspense } from 'react'
import './Main.css'
import Navbar from './Navbar.js'
import picture from './Picture/Belépés.png'
import pictureMob from './Picture/Landoló oldal - mobil.svg'
const Login = lazy(() => import('./Login.js'))
const Steps = lazy(() => import('./Steps.js'))
const Garage = lazy(() => import('./Garage.js'))
const Connection = lazy(() => import('./Connection.js'))
const News = lazy(() => import('./News.js'))
const Footer = lazy(() => import('./Footer.js'))

function Main() {
    return (
        <Suspense fallback={<div>
            <h1 className='loadingTitle'>Betöltés...</h1>
        </div>}>

            <div className='contetnt'>

                <Navbar />

                {/*This is the first Page*/}
                <div>
                    <div className="text_div">
                        <h1 className="welcome_text">Tisztelt Érdeklődő!</h1><br></br>
                        <p id="p">Cégünk, a Garázs Kft. a 1097 Budapest, Garázs utca 10. címen, az épület -2. szintjén, 50 garázzsal
                            és négy tárolóhellyel rendelkezik, melyek bérbe adásával 15 éve áll ügyfelei szolgálatában.</p><br></br>
                        <p id="p">Biztonságos, zsáraz és fedett, rendszeresen ellenőrzött, takarított menedéket nyújtunk ügyfelink
                            gépjárműveinek.</p><br></br>
                        <p id="p">Budapest egyre jobban fejlődő, frekventált részén, egyszerű ki-és behajtással, korrekt árakkal és
                            megbíztahó, gyors ügykezeléssel várjuk érdeklődését!</p>
                    </div>
                    <div>
                        <img className="picture1" src={picture} />
                        <img className="pictureMob" src={pictureMob} />
                    </div>

                </div>
                <div className="headerbottomDiv"><h1 className="headerbottomText">Garázst bérelnél?</h1></div>

                {/*Here comes the pages for the Landing page*/}

                <Login />
                <Steps />
                <Garage />
                <Connection />
                <News />
                <Footer />
            </div>

        </Suspense>

    )
}



export default Main;