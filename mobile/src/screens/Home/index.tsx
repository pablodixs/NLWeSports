import { View, Image, FlatList,  } from "react-native";

import { styles } from "./styles";

import logo from "../../assets/logo-nlw-esports.png";
import { GAMES } from "../../utils/games";

import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

export function Home() {
    return(
        <View style={styles.container}>
            <Image source={logo}
            style={styles.logo}/>

            <Heading 
            title="Encontre seu duo!" 
            subtitle="Selecione o game que deseja jogar..."/>

            <FlatList 
            data={GAMES}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            renderItem={({ item }) => (
                <GameCard data={item}/>
            )}
            />
        </View>
    )
}