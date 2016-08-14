#!/bin/bash
echo "Provisioning VM..."
#sudo apt-get update
echo "Installing Git"
sudo apt-get install git -y
echo "Install NodeJS"
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo mkdir /home/vagrant/node_modules
sudo ln -s /home/vagrant/node_modules /vagrant/client/node_modules