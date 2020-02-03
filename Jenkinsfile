pipeline {
    agent any
    
    stages {
        stage ('cleanup') {
            steps {
                sh 'rm -f ui.zip'
            }
        }
        
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
        
        // stage ('test') {
        //     steps {
        //         sh 'ng test --watch=false --browsers ChromeHeadless'
        //     }
        // }
        
        stage ('sonar scan') {
            steps {
                sh 'sonar-scanner'
            }
        }
        
        stage ('publish artifact') {
            steps {
                sh 'zip ui.zip dist/ui/*'
                sh 'mv ui.zip ~/artifacts/vocabulary-builder/ui/'
            }
        }
    }
}