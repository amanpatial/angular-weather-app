#!/bin/bash

#Get Operating System Values
#Get training test
echo "Getting Operating System Values..."

OS=$(awk '/DISTRIB_ID=/' /etc/*-release | sed 's/DISTRIB_ID=//' | tr '[:upper:]' '[:lower:]')
PWD=$(pwd)
sleep 2

if [ -z "$OS" ];
then
    OS=$(awk '{print $1}' /etc/redhat-release | tr '[:upper:]' '[:lower:]')
        echo $OS
fi

UID=$(id -u)
USER=$(id -u -n)

echo "OS:" $OS
echo "USER:" $USER

#Developer Tools
yum install gcc-c++ make

#Install Node.js v8 LTS on Enterprise Linux and Fedora including RHEL, CentOS or Fedora
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs

#NVM 
env VERSION=`python tools/getnodeversion.py` make install DESTDIR=`nvm_version_path v$VERSION` PREFIX=""
nvm use 8

# Git set up
sudo yum install git

#App Dependencies
nvm -v
npm -v
node -v
git --version

#Fetch git code 
cd /opt 
git clone https://github.com/amanpatial/angular6-weather-app.git
mkdir ~/projects/
mv angular6-weather-app ~/projects/angular6-weather-app
cd ~/projects/angular6-weather-app

#Angular CLI set up 
npm install -g @angular/cli
ng -v

#Install app dependencies
npm install

#Build and bundle the code to destination directory
ng b -prod --output-path=~/build/angular6-weather-app/prod/
