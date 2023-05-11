#!groovy
pipeline {
    agent none
    stages {
        stage('Docker build') {
            agent any
            steps {
                sh 'docker build -t lexprimost/atissdakar:latest .'
            }
            
        }
        stage('Docker Push') {
            agent any
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                sh 'docker push lexprimost/atissdakar:latest'
                }
                    
            }

        }
        stage('Docker Stop containers using old image') {
            agent any
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                    sh 'docker-compose stop atissdakar'
                    sh 'docker rm atissdakar'
                    sh 'docker image rm lexprimost/atissdakar:latest'
                }

            }

        }
        stage('Docker Pull Image') {
            agent any
            steps {
                sh 'docker pull lexprimost/atissdakar:latest'
            }

        }
        stage('Docker Run container') {
            agent any
            steps {
               sh 'docker-compose up -d atissdakar' 
            }

        }
    }
}

fat