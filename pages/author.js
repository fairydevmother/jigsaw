import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Checkbox, Form, Input } from 'antd';
import { Button, Popover } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header'
import Sidebar from '../components/sidebar';
import data from '../data/data.json';
import Image from 'next/image'
export default function Index() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes'); 
        
        var randomNumber = Math.floor(Math.random()*400 )
      
        const data = await response.json();
        const quoteOfTheDay = data[randomNumber];
        setQuote(quoteOfTheDay);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return ( 
     <div>
      <Head>
        <title>Jigsaw | Blog</title>
        <link rel="icon" href="/puzzle.png" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        

      </Head>
     
       
  <div className="h-screen w-full bg-white relative flex overflow-hidden">

    <Sidebar />
    

   <div className="w-full h-full flex flex-col justify-between">
  
    <Header />

    <main className="display font-mono max-w-full h-full flex relative dark:bg-body overflow-y-hidden">
    
    <div className=" h-full w-full flex flex-wrap items-start overflow-y-scroll overflow-x-hidden justify-start  ">

    {data.Me.map(mine =>
    
    <div key={mine.id} className="bg-essay dark:bg-content post font-mono w-full rounded-lg flex-shrink-0 flex-grow essayColor">
      
      <section className="h-full text-gray-600 body-font container dark:text-lessGray ">
                    <div className=" px-5 py-5 mx-auto">
                        <div className=" dark:bg-dev p-5 bg-white flex items-center mx-auto border-b  border-gray-200 rounded-lg sm:flex-row flex-col">
                        <div className="sm:w-46 sm:h-46 h-72 w-72 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                        <Image height={285} width={475} src="/profile.png" alt="cat" />
                        </div>
                      
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                          
                        <h1 className="font-mono text-black text-4xl title-font  dark:text-whiter font-bold mb-2 hover:text-purple-300">
                            {mine.name}</h1>
                            <p className="leading-relaxed text-base"> </p>
                            
                            <div className="text-gray-600 dark:text-lessWhite  md:flex font-bold">
                              {mine.profession}
    
                            </div>
                              
     
                           
                        </div>
                       

                        </div>
                        
                    </div>
                    <div className=" px-5 py-5 mx-auto">
                        <div className=" dark:bg-dev p-5 bg-white flex items-center mx-auto border-b  border-gray-200 rounded-lg sm:flex-row flex-col">
                        
                      
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                          
                           <h4 className="font-mono   dark:text-whiter text-black text-2xl title-font font-bold mb-2 hover:text-purple-300">This blog is my jigsaw puzzle
                           </h4>
                            
                            <div className="md:flex  dark:text-lessWhite font-bold text-gray-600">
                                {mine.description}
    
                            </div>
                              
     
                           
                        </div>
                        

                        </div>
                        
                    </div>
                    <div className=" px-5 py-5 mx-auto"> 
                    <div className=" dark:bg-dev p-5 bg-white flex items-center mx-auto border-b  border-gray-200 rounded-lg sm:flex-row flex-col"> 
                    <div> 
                      <h1 className='font-mono text-black text-2xl title-font  dark:text-whiter font-bold mb-2 hover:text-purple-300'>
                        Quote
                        </h1> 
                      {quote ? ( 
                      <div> 
                        <h1 className="font-mono text-gray-600 text-xl title-font  dark:text-whiter font-bold mb-2 "> 
                        {quote.text}
                        </h1> 
                        <div className=" md:flex text-lg font-bold text-gray-800 dark:text-greener"> 
                        {quote.author} 
                        </div> 
                        </div> 
                        ) : ( <p>Loading...</p> )} 
                      </div> 
                    </div> 
                  </div>
                   
        </section>

    </div>
    )}



    

 </div>

    
  </main>
  
</div>
</div>


<style>{`
       @media screen and (max-width: 768px) {
       
        .container{
          width:95%;
          height:100%
        }
        .img{
          display:none;
        }
        
       }
       @media screen and (min-width: 768px) {
       
        .container{
          width:100%;
          height:100%
        }
        
        .mobileImg{
          display:none;
        }

       }

        .bgColor{
          background-color:#7743DB;
          
        }
        .essayColor{
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
        }
        .custom-button{
          background-color:#7743DB;
        }
        
      `}</style>


      
    </div>
    
  )
}

