pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout([$class: 'GitSCM', 
                        branches: [[name: '*/pipeline']], 
                        doGenerateSubmoduleConfigurations: false, 
                        extensions: [[$class: 'CleanBeforeCheckout']], 
                        submoduleCfg: [], 
                        userRemoteConfigs: [[url: 'https://github.com/Richard-Marques/teste-ebac-ui.git']]])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
    }
}