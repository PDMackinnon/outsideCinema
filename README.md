# outsideCinema
This demo started from a clone of the boilerplate github found via the link below. Some of the given instructions are retained below; relevant if you want to use github, or if you just want to download the Zip of the repository. 

You do not need to follow the instructions given, but can instead just use LiveServer in VSCode to serve the site locally for testing on the desktop browser or in a locally connected device

You may also find alternative options for deployment to the web. The option described below is for github pages. This can also be configured on the GitHub repo by going to Settings -> Pages and enabling the feature there

Other easy recommended options for hosting are : codeSandbox, Glitch

# A-Frame Boilerplate

This demo was derived from the Boilerplate for creating WebVR scenes with [A-Frame](https://aframe.io).


## Getting Started


### <sup>Option 1:</sup> Download the ZIP kit 📦

[<img src="http://i.imgur.com/UVPZoM0.png" width="200">](https://github.com/PDMackinnon/outsideCinema/archive/refs/heads/main.zip)

After you have __[downloaded and extracted this `.zip` file](https://github.com/PDMackinnon/outsideCinema/archive/refs/heads/main.zip)__ containing the contents of this repo, open the resulting directory, and you'll be have your scene ready in these few steps:

    npm install && npm start
    open http://localhost:3000/

<hr>



## Publishing your scene

If you don't already know, GitHub offers free and awesome publishing of static sites through __[GitHub Pages](https://pages.github.com/)__.

To publish your scene to your personal GitHub Pages:

    npm run deploy

And, it'll now be live at __http://`your_username`.github.io/__ :)

<hr>

To know which GitHub repo to deploy to, the `deploy` script first looks at the optional [`repository` key](https://docs.npmjs.com/files/package.json#repository) in the [`package.json` file](package.json) (see [npm docs](https://docs.npmjs.com/files/package.json#repository) for sample usage). If the `repository` key is missing, the script falls back to using the local git repo's remote origin URL (you can run the local command `git remote -v` to see all your remotes; also, you may refer to the [GitHub docs](https://help.github.com/articles/about-remote-repositories/) for more information).

<hr>

## Still need Help?

### Installation

First make sure you have Node installed.

On Mac OS X, it's recommended to use [Homebrew](http://brew.sh/) to install Node + [npm](https://www.npmjs.com):

    brew install node

To install the Node dependencies:

    npm install


### Local Development

To serve the site from a simple Node development server:

    npm start

Then launch the site from your favourite browser:

[__http://localhost:3000/__](http://localhost:3000/)

If you wish to serve the site from a different port:

    PORT=8000 npm start


## License

This program is free software and is distributed under an [MIT License](LICENSE).
