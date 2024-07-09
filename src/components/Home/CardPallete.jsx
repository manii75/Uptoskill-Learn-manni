import React from 'react'
import Card from './Card'

function CardPallete() {
    return (
        <div className='py-10 flex items-center justify-center flex-wrap gap-10 bg-gray-50'>
            <div className='bg-white ' style={{maxWidth:'450px'}}>
                <Card
                    iconUrl={"https://assets.sololearn.com/home-why-solo-1.svg"}
                    title={'Tailored to you'}
                    description={`No matter your experience level, you'll be writing real, functional code within minutes of starting your first course.`}
                    btnText={'Start Learning'}
                />
            </div>

            <div className=''style={{maxWidth:'450px'}}>
                <Card
                    iconUrl={"https://assets.sololearn.com/home-why-solo-2.svg"}
                    title={'Bite-sized'}
                    description={`Go step-by-step through our unique courses. Assess what you've learned with in-lesson quizzes, and gradually advance your skills with practice.`}
                    btnText={'Do a Quick Lessons'}
                />
            </div>

            <div className='flex-grow' style={{maxWidth:'450px'}}>
                <Card
                    iconUrl={"https://assets.sololearn.com/home-why-solo-3.svg"}
                    title={'Get proof'}
                    description={`Earn a certificate to validate your newly acquired skills. Post it on social for others to see.`}
                    btnText={'Become Certified'}
                />
            </div>  

            <div className='flex-grow' style={{maxWidth:'450px'}}>
                <Card
                    iconUrl={"https://assets.sololearn.com/home-why-solo-5.svg"}
                    title={'More than 20 courses'}
                    description={`From Python, through data, to web dev. We got everything you need.`}
                    btnText={'Explore Full Caltalog'}
                />
            </div>

        </div>
    )
}

export default CardPallete