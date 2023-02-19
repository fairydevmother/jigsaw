import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import closeButton from './close.png'
import data from '../data/data.json';

const Post = ({post}) => {
  function cutParagraph(paragraph) {
    if (paragraph.length > 200) {

      return paragraph.slice(0, 200) + "...";
      
    }
    return paragraph;
  }
  
    const [isOpen, setIsOpen] = useState(false);
    const p=post.body;
    const paragraph= cutParagraph(p);
    const paragraphs = paragraph.split("\n");
    
 

    return (
      <>
        <button onClick={() => setIsOpen(true)}>
        <h1 className="text-black h-26 text-2xl title-font font-bold mb-2 hover:text-blue-200">
         {post.title}
        </h1>
        </button>
        {isOpen && (


  
          <div className="popup-content max-w-full bg-blue-400  flex relative  overflow-x-hidden">
            
            <section className="text-gray-600 body-font items-center">
            <button className='popup-button' onClick={() => setIsOpen(false)}>
            <Image  width={35} height={35}  src={closeButton} alt="src" />
             </button>

             <button className='popup-buttonTwo' onClick={() => setIsOpen(false)}>
            <Image  width={35} height={35}  src={closeButton} alt="src" />
             </button>
             <div className='popup-writer'>
              <div>
              <Image className='mb-5 pt-2'  width={200} height={170} src={post.imgUrl} alt="cat" />
              </div>
             <span className="writer text-gray-500 text-sm">Jigsaw By S. KARACA</span> 
             <br></br>
             <span className="date  text-gray-500 text-sm"> Jun 12, 2022</span>

             </div>
             
              <div className="container pl-8 py-10 mx-auto">
               <div className="xl:w-1/2 lg:w-3/4  w-full mx-auto">
              
               <h1 className='title font-bold '>  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
               </svg>  {post.title}</h1>
              
                <h2 className="mb-3 text-xl font-bold text-gray-500 dark:text-gray-400">
                  {post.preview}
                </h2>
        
               {paragraphs.map((p, i) => (
                  <p className="mb-3 text-lg font-light text-gray-500 dark:text-gray-400" key={i}>{p}</p>
                     ))}





               <Link className="mt-3 text-indigo-500 hover:text-blue-800 inline-flex items-center" href={`/article/${post.slug}`}>
                          Read More
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                         </Link>
              <div className='text-center'>
            
              <span className=" inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
              <h2 className=" text-gray-900 font-medium title-font tracking-wider text-sm">S. KARACA</h2>
               <p className="text-gray-500">Full-Stack Developer</p>
              </div>
               </div> 
           </div>
          
           
            </section>
             
           
          </div>  




 
        )}
  

    

        
<style jsx>{`
    @media screen and (min-width:1300px){
      .popup-content {

        height:37.8rem;
        border-radius:2px;
        position: fixed;
        top: 60%;
        left:51.8%;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:80.3rem;

    }
    .date{
      margin-left:3.5rem;
    }
    .popup-buttonTwo{display:none;}
    
   
    .container{
        position: fixed;
        top: 4%;
        left:12%;
    }
    .title{
        font-size:1.50rem;
    }
    .popup-writer{
      margin-top:0.25rem;
      margin-left:7rem;
      padding:1.25rem;
   }
    .popup-img{
      margin-bottom:5rem;
      padding-top:2px;
    }
    .writer{
     
      margin-left:2rem;
    }
    .title{
      font-size:1.50rem;
  }
    }
    @media screen and (min-width: 1024px) and (max-width: 1300px) {
      .popup-content {

        height:37.8rem;
        border-radius:2px;
        position: fixed;
        top: 55%;
        left:52.8%;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:55.3rem;

    }
    .date{
      margin-left:3.5rem;
    }
    .popup-buttonTwo{display:none;}
    
   
    .container{
        position: fixed;
        top: 55%;
        left:2%;
    }
    .title{
        font-size:1.50rem;
    }
    .popup-writer{
      margin-top:0.25rem;
      margin-left:19rem;
      padding:1.25rem;
   }
    .popup-img{
      margin-bottom:5rem;
      padding-top:2px;
    }
    .writer{
     
      margin-left:2rem;
    }
    }
    @media (min-width: 767px) and (max-width: 1024px) {

      .popup-content {
        height:37.8rem;
        border-radius:2px;
        position: fixed;
        top: 56.2%;
        left:55%;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:45rem;
    }
    .title{
      font-size:1.50rem;
  }
    .popup-writer{
      margin-top:0.25rem;
      margin-left:9rem;
      padding:1.25rem;
   }
    .popup-button{
       display:none;
    }
    .popup-buttonTwo{
      position: fixed;
        top:2%;
        left:2%;
    }
    .container{
      width:70%
        position: fixed;
        top:50%;
        left:1%;
    }.date{
      margin-left:15.5rem;
    }.writer{
      margin-left:12rem;
    }
    
    }
    @media(max-width: 768px) { 
      .popup-content {
        height:37.8rem;
        border-radius:2px;
        position: fixed;
        top: 56.2%;
        left:56%;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:27rem;
    }
    .popup-writer{
       margin-top:0.25rem;
       margin-left:5.3rem;
    }
    .popup-button{
      display:none;
   }
   .popup-buttonTwo{
     position: fixed;
       top:2%;
       left:2%;
   }
    .container{
      width:85%
      position: fixed;
      top:50%;
      left:12%;
    }
    .date{
      margin-left:5.5rem;
    }
    .writer{
      margin-left:2.2rem;
    }
    
    }
      `}</style>
      </>
    );


}

export default Post;



export async function getStaticPaths() {

  const paths = data.Posts.map((article) => {
    return { params: { id: article.id } };
  });

    
    return {
      paths,
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    const post = data.Posts.find(post => post.id === params.id);

    return {
      props: {
        post
      }
    };
  }