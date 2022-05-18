import React, { useState } from 'react'
import './Steps.css'
import stepBP from './Picture/Működési folyamat.png'
import TextImput from './Picture/adatbekeres.png'
import Email from './Picture/email.png'
import GarageBooking from './Picture/garazsvalaszto.png'
import Payment from './Picture/fizetes.png'
import Calendar from './Picture/berleskezdete.png'
import Contract from './Picture/szerzodes.png'
import Billingo from './Picture/fiezetes.png'
import Bill from './Picture/szamla.png'
import Garage from './Picture/youtube.png'
import One from './Picture/1.png'
import Two from './Picture/2.png'
import Tree from './Picture/3.png'
import Four from './Picture/4.png'
import Five from './Picture/5.png'
import Six from './Picture/6.png'
import Seven from './Picture/7.png'
import Eight from './Picture/8.png'
import { ArrowRightAlt, ArrowForwardIos, ArrowBackIos, FiberManualRecord } from '@material-ui/icons'



function Steps() {

    let [index, setIndex] = useState(1)

    {/*I call these by Click*/ }

    const NumberPlus = () => {
        setIndex(index + 1)

    }
    const NumberMinus = () => {
        setIndex(index - 1)

    }

    let Number1 = () => {
        setIndex(index = 1)
    }
    let Number2 = () => {
        setIndex(index = 2)
    }
    let Number3 = () => {
        setIndex(index = 3)
    }



    return (
        <>
            <section className='stepsSection'>
                <img className='stepBP' src={stepBP} />
                <div className='stepsTitleDiv'>
                    <h2 className='stepsTitle'>Működési folyamat</h2>
                </div>

                <div className="sliderSection">

                    {/*There is the Icon section, I don't cerate for every 
                    slide a new one, beacuse I change the opacity by ids, 
                    therefore I needed a functions and click events.*/}

                    <div className="iconDiv">
                        <div className={index === 2 ? 'fade' : 'visible'}>
                            <img id='icon' src={TextImput} />
                            <h3 id='iconText'>Adatbekérés</h3>
                        </div>
                        <div className={index === 1 ? 'miniVisible' : 'fade'} >
                            <img id='miniIcon' src={Email} />
                            <ArrowRightAlt className='arrow' id='minArr' />
                        </div>
                        <div className={index === 2 ? 'fade' : 'visible'}>
                            <img id='icon' src={GarageBooking} />
                            <h3 id='iconText'>Garázs kiválasztása</h3>
                        </div>
                        <div className={index === 2 ? 'fade' : 'visible'}>
                            <ArrowRightAlt className='arrow' />
                        </div>
                        <div className={index === 2 ? 'fade' : 'visible'}>
                            <img id='icon' src={Payment} />
                            <h3 id='iconText'>Számlázási időszak kiválasztása</h3>
                        </div>
                        <div className={index === 1 ? 'visible' : 'fade'}>
                            <ArrowRightAlt className='arrow' />
                        </div>
                        <div className={index === 2 ? 'visible' : 'fade'}>
                            <img id='icon' src={Calendar} />
                            <h3 id='iconText'>Bérlés kezdete</h3>
                        </div>
                        <div className={index === 2 ? 'visible' : 'fade'}>
                            <ArrowRightAlt className='arrow' />
                        </div>
                        <div className={index === 2 ? 'visible' : 'fade'}>
                            <img id='icon' src={Contract} />
                            <h3 id='iconText'>Szerződés aláírása</h3>
                        </div>
                        <div className={index === 2 ? 'visible' : 'fade'}>
                            <ArrowRightAlt className='arrow' />
                        </div>
                        <div className={index === 2 ? 'visible' : 'fade'}>
                            <img id='icon' src={Billingo} />
                            <h3 id='iconText'>Fizetés</h3>
                        </div>
                        <div className={index === 2 ? 'visible' : 'fade'}>
                            <ArrowRightAlt className='arrow' />
                        </div>
                        <div className={index === 3 ? 'visible' : 'fade'}>
                            <img id='icon' src={Bill} />
                            <h3 id='iconText'>Számla</h3>
                        </div>
                        <div className={index === 3 ? 'visible' : 'fade'}>
                            <ArrowRightAlt className='arrow' />
                        </div>
                        <div className={index === 3 ? 'visible' : 'fade'}>
                            <img id='icon' src={Garage} />
                            <h3 id='iconText'>Használat</h3>
                        </div>

                    </div >
                    {/*Icon section END*/}

                    {/*Arrows, they call the functions*/}
                    <div>
                        <div className='arrowDiv'>
                            <span className={index <= 1 ? 'hidden' : 'prev'} id='arrow' onClick={NumberMinus}>
                                <ArrowBackIos className='arr' />
                            </span>
                            <span className={index === 3 ? 'hidden' : 'next'} onClick={NumberPlus}>
                                <ArrowForwardIos className='arr' />
                            </span>
                        </div>

                        {/*Dots, they also call the functions, they canges their color*/}
                        <div className='dotsDiv'>
                            <FiberManualRecord className={index == 1 ? 'yellow' : 'dots'} onClick={Number1} />
                            <FiberManualRecord className={index == 2 ? 'yellow' : 'dots'} onClick={Number2} />
                            <FiberManualRecord className={index == 3 ? 'yellow' : 'dots'} onClick={Number3} />
                        </div>

                        {/*Here is start the slider "pages" */}

                        <div className="mainDiv">

                            {/*First "page"*/}

                            <div className={index === 1 ? 'sliderDiv1' : 'hidden'}>

                                <div>
                                    <div>
                                        <img src={One} id='numberIcon' />
                                        <h1 id='stepMains'>Regisztráció</h1>
                                    </div>

                                    <p id='stepText'>A regisztráció során kérjük adja meg személyes adatait. A szerződést a megadott adatok alapján készítjük el.</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={Two} id='numberIcon' />
                                        <h1 id='stepMains'>Garázsbeálló kiválasztása</h1>
                                    </div>

                                    <p id='stepText'>A regisztráció után, a térképen válassza ki az Önnek szimpatikus, szabad helyet.</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={Tree} id='numberIcon' />
                                        <h1 id='stepMains'>Számlázási időszak kiválasztása</h1>
                                    </div>

                                    <p id='stepText'>Kérem jelölje meg a számlázási időszakot.</p>
                                </div>

                            </div>

                            {/*Secound "page"*/}

                            <div className={index === 2 ? 'sliderDiv2' : 'hidden'} >

                                <div>
                                    <div>
                                        <img src={Four} id='numberIcon' />
                                        <h1 id='stepMains'>Bérlés kezdetének időpontja</h1>
                                    </div>

                                    <p id='stepText'>Kérem jelölje meg a bérlés megkezdésének dátumát.</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={Five} id='numberIcon' />
                                        <h1 id='stepMains'>Szerződés aláírása</h1>
                                    </div>

                                    <p id='stepText'>Kérem írja alá a szerződést.</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={Six} id='numberIcon' />
                                        <h1 id='stepMains'>Számla kiállítása</h1>
                                    </div>

                                    <p id='stepText'>A szerződés aláírása után a számla a billingo.hu számlakezelő szolgáltatáson keresztül készül.</p>
                                </div>

                            </div>

                            {/*Three "page"*/}

                            <div className={index === 3 ? 'sliderDiv3' : 'hidden'} >

                                <div>
                                    <div>
                                        <img src={Seven} id='numberIcon' />
                                        <h1 id='stepMains'>Fizetés</h1>
                                    </div>


                                    <p id='stepText'>A számla alapján a fizetést banki átutalással teljesítheti.</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={Eight} id='numberIcon' />
                                        <h1 id='stepMains'>Használat</h1>
                                    </div>


                                    <p id='stepText'>Az első számla fizetése után, a megadott telefonszámon regisztráljuk Önt a rendszerben, ezután bejuthat a garázs
                                        épületébe és használhatja a kiválasztott és immár bérelt gépkocsibeállót.</p>
                                </div>
                                <div>
                                    <h1 id='byeText'>Jó parkorlást kívánunk!</h1>

                                </div>

                            </div>
                        </div>

                    </div>

                    {/*Background Pic*/}





                </div>
            </section>
        </>
    )
}
export default Steps;