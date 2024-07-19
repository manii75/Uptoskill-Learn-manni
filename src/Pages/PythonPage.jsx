import React from 'react'
import WebDevelopment from '../components/Courses/WebDevelopment'
import WhatLearn from '../components/Courses/WhatLearn'
import Certificate from '../components/Courses/Certificate'
import YouLearn from '../components/Courses/YouLearn'
import StartLearning from '../components/Courses/StartLearning'

function PythonPage() {
  return (
    <>
        <WebDevelopment 
            title="Python Developer"
            description="Python is the world's fastest growing programming language is easy to read, learn and code. You'll learn to build interactive programs and automate your tasks, analyze and visualize even the most complex data and create AI and machine learning models. No previous coding experience needed."
        />

        <WhatLearn 
            data={[
                {
                    title:'HTML Basics',
                    description:'Learn the basic structure of a webpage and discover how you can help a web browser understand your content'
                },
                {
                    title:'CSS Styling',
                    description:'Style your web pages with CSS to create visually appealing and responsive designs'
                },
                {
                    title:'HTML Basics',
                    description:'Learn the basic structure of a webpage and discover how you can help a web browser understand your content'
                },
                {
                    title:'CSS Styling',
                    description:'Style your web pages with CSS to create visually appealing and responsive designs'
                },
                {
                    title:'HTML Basics',
                    description:'Learn the basic structure of a webpage and discover how you can help a web browser understand your content'
                },
                {
                    title:'CSS Styling',
                    description:'Style your web pages with CSS to create visually appealing and responsive designs'
                },
                {
                    title:'HTML Basics',
                    description:'Learn the basic structure of a webpage and discover how you can help a web browser understand your content'
                },
                {
                    title:'CSS Styling',
                    description:'Style your web pages with CSS to create visually appealing and responsive designs'
                },
                {
                    title:'HTML Basics',
                    description:'Learn the basic structure of a webpage and discover how you can help a web browser understand your content'
                },
                {
                    title:'CSS Styling',
                    description:'Style your web pages with CSS to create visually appealing and responsive designs'
                },
            ]}
        />

        <Certificate courseName='Pytoh developer'/> 

         <YouLearn cardData={
            [
                {
                    imgUrl:'https://api.sololearn.com/Uploads/How_Python_Helps_Accountants_Use_Excel_blog.png',
                    title:'How Python Helps Accountants Use Excel',
                    description:'Forms are widely used as essential website components. Its possible to create any type of form to fit the purpose and goals of your particular.'
                },

                {
                    imgUrl:'https://www.sololearn.com/Uploads/What_Is_Python_Used_For_1.jpg',
                    title:'How Python Helps Accountants Use Excel',
                    description:'Forms are widely used as essential website components. Its possible to create any type of form to fit the purpose and goals of your particular.'
                },

                {
                    imgUrl:'https://api.sololearn.com/Uploads/10_Reasons_To_Learn_Python_Right_Now_blogpost_1.jpg',
                    title:'How Python Helps Accountants Use Excel',
                    description:'Forms are widely used as essential website components. Its possible to create any type of form to fit the purpose and goals of your particular.'
                },
            ]
        }    
        /> 

        <StartLearning title='Python Developer'/>
    </>
  )
}

export default PythonPage