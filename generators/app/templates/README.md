# Static Bio Site

## What Is This?

This is the source code for a static bio site


## Did You Just Generate?

Congratulations! This is gonna be fun!

Here is what we are gonna do to get you online in no time:

1. Start the application up locally (See the starting locally sections)
2. Learn about the technology (See technology section below)
3. Make any modifications that you want to make to the application (get to hacking)
4. Make a remote repository to push your code to https://help.github.com/articles/create-a-repo/
5. Make an EC2 instance
http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html#ec2-launch-instance
6. Connect to that EC2 instance
http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html#ec2-connect-to-instance-linux
7. Start application on EC2 instance on port 80 (See EC2 startup section below)
8. Enjoy

## How Do I Start It Locally?

1. `git clone || git init`
2. `npm i`
3. `node run dev`


## How Do I Start It In A New EC2 Instance?

```
screen # We want to close the terminal window

sudo su # We need to be able to install and update things

yum update # Update our package manager `yum`

curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash - # Not sure what this is doing...

sudo yum -y install nodejs git # We want to use node and git

git clone YOUR_REPO.git # Clone our repo will need to proivde password

cd YOUR_REPO-com # Move into our project

npm i && npm run build && npm start # Start the app
```

## Technology

Server: https://hapijs.com/

Views: https://pugjs.org/api/getting-started.html

Styles: http://stylus-lang.com/
