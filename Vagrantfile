# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.define "client" do |client|
    client.vm.box = "ubuntu/trusty64"
    client.vm.network "forwarded_port", guest: 3000, host: 3000
    # client.vm.synced_folder "./", "/var/www", type: "smb", mount_options: ["vers=3.02","mfsymlinks"]
    client.vm.provider "virtualbox" do |vb|
      vb.name = "client"
      vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
      vb.memory = "1024"
    end
    client.vm.provision "shell", path: "vagrantClient.sh"
  end
  config.vm.define "api" do |api|
    api.vm.box = "ubuntu/trusty64"
    api.vm.network "forwarded_port", guest: 9000, host: 9000
    api.vm.provider "virtualbox" do |vb|
      vb.name = "api"
      vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
      vb.memory = "1024"
    end
    api.vm.provision "shell", path: "vagrantAPI.sh"
  end
end