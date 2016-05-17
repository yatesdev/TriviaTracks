#!/bin/bash
echo "Provisioning VM..."
sudo apt-get update
echo "Installing Git"
sudo apt-get install git -y
echo "Installing Nginx"
sudo apt-get install nginx -y
echo "Installing PIP"
sudo apt-get install python-pip -y
echo "Install Django"
sudo pip install django
echo "Install Python-Social-Auth"
sudo pip install python-social-auth