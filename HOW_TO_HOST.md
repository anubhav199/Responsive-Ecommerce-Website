Got to GitHub

On top right corner, click the plus sign and select add new repository ( Make sure to initialize with a readme file )

Name should be something related to the type of website you're hosting.... if you plan to deploy with github pages, add .github.io to your repo name

if your application has a .env file, then add a .gitignore file in the options ( this is to stop tracking the .env file )

Click continue

Now, it's time to upload your files which you can do by direct upload or using command line below

Go to Vs code and open terminal and select the bash option

make sure in your vs code terminal, that youre in the project directory by doing that cd my-app stuff

The folder of the files should be open in the Vs explorer part

Or

Open the folder in your file manager, select options and click "git bash here" then proceed

git init

git status ... ( Just to check the status of files )

git add .

git commit -m "initial commit"

git branch -M main .... I think this is optional

Copy and paste the "git remote add..." Command amongst the codes that appeared on the github page ... it is in this format ... git remote add origin https://github.com/Sir-Rumeh/react-movie-app.git

git push -u origin main ... (or master)

Go and reload that page on github and you should see your files or click on the repo name at the top

At this stage, if you were deploying with GitHub itself, you would click on settings then scroll down to GitHub pages option, then select from never to main or master (whichever shows), on the folder part, select docs, then save and your link to the site will appear, when you click on it, your site should appear

Else, move on if you want to deploy your site with an hosting site.

For netlify free hosting,

Open the netlify website, and carry out the necessary steps to select the repo you want to deploy from your github account by choosing git as the deployment option

Branch should be master or (main)

Build command should be CI='' npm run build

publish directory should be build/

Click deploy site
