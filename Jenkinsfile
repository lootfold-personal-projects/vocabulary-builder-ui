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
                sh 'rm -f ~/artifacts/vocabulary-builder/ui/ui.zip'
                sh 'mv ui.zip ~/artifacts/vocabulary-builder/ui/'
            }
        }
    }

    post {
        success {
            build job: 'vocabulary-builder/vocabulary-builder-deployment/master', propagate: false, wait: false
        }

        always {
            sh 'rm -rf dist'
        }
    }
}