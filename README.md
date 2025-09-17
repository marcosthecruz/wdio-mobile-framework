# 📱 WDIO Mobile Framework

Automação de testes Mobile (Android & iOS) utilizando WebdriverIO + Appium + Mocha + Allure.
Projeto criado como desafio para validar funcionalidades do aplicativo NativeDemoApp.

## 📑 Índice

Tecnologias Utilizadas

Estrutura do Projeto

Cenários Implementados

Pré-requisitos

Como Executar

Android

iOS

Executar um Teste Específico

Relatórios

CI/CD com GitLab

Próximos Passos

## 🔧 Tecnologias Utilizadas

WebdriverIO
– Framework de testes E2E

Appium
– Automação de apps mobile (Android/iOS)

Mocha – Test runner

Allure Report – Relatórios detalhados de execução

GitLab CI/CD – Pipeline de integração contínua

Android Emulator / iOS Simulator – Ambientes de execução local

## 📂 Estrutura do Projeto

.
├── apps/ # APK/IPA do app em teste
├── test/
│ ├── specs/ # Arquivos de testes (.spec.js)
│ ├── pageobjects/ # Page Objects (Home, Login, Forms, etc.)
│ └── data/ # Massa de dados (users.json)
├── wdio.android.conf.js # Configuração Android
├── wdio.ios.conf.js # Configuração iOS
├── wdio.shared.conf.js # Configuração compartilhada
├── .gitlab-ci.yml # Pipeline GitLab CI/CD
└── README.md

## ✅ Cenários Implementados

Login com sucesso

Login com erros

Cadastro (Signup)

Navegação entre telas

Preenchimento de formulários

Validação Home Screen

Webview com scroll até o final

Swipe horizontal no menu Swipe

Mini game Drag & Drop (quebra-cabeça)

Validação de mensagens de erro

## 📦 Pré-requisitos

Node.js v18+

Java JDK 8+ (para Android)

Android Studio (com emulador configurado)

Xcode (para testes iOS, apenas em macOS)

Appium instalado globalmente:

npm install -g appium

## 🤖 Startando Appium Server

appium --allow-cors --base-path /wd/hub --port 4723

## ▶️ Como Executar

Android
npm run android

iOS
npm run ios

## 🎯 Executar um Teste Específico

É possível rodar apenas um arquivo de teste usando --spec:

# Android

npx wdio wdio.android.conf.js --spec ./test/specs/02.signup.spec.js

# iOS

npx wdio wdio.ios.conf.js --spec ./test/specs/02.signup.spec.js

## gitLab

git push gitlab main

## 📊 Relatórios

Após a execução, os resultados ficam em allure-results/.

Para gerar o relatório manualmente:

npx allure generate --clean allure-results -o allure-report

npx allure open allure-report

npm rum allure:serve

## 🔄 CI/CD com GitLab

Este projeto inclui configuração pronta no arquivo .gitlab-ci.yml para:

Rodar testes Android (automatizado a cada push ou merge request)

Rodar testes iOS sob demanda (manual)

Gerar e publicar relatórios Allure em allure-report

## 🚀 Próximos Passos

Publicar Allure Report no GitLab Pages

Rodar testes Android e iOS em paralelo

Integrar com BrowserStack / SauceLabs para execução em nuvem

Adicionar mais cenários E2E

## 📌 Autor: Marcos Cruz

📅 Projeto de automação mobile com WebdriverIO + Appium + GitLab CI/CD
