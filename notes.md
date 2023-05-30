# This is my cs 260 notes page

## Links

[Startup README.md](https://github.com/sorentys/startup/blob/main/README.md)

## EC2 Notes

### My public IP address:

3.229.20.250

### The ssh command shell and the command to restrict permissions:

ssh -i [key pair file] ubuntu@[ip address]

(back quote) chmod  600 [key pair file] (back quote)

also use ls -l to see contents

## Domain and Certificates

### website name:

cs260tysoren.link

### how to enter into vim server

ssh -i [key pair file] ubuntu@[yourdomainnamehere]

### how to exit out of a vim (e.g. cattyfile):

press esc key and then :wq to save and exit

## GitHub

### General GitHub actions

* git add file_name
* git commit (use -am "*text*")
* git push

## HTML

### Simon-startup deploy site:

https://simon.cs260tysoren.link

### Conference Scheduler deploy site:

https://startup.cs260tysoren.link

### deploy command format:

cd [folder to deploy]
./deployFiles.sh -k [key file path] -h [domain_name] -s [name you want for https link]

### Cs 260 midterm review

Dns of subdomain

- Primary: what we buy (.edu)
- Root domain: what release (buy.edu)
- Subdomain: references to daomin (simon.byu.edu, startup.byu.edu, etc)

- Review what DNS is

What is the Dom tectcontent property do

- Sets the child text for the an element

Promises and awaits on the test, do the kahoot again!!!


- Padding in general: puts space around content of selected element
- Div: division element
- Read the question: css box model: pals before marriage (in going out)
- Review regex
- Go back and check the one that adds an event listener to mouse over on just one p element not all
- Javascript function, = never goes before () and {}
- <javascript></javascript> is wrong
- Javascript object = {n:1} just remember the :
- DOM textContent = Sets the child text for the an element
- How to turn only header class blue in css: div.header { color: blue; }
- JSON: {“x”:1}, no undefined but there is null
- What console command makes a script executable chmod +x deploy.sh
- To point to another DNS record, us CNAME
- Review this question: burger fries taco shake noodles
- Review ADB question
- @import url(“url)

### Node.js

Remember the following:

1. Create your project directory
2. Initialize it for use with NPM by running npm init -y
3. Make sure .gitignore file contains node-modules
4. Install any desired packages with npm install <package name here>
5. Add require('<package name here>') to your application's JavaScript
6. Use the code the package provides in your JavaScript
7. Run your code with node index.js


