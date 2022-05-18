import React from 'react'
import './Garage.css'
import GarageBGP from './Picture/garazsberles.jpg'
import { ArrowRightAlt } from '@material-ui/icons'
import Booked from './Picture/booked.png'
import Chose from './Picture/chose.png'

function Space(props) {
    return (
        <div className={props.class}>
            <h2 className='spaceId'>{props.id}</h2>
            <h3 className='spaceSize'>{props.size}</h3>
        </div>
    )
}



function Garage() {
    return (
        <>
            <section className='garageSection'>
                <div className='garageBooking'>
                    <h1 className='garageBookingText'>Garázsfoglalás</h1>
                </div>
                <div>
                    <div className='spaceMain'>
                        <div className='line1' id='line'></div>
                        <div className='line2' id='line'></div>
                        <div className='line3' id='line'></div>
                        <div className='line4' id='line'></div>
                        <div className='line5' id='line'></div>
                        <div className='line6' id='line'></div>
                        <div className='line7' id='line'></div>
                        <div className='garageArr'>
                            <ArrowRightAlt className='gArr' />
                        </div>

                        <div className='spaceDiv1'>
                            <Space
                                class='stand'
                                id='B201'
                                size='12m³'
                            />
                            <Space
                                class='stand'
                                id='B202'
                                size='12m³' />
                            <div id='s'></div>
                            <Space
                                class='stand'
                                id='C243'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C242'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C241'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C240'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C239'
                                size='12m³' />
                            <div id='s'></div>
                            <Space
                                class='stand'
                                id='C238'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C237'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C236'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C235'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C234'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C233'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C232'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C231'
                                size='13m³' />
                            <Space
                                class='stand'
                                id='C230'
                                size='12m³' />
                        </div>
                        <div className='spaceDiv2'>
                            <Space
                                class='lay'
                                id='B211'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B212'
                                size='12m,5³' />
                            <Space
                                class='lay'
                                id='B2013'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B214'
                                size='13,13m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                        </div>
                        <div className='spaceDiv3'>
                            <Space
                                class='lay'
                                id='B211'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B212'
                                size='12m,5³' />
                            <Space
                                class='lay'
                                id='B2013'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B214'
                                size='13,13m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                        </div>
                        <div className='spaceDiv4'>
                            <Space
                                class='lay'
                                id='B211'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B212'
                                size='12m,5³' />
                            <Space
                                class='lay'
                                id='B2013'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B214'
                                size='13,13m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                        </div>
                        <div className='spaceDiv5'>
                            <Space
                                class='stand'
                                id='C238'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C237'
                                size='12m³' />
                            <Space
                                class='stand'
                                id='C236'
                                size='12m³' />
                        </div>
                        <div className='spaceDiv6'>
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                        </div>
                        <div className='spaceDiv7'>
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                        </div>
                        <div className='spaceDiv8'>
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                            <Space
                                class='lay'
                                id='B215'
                                size='12m³' />
                        </div>
                    </div>
                    <div></div>

                    <div className='garageTextDiv2'>
                        <div className='symbolDiv' id='price'>
                            <h2 className='price'>Áraink</h2>
                            <h3 className='priceInHuf'>23.000 Ft</h3>
                        </div>
                        <h2 className='symbolsTitle'>Jelölések</h2>
                        <div id='symbolDiv'>
                            <img src={Booked} id='garagePic' className="bookedPic" />
                            <h3 className='bookedSy'>Foglalt helyek</h3>
                        </div>
                        <div id='symbolDiv'>
                            <img src={Chose} id='garagePic' className="chosedPic" />
                            <h3 className='chosedSy'>Ön által választott hely</h3>
                        </div>
                        <div id='symbolDiv'>
                            <div className='arrSy'>
                                <ArrowRightAlt className='arrSymbol' />
                            </div>
                            <h3 className='entrySy'>Bejárat</h3>
                        </div>


                    </div>
                </div>
                <img className='garageBGP' src={GarageBGP} />
            </section>
        </>
    )
}
export default Garage;