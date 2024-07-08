import React from 'react'
import Card from './Card'

function CardPallete2() {
    return (
        <div className='flex justify-center items-center flex-col pt-10'>

        <h2 className='text-2xl lg:text-5xl md:3xl text-center my-5 font-bold'  style={{maxWidth:'700px'}}>The perfect platform to boost your technical skills</h2>
        
        <div className="py-10 px-10 flex items-center justify-center flex-wrap gap-10">
            <div style={{ maxWidth: '600px' }}>
                <Card
                    iconUrl={'https://assets.sololearn.com/home-perfect-platform-2.svg'}
                    title={'Students'}
                    description={'You can learn something totally new to advance your career. Or maybe you just want to knock off the rust. Try Sololearn to get access to a variety of courses, from machine learning to web development.'}
                    btnText={'Learn for Free'}
                />
            </div>

            <div style={{ maxWidth: '600px' }}>
                <Card
                    iconUrl={'https://blob.sololearn.com/assets/home-perfect-platform-1-rebranding.svg'}
                    title={'Profesional'}
                    description={`Prepping for the big test or want to ace your first interview? Use Sololearn's real-world practice to reinforce what you've learned and get you ready for that big moment.`}
                    btnText={'Boost your career'}
                />
            </div>



        </div>
        </div>
    )
}

export default CardPallete2
