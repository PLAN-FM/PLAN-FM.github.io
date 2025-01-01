# AAAI 2025 Bridge Program



Prerequisites (MacOS)

* brew
* nvm  
    `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`
* node.js  
    `brew install node`
* react and next   
    `npm install react@latest react-dom@latest next@latest`
* yarn
    `npm install --global yarn`
* gh-pages 
    `npm install -g gh-pages --save-dev`


Build website locally

```
git clone https://github.com/PLAN-FM/PLAN-FM.github.io.git
git checkout --track origin/main
yarn install
yarn build
yarn start
```

Deploy website

```
yarn deploy
```