import React, {Component} from 'react';

class GlassExercise extends Component {

    state = {
        imgSrc: './img/glassesImage/v7.png'
    }

    changeType = (id) => {
        this.setState({
            imgSrc: `./img/glassesImage/${id}.png`
        })
    }

    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url('./img/glassesImage/background.jpg')`,
                    backgroundPosition: 'center',
                    height: '120vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div style={{backgroundColor: 'rgba(0,0,0,0.4)', width: '100%', height: '100%'}}>
                        <h1 className="d-flex justify-content-center p-4"
                            style={{backgroundColor: 'rgb(13, 11, 11)', opacity: '0.5', color: 'white', padding:'30px',textAlign: 'center', fontStyle:'1.5rem'}}>TRY GRASSES APP
                            ONLINE</h1>

                        <div style={{display: 'flex', justifyContent:'space-evenly',
                        }}>

                            <div className="text-center" style={{
                                backgroundImage: `url('./img/glassesImage/model.jpg')`,
                                width: '250px',
                                height: '350px',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',textAlign:'center'
                            }}>
                                <img style={{width: '140px', height: '50px', opacity: '0.7', marginTop: '77px'}}
                                     src="./img/glassesImage/v7.png" alt=""/>
                                <div style={{backgroundColor: 'rgb(242, 184, 87)', opacity:'0.5', marginTop: '100px'}}>
                                    <h5>FENDI F8750</h5>
                                    <span>Lorem ipsum dolor sit amet, else elit about ut omnis it my on ea.</span>
                                </div>
                            </div>

                            <div className="text-center" style={{
                                backgroundImage: `url('./img/glassesImage/model.jpg')`,
                                width: '250px',
                                height: '350px',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',textAlign: 'center'
                            }}>
                                <img style={{width: '140px', height: '50px', opacity: '0.7', marginTop: '77px'}}
                                     src={this.state.imgSrc} alt=""/>
                            </div>
                        </div>
                        <div style={{display: 'flex', width:'100%', marginTop: '50px'}}>
                            <div style={{height:'250px', width:'1000px', backgroundColor:'white', padding:'20px 40px', margin:'0 auto' }}>
                                <img onClick={() => this.changeType('v1')} src="./img/glassesImage/g1.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v2')} src="./img/glassesImage/g2.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v3')} src="./img/glassesImage/g3.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v4')} src="./img/glassesImage/g4.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v5')} src="./img/glassesImage/g5.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v6')} src="./img/glassesImage/g6.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v7')} src="./img/glassesImage/g7.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v8')} src="./img/glassesImage/g8.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                                <img onClick={() => this.changeType('v9')} src="./img/glassesImage/g9.jpg" alt="..." style={{width:'100px', height:'50px',border:'1px solid black',margin:'1rem'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GlassExercise;