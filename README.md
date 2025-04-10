# Aplicativo de Cálculo de IMC  
### Por: Murilo Firmo Sola
---
Este projeto tem como objetivo fornecer uma maneira de calcular o Índice de Massa Corporal (IMC). Segue abaixo os detalhes da aplicação:

---

##  Tabela de Referência para Classificação do IMC

| Faixa de IMC     | Categoria             |
|------------------|------------------------|
| Abaixo de 18.5   | Abaixo do peso               |
| 18.5 a 24.9      | Peso normal           |
| 25 a 29.9        | Sobrepeso              |
| 30 a 34.9        | Obesidade grau I|                  
| 35 a 39.9         |  Obesidade grau II


---

## Principais Funcionalidades 

- Cálculo preciso do IMC
- Classificação automática
---
## É necessário obter os seguintes requisitos:
- Node.js
- npm ou yarn
- Expo CLI instalado globalmente
- **App Expo Go** instalado no seu dispositivo móvel
---

## Instalação
```
# Clone o repositório
git clone https://github.com/M-firmo/CalculadoraIMC
# Acesse a pasta do projeto
cd CalculadoraIMC

# Instale as dependências
npm install
# ou
yarn install
```
---
##  Estrutura do Código

Código organizado da seguinte maneira:

- **App.js**: Arquivo principal.

- **Result.js**: Exibe os dados que foram calculados.

- **FormIMC.js**: Recebe o peso e a altura do usuário para calcular o IMC.
---

## Para a execução:
```
npx expo start --tunnel
```

#### IOS
- Você pode escanear pela própria câmera do dispositivo.

#### Android
- É necessário escanear pelo aplicativo Expo Go.


