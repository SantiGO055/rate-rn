import { Router, Scene } from 'react-native-router-flux'
import Main from './Main'
import React from 'react'
import About from './About'
const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="main" component={Main} title="Main" initial={true} />
            <Scene key="about" component={About} title="About" />
        </Scene>
    </Router>
)
export default Routes