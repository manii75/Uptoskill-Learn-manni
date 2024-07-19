import React from 'react'
import WebDevelopment from '../components/Courses/WebDevelopment'
import WhatLearn from '../components/Courses/WhatLearn'
import Certificate from '../components/Courses/Certificate'
import YouLearn from '../components/Courses/YouLearn'
import StartLearning from '../components/Courses/StartLearning'

function codingPage() {
  return (
    <>
        <WebDevelopment 
            title="Coding Developer"
            description="Master all the coding skills you need to create websites, write programs, and tap into databases. You'll learn to create websites from scratch in HTML, get certified in SQL, the international standard language for databases, and specialize in Python, the world's fastest growing programming language. No previous coding experience needed."
        />

        <WhatLearn 
            data={[
                {
                    title:'Basic HTML structure',
                    description:'Learn the basic structure of a webpage and discover how you can help a web browser understand your content'
                },
                {
                    title:'Headings, paragraphs',
                    description:'Make your document easy to read and SEO-friendly by adding headings and paragraphs'
                },
                {
                    title:'Text formatting',
                    description:'Add some style to your content with text formatting options like bold, italics, strikethrough, colors, etc.'
                },
                {
                    title:'Elements and attributes',
                    description:'Discover some of the most useful elements and attributes. Use them to create different formats for information'
                },
                {
                    title:'Images',
                    description:'A pictures worth a thousand words. Learn how to add images to your pages'
                },
                {
                    title:'Lists and tables',
                    description:'Display more complicated data using lists and tables'
                },
                {
                    title:'Forms and frames',
                    description:'Use forms to capture user information'
                },
                {
                    title:'Audio and video elements',
                    description:'Bring your pages to life using audio and video elements'
                },
                {
                    title:'Canvas',
                    description:'Make your own artwork by using Canvas to render 2D shapes and patterns'
                },
                {
                    title:'Database structures',
                    description:'Before you learn more about SQL we?ll help you understand how data is stored in a database.'
                },
                {
                    title:'SQL queries',
                    description:'Select, sort and identify data from a database using SQL queries.'
                },
                {
                    title:'Where command and logical conditions',
                    description:'Use where command and logical conditions to filter data.'
                },
               
            ]}
        />

        <Certificate courseName='CodingFoundations'/> 

         <YouLearn cardData={
            [
                {
                    imgUrl:'https://api.sololearn.com/Uploads/How_to__Comment__in_HTML_Blog_1.jpg',
                    title:'CHEAT SHEET: How To Comment In HTML',
                    description:'Forms are widely used as essential website components. Its possible to create any type of form to fit the purpose and goals of your particular.'
                },

                {
                    imgUrl:'https://api.sololearn.com/Uploads/What_is_SQL_Used_For__Blog_1.jpg',
                    title:'What Is SQL Used For?',
                    description:'SQL is the commonly used acronym for Structured Query Language, the standard language for relational database management systems. SQL traces its origins all the way back to 1973, when it'
                },

                {
                    imgUrl:'https://api.sololearn.com/Uploads/10_Reasons_To_Learn_Python_Right_Now_blogpost_1.jpg',
                    title:'10 Reasons To Learn Python Right Now',
                    description:'Forms are widely used as essential website components. Its possible to create any type of form to fit the purpose and goals of your particular.'
                },
            ]
        }    
        /> 

        <StartLearning title='Coding Foundations'/>
    </>
  )
}

export default codingPage