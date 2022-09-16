import { Image, FlatList, } from "react-native";
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

import logo from "../../assets/logo-nlw-esports.png";

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([]);

    useEffect(() => {
        fetch('http://10.0.0.113:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, []);

    const navigation = useNavigation();

    function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
        navigation.navigate('game', {id, title, bannerUrl});
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logo}
                    style={styles.logo} />

                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..." />

                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                    renderItem={({ item }) => (
                        <GameCard 
                        onPress={() => handleOpenGame(item)} 
                        data={item}
                        />
                    )}
                />
            </SafeAreaView>
        </Background>
    )
}