import logo from '../../img/launch_1.png'
import { LaunchScreenContainer } from './LaunchcreenStyled'

export const LaunchScreen = () => {
    return (

        <LaunchScreenContainer className='container'>
        <img src={logo} alt="img" width={217}/>
      </LaunchScreenContainer>
    )
}