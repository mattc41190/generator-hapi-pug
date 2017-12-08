screen # We want to close the terminal window
sudo su # We need to be able to install and update things
yum update # Update our package manager `yum`
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash - # Not sure what this is doing...
sudo yum -y install nodejs git # We want node and git on our instance
git clone YOUR_REPO.git # Clone our repo will need to proivde password
cd YOUR_REPO-com # Move into our project
npm i && npm run build && npm start # Start the app
