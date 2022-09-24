import React from 'react'
import Product from './Product';
import HeroSlider, { Slide } from 'hero-slider';

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
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className='container' style={{ zIndex: "100000" }}>
                                    <h5 className='card-title display-6 fw-bolder mb-0'>Tableaux modernes</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-7 p-3'>
                            <p className="card-text lead fs-2 text-black-50">
                                Site pour vente de tableaux.
                                <hr />
                            </p>
                            <div className="container row">
                                <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img src={toile1} width="150px" height="150" />
                                        </div>
                                        <div className='col-sm-6 text-black' style={{ height: '20vh', overflowX: "auto" }}>
                                            Star de la décoration murale, la toile imprimée reste le support de tableau au meilleur rapport qualité prix.
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img src={toile2} width="150px" height="150" />
                                        </div>
                                        <div className='col-sm-6 text-black' style={{ height: '20vh', }}>
                                            Une toile plafond est de grande largeur (de 2m50 à 6m). Elle est destinée à la peinture des plafonds.
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img src={toile3} width="150px" height="150" />
                                        </div>
                                        <div className='col-sm-6 text-black' style={{ height: '20vh', overflowX: "auto" }}>
                                            Toile imprimée haute définition finition doré retouchée a la main + encadrement.
                                        </div>
                                    </div>
                                </div>

                                <p className="card-text lead fs-4 text-black-50">
                                    Voluptate fuga, quis et aliquam eum at ratione libe
                                    Architecto aliquam ratione quibusdam consectetur voluptates ipsum corporis expedita id libero
                                    necessitatibus reprehenderit nobis odio tenetur voluptas ullam, in temporibus facilis sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Product />
            </div>
        </>
    )
}

export default Home