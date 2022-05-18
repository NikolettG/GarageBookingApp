import React from 'react'
import LogBackroundPic from './Picture/Regisztráció.png'
import LogBackroundPicMob from './Picture/Garázs bérlés - mobil.png'
import './Login.css'
import companyPic from './Picture/ceg.png'
import personPic from './Picture/szemely.png'

{/*I made a function for faster and cleaner coding.*/ }

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img" src={props.img} />
                <h2 className="card-titles">{props.title}</h2>
            </div>
        </div>
    )
}


function Login() {
    return (

        <div className='loginSection'>
            <img className="logBackroundPic" src={LogBackroundPic} />
            <img className="logBackroundPicMob" src={LogBackroundPicMob} />
            <div className='logDiv'>
                <h2 className='registrationTitle'>Regisztráljon</h2>
                <h3 className='registrationText'>és szerezze meg a megfelelő garázst.</h3>
                <div className='buttonDiv'>
                    <div className='registrationButton' id='button'>Regisztráció</div>
                    <div className='loginButton' id='button'>Belépés</div>
                </div>

                {/*I call the Card components in a main div*/}

                <div className='cardsDiv'>
                    <Card
                        img={companyPic}
                        title="Cég"
                    />
                    <Card
                        img={personPic}
                        title="Magánszemély"
                    />
                </div>
            </div>
        </div>

    )
}
export default Login;