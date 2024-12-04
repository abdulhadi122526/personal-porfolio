import React from 'react'
import blogging from "../assets/blogging.png"
import todoss from "../assets/todoss.png"
import expanseApp from "../assets/expanseappss.png"
import phoneappss from "../assets/phoneappss.png"
import findquick from "../assets/findquick.png"
import stopfinder from "../assets/stopfinder.png"
import quizappss from "../assets/quizappss.png"


const Projects = () => {
  return (
    <>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pt-44 gap-5 ms-14 me-14 mb-12 ' >
          <div className="px-1 py-1 card glass me-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
            <figure>
              <img
                src={blogging}
                alt="blogging!" className='object-contain' />

            </figure>
            <div className="card-body py-2">
              <h2 className="card-title ">Blogging web</h2>
              <p className='text-justify '>A blogging platform, it is created using react.js and firbase firetore and authentication where users can  <span className=' text-[#A78BFA]'>  sign up, log in, and create their own blogs. Logged-in users can manage their profiles, </span> and view posts on a dedicated dashboard. The app features a home page showcasing all blogs and individual user pages for personalized content.</p>
              <div className="card-actions justify-center">
                <a href="https://personal-blogging-app-b9522.web.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                <a href="https://github.com/abdulhadi122526/blogging-app-with-firebase-firestore" target='_blank'><button className="btn btn-primary"> Github </button> </a>
              </div>
            </div>
          </div>

          <div className="px-1 py-1  card glass me-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
            <figure>
              <img
                src={todoss}
                alt="blogging!" className='object-cover' />

            </figure>
            <div className="card-body py-2">
              <h2 className="card-title ">Todo App</h2>
              <p className='text-justify'>A simple and efficient Todo App built with React.js and Redux Toolkit for state management <span className=' text-[#A78BFA]'> Users can add, update, delete, </span> with a clean and responsive interface. The app ensures seamless task organization and real-time updates using Redux's powerful features.</p>
              <div className="card-actions justify-center">
                <a href="https://todo-with-redux-ivory.vercel.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                <a href="https://github.com/abdulhadi122526/Todo-with-redux" target='_blank'><button className="btn btn-primary"> Github </button> </a>
              </div>
            </div>
          </div>

          <div className="px-1 py-1  card glass me-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
            <figure>
              <img
                src={expanseApp}
                alt="blogging!" className='object-cover' />

            </figure>
            <div className="card-body py-2">
              <h2 className="card-title ">Expanse Management  System</h2>
              <p className='text-justify'>A simple and efficient Expanse management  system built with React.js <span className=' text-[#A78BFA]'>  The app allows users to add, categorize, </span> With dynamic charts and real-time updates, it simplifies financial planning and expense tracking.</p>
              <div className="card-actions justify-center">
                <a href="https://expanse-managment-app.vercel.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                <a href="https://github.com/abdulhadi122526/Expanse-managment-app" target='_blank'><button className="btn btn-primary"> Github </button> </a>
              </div>
            </div>
          </div>

          <div className="px-1 py-1  card glass me-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
            <figure>
              <img
                src={quizappss}
                alt="blogging!" className='object-cover' />

            </figure>
            <div className="card-body py-2">
              <h2 className="card-title ">Quiz App</h2>
              <p className='text-justify'>A quiz app built with React and styled using Tailwind CSS  offering an interactive and user-friendly interface <span className=' text-[#A78BFA]'> Users can take quizzes,  and navigate through different questions seamlessly, </span> The app is fully responsive, providing a smooth experience across devices.</p>
              <div className="card-actions justify-center">
                <a href="https://react-quiz-app-five-blond.vercel.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                <a href="https://github.com/abdulhadi122526/react-quiz-app" target='_blank'><button className="btn btn-primary"> Github </button> </a>
              </div>
            </div>
          </div>

          <div className="px-1 py-1  card glass me-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
            <figure>
              <img
                src={phoneappss}
                alt="blogging!" className='object-cover' />

            </figure>
            <div className="card-body py-2">
              <h2 className="card-title ">Mobile shopping app</h2>
              <p className='text-justify'>A simple and efficient mobile shopping app built with HTML , CSS, JS and local storage <span className=' text-[#A78BFA]'> allowing users to add phones to their cart and adjust quantities seamlessly. </span> The app dynamically updates the total price based on the selected quantity, With a user-friendly interface.</p>
              <div className="card-actions justify-center">
                <a href="https://abdulhadi122526.github.io/Phone-App/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                <a href="https://github.com/abdulhadi122526/Phone-App" target='_blank'><button className="btn btn-primary"> Github </button> </a>
              </div>
            </div>
          </div>

          <div className="px-1 py-1  card glass me-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
            <figure>
              <img
                src={findquick}
                alt="blogging!" className='object-cover' />

            </figure>
            <div className="card-body py-2">
              <h2 className="card-title ">Find Quick </h2>
              <p className='text-justify'>A find quick web clone lbuilt with HTML, CSS, Bootstrap, and JavaScript, utilizing Local Storage for data management <span className=' text-[#A78BFA]'> It features login and signup functionality to secure user access, along with a dynamic home page for content display. </span> The app responsive, and lightweight user experience without requiring a backend.</p>
              <div className="card-actions justify-center">
                <a href="https://abdulhadi122526.github.io/Find-quick/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                <a href="https://github.com/abdulhadi122526/Find-quick" target='_blank'><button className="btn btn-primary"> Github </button> </a>
              </div>
            </div>
          </div>

          <div className="px-1 py-1  card glass me-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  ">
            <figure>
              <img
                src={stopfinder}
                alt="blogging!" className='object-cover' />

            </figure>
            <div className="card-body py-2">
              <h2 className="card-title ">Stop Finder</h2>
              <p className='text-justify'>A simple Stop Finder web clone created using pure HTML and CSS, with no responsive design features <span className=' text-[#A78BFA]'>It replicates the basic layout and structure of the original site,</span>The app provides a straightforward, non-interactive browsing experience without any advanced features or mobile optimization.</p>
              <div className="card-actions justify-center">
                <a href="https://abdulhadi122526.github.io/StopFinder-assignment/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                <a href="https://github.com/abdulhadi122526/StopFinder-assignment" target='_blank'><button className="btn btn-primary"> Github </button> </a>
              </div>
            </div>
          </div>
        </div>












    </>
  )
}

export default Projects