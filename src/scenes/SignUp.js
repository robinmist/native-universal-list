import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { 
    Card, 
    CardSection, 
    Input, 
    Button, 
    Header 
} from '../components/common';

class SignUp extends React.Component {
    render() {
        return(
            <View style={{ paddingTop: 60, marginLeft: 20, marginRight: 20 }}>
                
                <Image source={ require('../assets/sign-up.png') } style={styles.headerImage}/>

                    <Card>
                        <CardSection><Input label="First Name" placeholderText="Kylie"/></CardSection>
                        <CardSection><Input label="Last Name" placeholderText="Stewart"/></CardSection>
                        <CardSection><Input label="Email" placeholderText="your_email@gmail.com"/></CardSection>
                        <CardSection><Input label="Password" placeholderText="password" secureTextEntry /></CardSection>
                    </Card>
                    <Card>
                        <CardSection><Button>Let's go!</Button></CardSection>
                    </Card>
                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>or</Text>
                        <TouchableOpacity>
                            <Text> Sign In</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        )
    }
};

const styles = {
    headerImage: {
        width: 335,
        height: 110,
        resizeMode: 'stretch'
    },

    footerImage: {
        width: 330,
        height: 150
    }
}

export default SignUp;