# 📱 Instalação e Execução - Carta Certa

## Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Smartphone** com Android 5.0+ ou iOS 11.0+
- **Conexão Wi-Fi** (mesma rede do computador)

## 🚀 Passo a Passo - Mobile (Recomendado)

### 1. Preparar o Ambiente
```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd carta-certa

# Instalar dependências
npm install
```

### 2. Instalar Expo Go no Smartphone

#### Android
1. Abra a **Google Play Store**
2. Procure por "Expo Go"
3. Instale o app oficial da Expo

#### iOS
1. Abra a **App Store**
2. Procure por "Expo Go"
3. Instale o app oficial da Expo

### 3. Executar o Projeto
```bash
npm start
```

### 4. Conectar ao Expo Go

1. **Certifique-se** de que seu smartphone e computador estão na **mesma rede Wi-Fi**

2. **Abra o app Expo Go** no seu smartphone

3. **Escaneie o QR Code**:
   - **Android**: Use o app Expo Go para escanear
   - **iOS**: Use a câmera do iPhone

4. **Aguarde o carregamento** - O jogo aparecerá automaticamente

## 🎮 Como Jogar no Mobile

1. **Toque nos botões** dos modificadores para escolher
2. **Veja sua pontuação** atualizar em tempo real
3. **Complete as 10 rodadas** para ver seu resultado final
4. **Toque em "Jogar Novamente"** para reiniciar

## 🔧 Solução de Problemas

### Não consegue conectar ao Expo Go
```bash
# Verificar se está na mesma rede Wi-Fi
# Reiniciar o servidor
npx expo start --clear
```

### Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de Porta
```bash
# Se a porta 8081 estiver ocupada
npx expo start --port 8082
```

### App não carrega
- Verifique se o Expo Go está atualizado
- Feche e abra novamente o app Expo Go
- Reinicie o servidor de desenvolvimento

## 📱 Otimizações Mobile

### Performance
- Feche outros apps em segundo plano
- Use uma conexão Wi-Fi estável
- Mantenha o Expo Go atualizado

### Interface
- O jogo é otimizado para toque
- Botões têm tamanho adequado para dedos
- Design responsivo para diferentes telas

## 🎯 Dicas Importantes

- **Primeira execução**: Pode demorar alguns segundos para carregar
- **Offline**: Após carregar, o jogo funciona offline
- **Atualizações**: O Expo Go atualiza automaticamente quando há mudanças
- **Bateria**: O desenvolvimento pode consumir mais bateria

## 📱 Compatibilidade

- ✅ **Android 5.0+** (via Expo Go)
- ✅ **iOS 11.0+** (via Expo Go)
- ✅ **Tablets** (Android e iOS)

## 🌐 Alternativa Web

Se preferir testar no navegador:
```bash
npm start
# Pressione 'w' para abrir no navegador
```

---

**Divirta-se jogando Carta Certa no seu smartphone! 🃏📱** 