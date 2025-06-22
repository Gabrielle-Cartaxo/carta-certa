# 🃏 Carta Certa

Um jogo mobile inspirado no Balatro, desenvolvido com **React Native e Expo**.

## 🎮 Como Jogar

1. **Rodadas**: O jogo possui 10 rodadas
2. **Cartas**: A cada rodada, você recebe uma carta aleatória com valor de 1 a 13
3. **Modificadores**: Junto da carta, aparecem 3 modificadores aleatórios (ex: `+2`, `x2`, `-3`, etc.)
4. **Decisão**: Escolha 1 modificador para aplicar na carta atual
5. **Pontuação**: O valor final da carta (após o modificador) é somado ao seu score total
6. **Fim do Jogo**: Após 10 rodadas, o jogo termina e mostra sua pontuação final

## 🏆 Sistema de Pontuação

- **≥ 100 pontos**: 🏆 Você é um Mestre das Cartas!
- **≥ 70 pontos**: 🎉 Muito bom!
- **≥ 50 pontos**: 🙂 Você pode melhorar!
- **< 50 pontos**: 😅 Tente novamente!

## 🧮 Tipos de Modificadores

- **Adição**: `+1`, `+2`, `+3`, `+4`, `+5`
- **Subtração**: `-1`, `-2`, `-3`, `-4`, `-5`
- **Multiplicação**: `x2`, `x3`, `x4`
- **Divisão**: `/2`, `/3`
- **Definição**: `=1`, `=5`, `=10`, `=13`

## 🚀 Como Executar

### 📱 Para Mobile (Recomendado)

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Instalar Expo Go no seu smartphone**:
   - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS](https://apps.apple.com/app/expo-go/id982107779)

3. **Iniciar o projeto**:
   ```bash
   npm start
   ```

4. **Conectar ao Expo Go**:
   - Certifique-se de que seu smartphone e computador estão na mesma rede Wi-Fi
   - Abra o app Expo Go
   - Escaneie o QR Code que aparece no terminal
   - O jogo carregará automaticamente

### 🌐 Para Web

```bash
npm start
# Pressione 'w' para abrir no navegador
```

### 📱 Para Emulador

```bash
# Android
npm run android

# iOS (apenas macOS)
npm run ios
```

## 📁 Estrutura do Projeto

```
/carta-certa
  /api
    mockModifiers.js     # API mockada para modificadores
  App.js                 # Componente principal do jogo
  package.json           # Dependências do projeto
```

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento React Native
- **JavaScript**: Linguagem de programação
- **React Hooks**: Gerenciamento de estado (useState, useEffect)

## 🎨 Características do Jogo

- ✅ Interface otimizada para mobile
- ✅ Design responsivo para diferentes tamanhos de tela
- ✅ Sistema de pontuação dinâmico
- ✅ Modificadores aleatórios a cada rodada
- ✅ Tela de fim de jogo com feedback
- ✅ Botão para reiniciar o jogo
- ✅ Design moderno com cores atrativas
- ✅ Suporte a diferentes tipos de modificadores
- ✅ Compatível com Expo Go

## 📱 Otimizações Mobile

- **Design Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Touch-Friendly**: Botões otimizados para toque
- **Performance**: Carregamento rápido e suave
- **Orientação**: Suporte a orientação portrait
- **Safe Area**: Respeita as áreas seguras do dispositivo

## 🔮 Funcionalidades Futuras (Opcionais)

- 💾 Salvar highscore com AsyncStorage
- 🎭 Animações com react-native-reanimated
- 🎨 Imagens SVG para representar cartas
- 📊 Histórico de partidas
- 🏆 Sistema de conquistas
- 🔔 Sons e efeitos sonoros

## 📱 Compatibilidade

- ✅ **Android 5.0+** (via Expo Go)
- ✅ **iOS 11.0+** (via Expo Go)
- ✅ **Web** (Chrome, Firefox, Safari)

## 🎯 Dicas para Mobile

- Use o **Expo Go** para a melhor experiência
- Mantenha o app Expo Go atualizado
- Conecte-se à mesma rede Wi-Fi do computador
- Para melhor performance, feche outros apps em segundo plano
- O jogo funciona offline após o carregamento inicial

---

**Desenvolvido com ❤️ usando React Native e Expo** 