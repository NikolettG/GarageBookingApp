import './News.css'
import React from 'react'
import News1 from './Picture/news1.png'
import News2 from './Picture/news2.png'
import NewsBP from './Picture/newsBP.jpg'
import NewsBPMob from './Picture/newsmobil.jpg'


function NewsDiv(props) {
    return (
        <div className="newsDiv">
            <img className="card-img" src={props.img} id='newsImg' />
            <h2 className="card-title">{props.title}</h2>
            <div className='newsSource'>
                <p className='source'>Forrás: www.hirek.hu</p>
            </div>
        </div>
    )
}


const News = () => {

    return (
        <section className='newsSection'>
            <img src={NewsBP} className='newsBP' />
            <img src={NewsBPMob} className='newsBPMobil' />
            <div className='newsTitleDiv'>
                <h1 className='newsTitleDiv'>Rólunk szóló hírek</h1>
            </div>


            <div className='newsDivMain'>

                <NewsDiv
                    img={News1}
                    title='Vasgarázs legfrissebb hírek' />
                <NewsDiv
                    img={News2}
                    title='Vasgarázs legfrissebb hírek' />
                <NewsDiv
                    img={News1}
                    title='Vasgarázs legfrissebb hírek' />
                <NewsDiv
                    img={News2}
                    title='Vasgarázs legfrissebb hírek' />


            </div>



        </section>
    )
}

export default News;