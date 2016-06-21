#!/bin/bash
echo "Provisioning VM..."
sudo apt-get update
echo "Installing Git"
sudo apt-get install git -y
echo "Installing Nginx"
sudo apt-get install nginx -y
echo "Installing PIP"
sudo apt-get install python-pip -y
echo "Install Requirements.txt"
sudo pip install -r /vagrant/server/requirements.txt
echo "Install NodeJS"
sudo apt-get install nodejs -y
echo "Install NPM"
sudo apt-get install npm -y