import React from 'react'
import SliderCard from './SliderCard'

function Slider() {
    return (
        <div className='flex item-center px-5 py-5 m-auto flex-col justify-center w-full' style={{ maxWidth: '90%' }}>
            <h2 className='lg:text-3xl text-2x text-center font-bold mb-5'>Choose a course for You</h2>
            <div className='flex items-center justify-center gap-10'>
                <SliderCard
                    title={'Python developer'}
                    image={"https://lecontent.sololearn.com/material-images/275e1b30ac2a4af9bc0ba34be18596e8-PythonDeveloper.png"}
                />

                <SliderCard
                    title={'Web development'}
                    image={"https://lecontent.sololearn.com/material-images/63851450a2054ee7a73e58c18b155340-Webdevelopment.png"}
                />


                <SliderCard
                    title={'Artificial intellegence'}
                    image={"https://lecontent.sololearn.com/material-images/8c336a9b8e3f40429efcc086ea016f3e-AI.png"}
                />



                <SliderCard
                    title={'Python developer'}
                    image={"https://lecontent.sololearn.com/material-images/275e1b30ac2a4af9bc0ba34be18596e8-PythonDeveloper.png"}
                />


                <SliderCard
                    title={'Python developer'}
                    image={"https://lecontent.sololearn.com/material-images/275e1b30ac2a4af9bc0ba34be18596e8-PythonDeveloper.png"}
                />



            </div>
        </div>
    )
}

export default Slider