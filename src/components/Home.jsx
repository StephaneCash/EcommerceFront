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
                            <p className="card-text lead fs-4 text-black-50">
                                Voluptate fuga, quis et aliquam eum at ratione libe
                                Architecto aliquam ratione quibusdam consectetur voluptates ipsum corporis expedita id libero
                                necessitatibus reprehenderit nobis odio tenetur voluptas ullam, in temporibus facilis sed.
                            </p>
                        </div>
                    </div>
                </div>

                <Product />
            </div>
        </>
    )
}

export default Home