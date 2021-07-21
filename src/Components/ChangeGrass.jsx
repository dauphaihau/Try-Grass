import React, { Component } from 'react';

class ChangeGrass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
    }

    changeType = (id) => {
        let imgSource = ''

        switch (id) {
            case 1:{
                imgSource = '../assets/glassesImage/v1.jpg'
            }break;
            case 2:{
                imgSource = '../assets/glassesImage/v2.jpg'
            }break;
            case 3:{
                imgSource = '../assets/glassesImage/v3.jpg'
            }break;
            case 4:{
                imgSource = '../assets/glassesImage/v4.jpg'
            }break;
            case 5:{
                imgSource = '../assets/glassesImage/v5.jpg'
            }break;

        }

        this.setState({
            img: imgSource
        })
    }

    render() {
        let grass = this.state.img

        return (
            <section className="container">
                <h1>TRY GRASSES APP ONLINE</h1>

                <img src={grass} width={100} height={100}/>

                <div className="options">
                    <img onClick={() => this.changeType(1)} src="../../assets/glassesImage/g1.jpg" alt="..." width={100} height={100}/>
                </div>

            </section>
        );
    }
}

export default ChangeGrass;