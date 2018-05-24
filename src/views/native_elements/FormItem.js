import {Icon, Input, Item, Text, View} from "native-base";
import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {GRAY_COLOR} from "../../utils/Colors";
import PropTypes from 'prop-types';

export default class FormItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            touched: false,
            error: false,
            password: false,
            isSecure: true,
            ...props
        };
    }

    changeText = (e) => {
        let error = false;
        if (!e) error = true;
        this.setState({value: e, error: error})
    };

    setTouched = () => {
      this.setState({touched: true});
    };

    changeVisibility = () => {
      this.setState({isSecure: !this.state.isSecure});
    };

    render() {
        const {error, touched, value, password, isSecure} = this.state;

        return (<View>
                    <Item floatingLabel error={error && touched} style={{borderColor: error ? 'red' : GRAY_COLOR }}>
                        {this.props.children}
                        <Input ref={c => (this.textInput = c)}
                               onChangeText={e => this.changeText(e)}
                               onBlur={() => this.setTouched()}
                               value={value}
                               secureTextEntry={password}

                        />
                        {password && <Icon active name={isSecure ? 'eye' : 'eye-off'}
                                           onPress={() => this.changeVisibility()}/>}
                    </Item>
                    {error && touched && <Text style={styles.error}>Please enter valid data</Text>}
                </View>);
    }

}

const styles = StyleSheet.create({
   error: {
       fontSize: 10,
       color: 'red'
   }
});

FormItem.propTypes = {
    value: PropTypes.string,
    password: PropTypes.bool,
    validation: PropTypes.object
};

