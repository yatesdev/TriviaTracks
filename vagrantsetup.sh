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
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

mkdir ~/node_modules
ln -s /home/vagrant/node_modules /vagrant/client/node_modules
cd /vagrant/client
npm install