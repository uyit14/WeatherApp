import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { getTem } from '../api/getTem';
import { connect } from 'react-redux';
import { startFetchData, fetchSuccess, fetchFail, fetchDataThunk } from '../redux/actionCreators';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        }
    }

    getWeatherMessage() {
        const { cityName, err, isLoading, temp } = this.props;
        if (isLoading) return "...Loading";
        if (err) return "...Error";
        if (!cityName) return "Type your city name!";
        return `${cityName} now is ${temp}oC`
    }

    fetchTempByCity() {
        const { cityName } = this.state;
        // this.props.startFetchData();
        // getTem(this.state.cityName)
        //     .then(temp => this.props.fetchSuccess(cityName, temp))
        //     .catch(() => this.props.fetchFail())
        this.props.fetchDataThunk(cityName);
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
                <Text>{this.getWeatherMessage()}</Text>
                <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, margin: 10 }}
                    onPress={this.fetchTempByCity.bind(this)}>
                    <Text>Get oC</Text>
                </TouchableOpacity>
                <TextInput
                    style={{ margin: 10, padding: 5, backgroundColor: 'blue' }}
                    value={this.state.cityName}
                    placeholder="input city name"
                    onChangeText={text => this.setState({ cityName: text })}
                />
            </View>
        );
    }
}
function mapStateToProps(state) {
    return { cityName: state.cityName, err: state.err, isLoading: state.isLoading, temp: state.temp }
}

export default connect(mapStateToProps, { startFetchData, fetchSuccess, fetchFail, fetchDataThunk})(Main)