import React, { useState } from 'react';
import './Home.css';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PetsIcon from '@mui/icons-material/Pets';
import CheckIcon from '@mui/icons-material/Check';
import Footer from '../Footer/Footer';
function Home() {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <>
                <div className="image-container">
                    <Link to="/login">
                        <div className="overlay-card">
                            <div className="icon">
                                <TravelExploreIcon fontSize="large" />
                            </div>
                            <div className="content" style={{ fontFamily: 'Copperplate' }}>
                                <h2>Want to Adopt</h2>
                                <small>Search the available pets listed on this site</small>
                            </div>
                        </div>
                    </Link>
                    <div
                        className="big-image"
                        style={{
                            backgroundImage: `url(https://www.dogcancer.com/wp-content/uploads/2023/04/ROLE-OF-DOGS-AS-FAMILY-MEMBERS.jpg)`,
                            backgroundSize: 'cover',
                            height: '600px',
                            marginTop: '1px'
                        }}
                    ></div>
                </div>
                <section className='start-patners bgc-thm pt50 pb50'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className="strat-patners tac-smd ">
                                    <h3 className='color-white' style={{ fontFamily: 'Copperplate' }}>Register For Account</h3>
                                    <p><small className='color-white' style={{ fontFamily: 'Copperplate' }}>Create your free account, and get ready to connect safely with thousands of Pet adopters</small></p>
                                </div>
                            </div>
                            <div className='col-lg-4 text-right mt-3' id='btn-color'>
                                <Link className='btn custom-button' style={{ backgroundColor: 'lightblue', color: "white", fontFamily: 'Copperplate' }} to='/login'>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center mt-3">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b>Why Choose Pet Adoption</b></h3>
                    <p style={{ fontFamily: 'Copperplate' }}>Because we enable direct pet adoption, from one good home to another.</p>
                </div>
                {/* Cards component */}
                <Cards />


                <div className="text-center mt-5">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b>Straightforward Pet Adoption</b></h3>
                    <p style={{ fontFamily: 'Copperplate' }}><small>Pet Adoption is a new digital platform with real people behind the scenes. Our platform connects potential adopters with people who need to rehome their pets.<br></br> This makes it easier for good people to adopt the right pet whilst maximising the chance of pets finding their forever home.</small></p>
                </div>


                {/* Contrainer */}
                <div className="new-container" style={{ backgroundColor: '#DBE2E9', padding: '20px' }}>
                    <h2 className="text-center" style={{ fontFamily: 'Copperplate', marginBottom: '20px', fontFamily: 'Copperplate' }}><b>Featured Pets </b></h2>

                    <div className="row">
                        {/* card-1 */}
                        <div className="col-md-4">

                            <div className="card-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', position: 'relative', borderRadius: '15px' }}>
                                <div style={{ padding: '20px' }}>
                                    <img src="https://images.unsplash.com/photo-1478991031579-5f22c0ee9c9f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBkb2d8ZW58MHx8MHx8fDA%3D" className="card-img-top mx-auto d-block" alt="Card Image" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mb-1" style={{ fontFamily: 'Copperplate', textAlign: 'center', paddingLeft: '20px' }}><h4><PetsIcon />Yorkshire terrier</h4></p>
                                    <p className="card-text" style={{ fontFamily: 'Copperplate', textAlign: 'center', paddingLeft: '20px' }}><small>Available Soon..</small></p>
                                </div>
                                <IconButton
                                    aria-label="like"
                                    style={{
                                        position: 'absolute',
                                        bottom: '5px',
                                        right: '5px',
                                        backgroundColor: '#fff',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&:hover svg': {
                                            color: 'red'
                                        }
                                    }}
                                    onClick={handleClick}
                                >
                                    {isFavorite ? <CheckIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </div>

                        </div>


                        {/* card-2 */}
                        <div className="col-md-4">

                            <div className="card-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', position: 'relative', borderRadius: '15px' }}>
                                <div style={{ padding: '20px' }}>
                                    <img src="https://plus.unsplash.com/premium_photo-1663127046003-ef3ec7ce7bc4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNtYWxsJTIwY2F0c3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top mx-auto d-block" alt="Card Image" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mb-1" style={{ fontFamily: 'Copperplate', textAlign: 'center', paddingLeft: '20px' }}><h4><PetsIcon />whisker</h4></p>
                                    <p className="card-text" style={{ fontFamily: 'Copperplate', textAlign: 'center', paddingLeft: '20px' }}><small>Available Soon..</small></p>
                                </div>
                                <IconButton
                                    aria-label="like"
                                    style={{
                                        position: 'absolute',
                                        bottom: '5px',
                                        right: '5px',
                                        backgroundColor: '#fff',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&:hover svg': {
                                            color: 'red'
                                        }
                                    }}
                                    onClick={handleClick}
                                >
                                    {isFavorite ? <CheckIcon /> : <FavoriteBorderIcon />}
                                </IconButton>

                            </div>

                        </div>
                        {/* card-3 */}
                        <div className="col-md-4">

                            <div className="card-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', position: 'relative', borderRadius: '15px' }}>
                                <div style={{ padding: '20px' }}>
                                    <img src="https://images.unsplash.com/photo-1617398881039-4c977f633b0e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top mx-auto d-block" alt="Card Image" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mb-1" style={{ fontFamily: 'Copperplate', textAlign: 'center', paddingLeft: '20px' }}><h4><PetsIcon />Easter bunny</h4></p>

                                    <p className="card-text" style={{ fontFamily: 'Copperplate', textAlign: 'center', paddingLeft: '20px' }}><small>Available Soon..</small></p>
                                </div>
                                <IconButton
                                    aria-label="like"
                                    style={{
                                        position: 'absolute',
                                        bottom: '5px',
                                        right: '5px',
                                        backgroundColor: '#fff',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&:hover svg': {
                                            color: 'red'
                                        }
                                    }}
                                    onClick={handleClick}
                                >
                                    {isFavorite ? <CheckIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b>Popular Pet Searches</b></h3>
                    <p style={{ fontFamily: 'Copperplate' }}><small>Whilst you can use our filters to search for specific pets, we thought you'd like to try these popular pet searches!</small></p>
                </div>


                {/* Large and small cards */}
                <div className="new-container mt-1" style={{ backgroundColor: '', padding: '20px' }}>
                    <h2 className="text-center" style={{ fontFamily: 'Copperplate', marginBottom: '20px' }}></h2>

                    <div className="row">
                        {/* Large card */}
                        <div className="col-md-8">
                            <div className="card-1 " style={{ backgroundColor: '#DBE2E9', marginBottom: '20px', borderRadius: '15px' }}>
                                <div style={{ padding: '20px' }}>
                                    <img src="https://th.bing.com/th/id/OIP.DVqSJuLEmVu7b0VnZ3DwTQHaIY?rs=1&pid=ImgDetMain" className="card-img-top mx-auto d-block zoom-on-hover " alt="Card Image" style={{ width: '80%', height: '500px', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mb-3" style={{ fontFamily: 'Copperplate', textAlign: 'center' }}><h4><PetsIcon />Goldenretriever</h4></p>
                                    <p className="card-text" style={{ fontFamily: 'Copperplate', textAlign: 'center' }}><small></small></p>
                                </div>
                            </div>
                        </div>
                        {/* Small card */}
                        <div className="col-md-4">
                            {/* small card -1 */}
                            <div className="card-1 " style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px' }}>
                                <div style={{ padding: '20px' }}>
                                    <img src="https://media.istockphoto.com/id/1500079921/photo/close-up-portrait-of-her-she-nice-looking-attractive-sweet-lovely-charming-cute-cheerful.jpg?s=612x612&w=0&k=20&c=EHg98GB9BMsr-FkJBnQxCN4j6R8Gv0aCo7zAM7P0RoE=" className="card-img-top mx-auto d-block zoom-on-hover" alt="Small Card-Image" style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mb-2" style={{ fontFamily: 'Copperplate', textAlign: 'center' }}><h4><PetsIcon />Orange Cat</h4></p>
                                    <p className="card-text" style={{ fontFamily: 'Copperplate', textAlign: 'center' }}><small></small></p>
                                </div>
                            </div>
                            {/*  small card-2 */}
                            <div className="card-3 " style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px' }}>
                                <div style={{ padding: '20px' }}>
                                    <img src="https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFiYml0fGVufDB8fDB8fHww" className="card-img-top mx-auto d-block text-center mt-2 zoom-on-hover" alt="Small Card-Image" style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mb-1" style={{ fontFamily: 'Copperplate', textAlign: 'center' }}><h4><PetsIcon />Rabbits</h4></p>
                                    <p className="card-text" style={{ fontFamily: 'Copperplate', textAlign: 'center' }}><small></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </>
        </div>
    );
}

export default Home;
