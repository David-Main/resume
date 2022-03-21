# My resume

This webpage is my personal resume that I am building from the ground up.  
The process, from the design all the way to final production was carefully and meticulously planned to be  
fully responsive, and should also respond to a system's dark and light mode.

## Technologies

The page is built with vanilla html and tailwind css.  
The page was also designed with Adobe XD.

## Running in delvelopment...

Tailwind css is relatively new and needs a bit of upfront setup, hence  
there is a need for me to use the following npm packages:

1. tailwind css (obviously)
2. live-server for viewing changes in realtime during development.
3. concurrently for running two scripts: the tailwindcss watch script  
   and the live-server script simultaneously.

For now these are the packages that will be used. At the end of development  
I will be using postcss to run autoprefixer and cssnano for minification,  
as well as purgecss for further elimination of unused code.

The scripts have already been setup and hence follow the steps below to run  
a development version on your local machine.

### Steps

The following are requirements before this command can work.

- you already have npm installed on your machine.
- you have already cloned this repo...

1. Open your terminal and ensure you are in the directory of the repo.
2. In your terminal, type the following command;

   ```
   npm run setup::dev
   ```

3. That should be all; you should now see an open browser window,  
   with the site in view.

   The above command does two main things;

   - it installs the needed packages from npm: again these include,  
     concurrently, live-server, and tailwindcss
   - It uses concurrently to run two scripts; the first will use tailwindcss  
     to watch for changes in your html files and then update the output file  
     accordingly.  
     The second script will run live server which watches for changes in the  
     public directory, and automatically updates the browser after any change  
     has been made.
