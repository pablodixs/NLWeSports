import { Modal, View, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { useState } from 'react';

interface Props extends ModalProps {
   discord: string;
   onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: Props) {
   const [isCoping, setIsCoping] = useState(false);

   async function handleCopyDiscordToClipboard() {
      setIsCoping(true);
      await Clipboard.setStringAsync(discord);
      Alert.alert('Discord copiado!', 'Nome de usuário copiado para área de transferência')
      setIsCoping(false);
   };

   return (
      <Modal 
         transparent
         animationType='fade'
         {...rest}
      >  
         <View style={styles.container}>
            <View style={styles.content}>
               <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                  <MaterialIcons 
                     name='close'
                     size={20}
                     color={THEME.COLORS.CAPTION_500}
                  />
               </TouchableOpacity>
               <CheckCircle  
                  size={64}
                  color={THEME.COLORS.SUCCESS}
               />
               <Heading 
                  title="Let's play"
                  subtitle='Agora é só começar a jogar!'
                  style={{alignItems: 'center', marginTop: 24}}
               />
               <Text style={styles.label}>Adicione no Discord</Text>
               <TouchableOpacity 
                  onPress={handleCopyDiscordToClipboard} 
                  style={styles.discordButton}
                  disabled={isCoping}
               >
                  <Text style={styles.discord}>{isCoping ? <ActivityIndicator /> : discord}</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
}