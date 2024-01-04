# EASY CSV

An Application where you can visualize your csv files easily.

After cloning the project just run

```sh
npm install
```

The project uses Astro V4. More info [here](https://docs.astro.build)

## Stack used

1. Xata database https://xata.io/. You will have to set up your own API KEY.
   Schemas:

- Users: id(string), name(string not null), email(email, not null), password(string not null)
- Files: id(string), file(file), name(string), link(link to users table)

2. Tailwindcss and some components from DaisyUI
3. Check the astro.config.mjs file regarding integrations and other features(server output, adapters...)
4. Packages installed: bcryptjs for password hash, astro-icon and react-icons, csv-string to read the csv files, DaisyUI as dev dependency for styled components.

## Before you start

Make sure to replace the urls with your development one in /components/FileList.tsx.

## API folder

I Created 2 endpoints, one to get the content from the csv file and the other one to delete a file. I've used React component to be able to deal with click event as Astro is set to server output.

The comments checking for data are commented. Feel free to uncomment them to see how the data looks.
