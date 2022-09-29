import React from 'react'
import Product from './Product';
import HeroSlider, { Slide } from 'hero-slider';
import Navbar from './Navbar';
import Contact from './Contact';

function Home() {
    const bg1 = "./images/bg.jpg";
    const bg2 = "./images/bg2.jpeg";
    const bg3 = "./images/home.jpeg";
    const t1 = "./images/t1.jpg";
    const t2 = "./images/t2.jpg";
    const t3 = "./images/e.jpeg";

    const toile1 = "./images/toile1.jpg";
    const toile2 = "./images/toile2.jpg";
    const toile3 = "./images/toile3.jpg";

    return (
        <>
            <div className='col-sm-12'>
                <Navbar />
                <div className="col-sm-12">
                    <div className='p-3'>
                        <div className='card bg-light text-white border-0 homePricipeal'>
                            <div className='d-flex slide1Home'>
                                <div className='col-sm-5 imageHome'>
                                    <HeroSlider
                                        height="40vh"
                                        autoplay
                                        controller={{
                                            initialSlide: 1,
                                            slidingDuration: 400,
                                            slidingDelay: 100,
                                        }}
                                    >
                                        <Slide
                                            background={{
                                                backgroundImage: t1,
                                                backgroundAttachement: "fixed"
                                            }}
                                        />
                                        <Slide
                                            background={{
                                                backgroundImage: t2,
                                                backgroundAttachement: "fixed"
                                            }}
                                        />
                                        <Slide
                                            background={{
                                                backgroundImage: t3,
                                                backgroundAttachement: "fixed"
                                            }}
                                        />
                                    </HeroSlider>
                                </div>
                                <div className='col-sm-7 p-3'>
                                    <p className="card-text lead fs-2 text-black-50">
                                        Site pour vente de tableaux.
                                        <hr />

                                        <p className="card-text lead fs-5 text-black-50">
                                            Star de la décoration murale, la toile imprimée reste le support de
                                            tableau au meilleur rapport qualité prix. Son impression haute définition et son petit prix en font un objet déco pratique
                                            et design à la portée de tous, pour un rendu moderne immédiat.
                                        </p>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <Product />
                    </div>
                </div>

                <Contact />

            </div>
        </>
    )
}

export default Home