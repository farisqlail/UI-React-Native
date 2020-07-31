import React, {Component} from "react";
import {
    Text, 
    View,
    Image
} from 'react-native';
import laptop from '../../assets/images/laptop.jpg';

class FlexBox extends Component {

    constructor(props) {
        super(props);
        console.log('ini constructor');
        this.state = {
            portofolio: 'Faris',
        }
    }

    componentDidMount() {
        console.log('ini component did mount');
        setTimeout(() => {
            this.setState({
                portofolio: 'Rizqilail',
            })
        }, 2000);
    }

    componentDidUpdate() {
        console.log('ini component did update')
    }

    componentWillUnMount() {
        console.log('ini will mount');
    }

    render(){
        console.log('ini render');
        return (
            <View>
                <View style={{
                    flexDirection: 'row'
                    }}>
                    <View style={{
                        backgroundColor: 'black', 
                        flex: 1, 
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold'
                            }}>{this.state.portofolio}</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row', 
                    aliginItem: 'center', 
                    marginLeft: 10, 
                    marginTop: 10
                }}>
                    <Image source={laptop} style={{
                        width: 100, 
                        height: 100, 
                        borderRadius: 50
                        }}/>
                    <View style={{
                        justifyContent: 'center', 
                        marginLeft: 10
                        }}>
                        <Text style={{
                            fontSize: 14, 
                            fontWeight: 'bold'
                            }}>Faris Rizqilail</Text>
                        <Text style={{
                            fontSize: 12
                            }}>Front-end Developer</Text>
                        <View style={{
                            backgroundColor: 'black', 
                            width: 150, 
                            height: 30, 
                            borderRadius: 10,
                            marginTop: 10
                            }}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                paddingVertical: 4
                            }}> Protofolio</Text>                            
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default FlexBox;