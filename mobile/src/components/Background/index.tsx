import { ImageBackground } from 'react-native';

import { styles } from './styles';
import backgroundGalaxy from '../../assets/background-galaxy.png';

interface Props {
    children: React.ReactNode,
}

export function Background({ children }: Props) {
    return (
        <ImageBackground 
        source={backgroundGalaxy} 
        defaultSource={backgroundGalaxy}
        style={styles.container} >
            {children}
        </ImageBackground >
    );
}