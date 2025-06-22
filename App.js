import React, {
    useState,
    useEffect
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
} from 'react-native';
import {
    getRandomModifiers,
    applyModifier
} from './api/mockModifiers';

const {
    width,
    height
} = Dimensions.get('window');

export default function App() {
    const [currentCard, setCurrentCard] = useState(0);
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);
    const [modifiers, setModifiers] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [selectedModifier, setSelectedModifier] = useState(null);
    const [modifierResults, setModifierResults] = useState({});

    useEffect(() => {
        startNewRound();
    }, []);

    const calculateModifierResults = (cardValue, modifiers) => {
        const results = {};
        modifiers.forEach(modifier => {
            results[modifier] = applyModifier(cardValue, modifier);
        });
        return results;
    };

    const getButtonColor = (modifier) => {
        if (!selectedModifier) return '#3498db';

        const results = Object.values(modifierResults);
        const currentResult = modifierResults[modifier];

        const sortedResults = [...results].sort((a, b) => b - a);
        const bestResult = sortedResults[0];
        const worstResult = sortedResults[sortedResults.length - 1];

        if (currentResult === bestResult) {
            return '#27ae60';
        } else if (currentResult === worstResult) {
            return '#e74c3c';
        } else {
            return '#f39c12';
        }
    };

    const getFeedbackMessage = () => {
        if (!selectedModifier) return '';

        const color = getButtonColor(selectedModifier);
        if (color === '#27ae60') return '🟢 Excelente escolha!';
        if (color === '#f39c12') return '🟡 Boa escolha!';
        if (color === '#e74c3c') return '🔴 Poderia ser melhor!';
        return '';
    };

    const startNewRound = () => {
        const randomCard = Math.floor(Math.random() * 13) + 1;
        const randomModifiers = getRandomModifiers();

        setCurrentCard(randomCard);
        setModifiers(randomModifiers);
        setSelectedModifier(null);

        const results = calculateModifierResults(randomCard, randomModifiers);
        setModifierResults(results);
    };

    const applyModifierToCard = (modifier) => {
        setSelectedModifier(modifier);

        setTimeout(() => {
            const finalValue = applyModifier(currentCard, modifier);
            const newScore = score + finalValue;

            setScore(newScore);

            if (round >= 10) {
                setGameOver(true);
            } else {
                setRound(round + 1);
                startNewRound();
            }
        }, 1000);
    };

    const restartGame = () => {
        setCurrentCard(0);
        setScore(0);
        setRound(1);
        setModifiers([]);
        setGameOver(false);
        setSelectedModifier(null);
        setModifierResults({});
        startNewRound();
    };

    const getPerformanceTitle = (finalScore) => {
        if (finalScore >= 150) return '🏆 Você é um Mestre das Cartas!';
        if (finalScore >= 100) return '🎉 Muito bom!';
        if (finalScore >= 80) return '🙂 Você pode melhorar!';
        return '😅 Tente novamente!';
    };

    if (gameOver) {
        return ( <SafeAreaView style = {styles.container}>

                <StatusBar barStyle = "light-content" backgroundColor = "#2c3e50"/>

                <View style = { styles.gameOverContainer}>
                <Text style = {styles.gameOverTitle}> 🎮Fim de Jogo! </Text> 
                <Text style = {styles.finalScore}> Pontuação Final: {score} </Text> 
                <Text style = {styles.performanceTitle}> {getPerformanceTitle(score)} </Text>

                <TouchableOpacity style = {styles.restartButton} onPress = {restartGame}>
                    <Text style = {styles.restartButtonText}> Jogar Novamente </Text> 
                </TouchableOpacity> 
            </View> 
            </SafeAreaView>
        );
    }

    return ( 
    <SafeAreaView style = {styles.container} >
        < StatusBar barStyle = "light-content" backgroundColor = "#2c3e50" / >
            <View style = { styles.header}>
                <Text style = {styles.title}> 🃏Carta Certa </Text> 
                <Text style = {styles.roundText}> Rodada {round} /10 </Text>
                <Text style = {styles.scoreText} > Score: {score} </Text> 
            </View>

            <View style = {styles.cardContainer}>
                <Text style = {styles.cardLabel} > Carta Atual </Text> 
                <View style = {styles.card}>
                    <Text style = {styles.cardValue} > {currentCard} </Text>
                </View > 
            </View>

            <View style = {styles.modifiersContainer}>
                <Text style = {styles.modifiersLabel}> Escolha um modificador: 
                </Text> 
                    <View style = {styles.modifiersGrid}> {modifiers.map((modifier, index) => 
                        (<TouchableOpacity key = {index}
                            style = {[styles.modifierButton,
                                {backgroundColor: getButtonColor(modifier)}]}
                            onPress = {() => applyModifierToCard(modifier)}
                            activeOpacity = {0.7}
                            disabled = {selectedModifier !== null}>
                            <Text style = {styles.modifierText}> {modifier} </Text>
                            {
                            selectedModifier && (<Text style = {styles.modifierResult}> = {modifierResults[modifier]} </Text>)
                            } 
                        </TouchableOpacity>))} 
                    </View> 
            </View >

        <View style = {styles.instructions}>
            <Text style = {styles.instructionsText}> {selectedModifier ?
                'Aguarde...' : 'Escolha um modificador para aplicar à sua carta!'
            } </Text> 
            {selectedModifier && ( <Text style = {styles.feedbackText}> {getFeedbackMessage()} </Text>
            ) }
        </View> 
    </SafeAreaView>);
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    header: {
        alignItems: 'center',
        paddingTop: height * 0.02,
        paddingBottom: height * 0.03,
    },
    title: {
        fontSize: Math.min(width * 0.08, 32),
        fontWeight: 'bold',
        color: '#ecf0f1',
        marginBottom: height * 0.01,
    },
    roundText: {
        fontSize: Math.min(width * 0.045, 18),
        color: '#bdc3c7',
        marginBottom: height * 0.005,
    },
    scoreText: {
        fontSize: Math.min(width * 0.05, 20),
        fontWeight: 'bold',
        color: '#f39c12',
    },
    cardContainer: {
        alignItems: 'center',
        marginBottom: height * 0.04,
    },
    cardLabel: {
        fontSize: Math.min(width * 0.04, 16),
        color: '#bdc3c7',
        marginBottom: height * 0.01,
    },
    card: {
        width: Math.min(width * 0.3, 120),
        height: Math.min(width * 0.4, 160),
        backgroundColor: '#e74c3c',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#c0392b',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cardValue: {
        fontSize: Math.min(width * 0.12, 48),
        fontWeight: 'bold',
        color: '#ffffff',
    },
    modifiersContainer: {
        paddingHorizontal: width * 0.05,
        marginBottom: height * 0.03,
        flex: 1,
    },
    modifiersLabel: {
        fontSize: Math.min(width * 0.045, 18),
        color: '#ecf0f1',
        textAlign: 'center',
        marginBottom: height * 0.02,
    },
    modifiersGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    modifierButton: {
        padding: Math.min(width * 0.04, 15),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: Math.min(width * 0.2, 80),
        minHeight: Math.min(height * 0.08, 60),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modifierText: {
        fontSize: Math.min(width * 0.05, 20),
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 2,
    },
    modifierResult: {
        fontSize: Math.min(width * 0.035, 14),
        color: '#ffffff',
        fontWeight: 'bold',
    },
    instructions: {
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
        paddingBottom: height * 0.02,
    },
    instructionsText: {
        fontSize: Math.min(width * 0.04, 16),
        color: '#bdc3c7',
        textAlign: 'center',
        lineHeight: Math.min(width * 0.06, 24),
    },
    feedbackText: {
        fontSize: Math.min(width * 0.04, 16),
        color: '#ecf0f1',
        textAlign: 'center',
        marginTop: height * 0.01,
        fontWeight: 'bold',
    },
    gameOverContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
    },
    gameOverTitle: {
        fontSize: Math.min(width * 0.09, 36),
        fontWeight: 'bold',
        color: '#ecf0f1',
        marginBottom: height * 0.03,
        textAlign: 'center',
    },
    finalScore: {
        fontSize: Math.min(width * 0.07, 28),
        fontWeight: 'bold',
        color: '#f39c12',
        marginBottom: height * 0.02,
    },
    performanceTitle: {
        fontSize: Math.min(width * 0.06, 24),
        color: '#2ecc71',
        marginBottom: height * 0.04,
        textAlign: 'center',
    },
    restartButton: {
        backgroundColor: '#e74c3c',
        paddingHorizontal: Math.min(width * 0.075, 30),
        paddingVertical: Math.min(height * 0.015, 15),
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    restartButtonText: {
        fontSize: Math.min(width * 0.045, 18),
        fontWeight: 'bold',
        color: '#ffffff',
    },
});