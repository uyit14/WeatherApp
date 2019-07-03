import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        }
    }

    render() {
        return (
            <View style={{
                backgroundColor: "yellow",
                flex: 1,
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>City now 20oC</Text>
                <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, margin: 10 }}>
                    <Text>Get oC</Text>
                </TouchableOpacity>
                <TextInput
                    style={{ margin: 10, padding: 5, backgroundColor: 'blue'}}
                    value={this.state.cityName}
                    placeholder="input city name"
                    onChangeText={text => this.setState({ cityName: text })}
                />
            </View>
        );
    }
}