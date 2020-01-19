pipeline {
    agent any
    
    stages {
        stage ('restore') {
            steps {
                sh 'npm install'
            }
        }
        stage ('build') {
            steps {
                sh 'ng build --prod'
            }
        }
        stage ('test') {
            steps {
                sh 'ng test --watch=false --browsers ChromeHeadless'
            }
        }
    }
}