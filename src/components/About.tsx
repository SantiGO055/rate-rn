import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
    const goToHome = () => {
        Actions.main()
    }
    return (
        <Button title="Go to main" onPress={goToHome}>
            <Text>This is ABOUT</Text>
        </Button>
    )
}
export default About