

<p align="center">
    <h2 align="center">Rarity Analyzer</h2>
    <p align="center">
    An open source rarity discord bot and site for everyone.
    </p>
</p>


<!-- Table of Contents -->

<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#how-do-i-generate-for-my-collection">How do I generate for my collection?</a></li>
    <li><a href="#setup-the-bot">Setup the discord bot</a></li>
    <li><a href="#developing">Developing</a></li>
    <li><a href="#built-with">Built with</a></li>
    <li><a href="#contributing">Contributing</a></li>
</ul>


## Overview

Rarity Analyzer from the [PunkScapes](https://punkscape.com/) community is an open source solution for generating the rarity site and a discord bot of your collections on ERC-721 standard.


### Rarity sites generated on Telos EVM with this project:
- [TSquirrel - Return of the Samurais Collection](https://rarity.tsquirrel.io/)


## How do I setup the application ?

Before you generate your rarity site, get your collection metadata (ERC-721 format) ready in one JSON array, [like so](./data/collection), then fill in a few configuration values by copying our [Sample ENV](./env.sample) to a newly created `env.production` file. Read below for detailled steps.

### Steps to deploy your rarity site
1. Fork this project (make it private if using bots)
2. Clone it locally or start editing online in github (Navigate to the file and edit it or change domain extension from `github.com` to `github.dev`) without leaving your browser.
3. Update the collection data by replacing the sample file located at `data/collection.json`
4. Create a `.env.production` fill and copy the keys from `.env.sample`, then fill in the configuration values
5. Press `Deploy` below and select the repo or if local run `npx vercel --prod`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## Setup the discord bot

### Configure your bot to run application commands (`/rarity`) 
- Deploy your rarity site and add the bots config in the `.env.production` file. 
- Create a [discord application](https://discord.com/developers/applications)
- Add your INTERACTIONS ENDPOINT URL `<your-rarity-site>/api/rarity` 
- Authorize your discord server with `bot` and `application.commands` bot permission 
- Start interacting with your rarity bot.

The bot interaction api is at ``

### Run and Configure your connected client bot (`!rarity`) 
- WIP

## Developing

### Local Development Environment

**Note:** Make sure you have the latest version of node installed `^14.16`.

```bash
cd rarity-analyzer;
nvm install; # to install the version in .nvmrc
```

1. Clone this repo with git
2. Install dependencies by running `yarn`
3. Start the development server with `yarn dev`
4. Open development site by going to `https://localhost:3000`


## Built with

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Yarn](https://yarnpkg.com/)
- [Prettier](https://prettier.io/)



## Contributing

Please feel free to open an issue for any suggestions you might have for this project.

Thanks for showing interest in contributing to Rarity analyzer. 

[CONTRIBUTING.md](./CONTRIBUTING.md) - WIP 


## Support

<div>
    <p>Adapted with love for Telos EVM by the <a href="https://www.tsquirrel.io">TSquirrels</a>.</p>
    <p>Thanks to the <a href="https://punkscape.xyz">PunkScape Community</a> for this initiative.</p>
</div>
