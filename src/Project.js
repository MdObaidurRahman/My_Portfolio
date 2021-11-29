import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/portfolio-5.jpg';
import Project6 from './img/portfolio-6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
        Let our advance worrying become advance thinking and planning.
        </p>
        <p className="heading p__color">
        Expect the best, plan for the worst, and prepare to be surprised.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Bike Collection</h5>
                     <h4 className="project__text">Riding bike is an best feeling and if you are in depression or feeling lonely then take your bike pull the throttle and go for ride.</h4>
                     <a href="#" className="project__btn"><a href="https://bike-collection-web.netlify.app/">View Details</a></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Travelling</h5>
                     <h4 className="project__text">Do not follow where the path may lead. Go instead where there is no path and leave a trail.travelling is happiness</h4>
                     <a href="#" className="project__btn"><a href="https://youthful-jones-4a475f.netlify.app/"> View Details</a></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Pharmacy</h5>
                     <h4 className="project__text">Rogue Internet pharmacies continue to pose a serious threat to the health and safety of Americans.</h4>
                     <a href="#" className="project__btn"><a href="https://pedantic-ptolemy-ddca28.netlify.app/" target="_blank" rel="noopener noreferrer"> View Details</a></a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">IELTS</h5>
                     <h4 className="project__text">Success is the sum of small efforts, repeated day in and day out.</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Book World</h5>
                     <h4 className="project__text">Books have the power to transport us to new worlds and different times</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Food Network</h5>
                     <h4 className="project__text">When you eat food with your family and friends, it always tastes better! for everything</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
