# ![// PUT RESPONSIVE IMAGE HERE //](assets/images/readme/responsive-BRITbrAIN.png)

<h1 align="center">BRITbrAIN</h1>

BRITbrAIN is a map based quiz game with general knowledge questions. Answer the question by choosing the correct region on the map.

This site was built using [GitHub Pages](https://pages.github.com/).

How well do you know Britain?

[Take the Quiz] // PUT SITE LINK HERE //

---

## <u>Table of contents</u>

- [&rarr; **User Experience (UX)**](#-rarr----user-experience--ux---)
  - [Purpose](#purpose)
  - [User stories](#user-stories)
  - [Design](#design)
  - [Wireframes](#wireframes)
- [&rarr; **Features**](#-rarr----features--)
  - [Features used](#features-used)
  - [To-do list](#to-do-list)
  - [Status](#status)
- [&rarr; **Technologies**](#-rarr----technologies--)
  - [Languages](#languages)
  - [Frameworks, Libraries & Programs](#frameworks--libraries---programs)
- [&rarr; **Deployment**](#-rarr----deployment--)
  - [Deploy to Github](#deploy-to-github)
  - [Accessing code](#accessing-code)
- [&rarr; **Testing**](#-rarr----testing--)
  - [Testing user stories](#testing-user-stories)
  - [Validator checks](#validator-checks)
  - [Responsive Design](#responsive-design)
  - [Additional Testing](#additional-testing)
  - [Bugs](#bugs)
- [&rarr; **Credits**](#-rarr----credits--)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)
- [&rarr; **Contact**](#-rarr----contact--)

---

# &rarr; **User Experience (UX)**

#### Purpose

The purpose of this site is to create a fun interactive quiz for the user whilst developing both their general and geographical knowledge on Britain. My decision to create this site was based on a family interest of map games and my lack of general knowledge on Britain. By completing this project I will have shown greater experience using Javascript and hopefully expanded my general knowledge of my country.

#### User stories

The <u>key priorities</u> for my user are as follows:

1. A user friendly site that is easy to navigate.

2. An enjoyable, interactive quiz to play which also aims to develop their knowledge on Britain.

3. An easily accessible button to start the quiz.

4. Clear instructions for the user on how to play.

5. Recorded score and leaderboard, for user to check personal performance and ranking against other players.

6. A question counter to keep track of their progress throughout the quiz.

7. A timer to limit the time per question to add further interaction for the user and prevent any users from cheating.

8. Ability to contact me through an online form.

9. About us and features section on site.

10. Links to social media sites.

#### Design

- **Structure**

  - A simple design structure with a dropdown menu and page navigation to allow easy navigation throughout site.

- **Colour scheme**

  - The colour scheme is primarily based around peaches in association with the brain and extra colours were added to compliment the palette using [Coolors](https://coolors.co).
  - I have used the 'opacity' property to create lighter and darker shades.

    ![Colour Scheme](assets/images/readme/colourScheme.png)

- **Typography**

#### Wireframes

As part of the design process, before starting my project I created sketched out initial drawings then used <u>Balsamiq</u> to create sharper wireframes. Creating these mock-ups helped me plan the basic structure and arrangement of the features for my site.

[view initial drawings](assets/images/readme/initial-drawing.jpg)

[View wireframes](assets/files/wireframes.pdf)

---

## &rarr; **Features**

#### Features used:

#### To-do list:

#### Status

---

## &rarr; **Technologies**

#### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

#### Frameworks, Libraries & Programs
- [**Bootstrap 4.5.0**](https://getbootstrap.com/)
    - Bootstrap was used to assist with the responsiveness and styling of the website using design templates.

- [**Google fonts**](https://fonts.google.com/)
  - Google fonts were used to import the 'Raleway' font into the style.css file which is used on all pages throughout the project.
  
- [**Font Awesome 4.7.0**](https://fontawesome.com/)
  - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

- [**jQuery:**](https://jquery.com/)
  - jQuery came with Bootstrap to make the components used responsive.
  - Included at end of body tag within HTML files to ensure smooth running off HMTL and CSS.

- [**Git**](https://git-scm.com/)
  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- [**GitHub**](https://github.com/)
  - GitHub is used to store the project code after being pushed from Git.
  - GitHub Wiki TOC generator used to format README.md table of contents.

---

## &rarr; **Deployment**

#### Deploy to Github

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository.

2. At the top of the Repository (not top of page), locate the "Settings" button on the menu.

![Deploy-settings](assets/images/readme/deploy-settings.png)

3. Scroll down the Settings page until you locate the "GitHub Pages" Section.

4. Under "Source", click the dropdown called "None" and select "Master Branch".

![Deploy-settings](assets/images/readme/deploy-GHsource.png)

5. The page will automatically refresh.

6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

#### Accessing code

Follow the steps below if you are wanting to propose changes to the project or to use the project as a starting point for your own idea.

- **Forking the GitHub Repository**

  Forking allows you to create a copy of the original repository and propose changes to the repository owner via a pull request.

  1. Log in to GitHub and locate the GitHub Repository

  2. At the top of the Repository (not top of page) just above the "Settings" button on the menu, locate the "Fork" button.

  ![forking](assets/images/readme/forking.png)

  3. You should now have a copy of the original repository in your GitHub account.

- **Making a Local Clone**

When you clone a repository, the repository is copied on to your local machine.

1. Log in to GitHub and locate the GitHub Repository.

2. Under the repository name, click the "download code" option.

![Clone](assets/images/readme/clone.png)

3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.

![Clone-link](assets/images/readme/clone-link.png)

4. Open Git Bash

5. Change the current working directory to the location where you want the cloned directory to be made.

6. Type git clone, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/BRITbrAIN.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/BRITbrAIN.git

> Cloning into `BRITbrAIN`...
> remote: Enumerating objects: 299, done.
> remote: Counting objects: 100%, (299/299),  done.
> remote: Compressing objects: 100% (156/156), done.
> Recieving objects: remove: Total 299 (delta 145), reused 267 (delta 126), pack-reused 0
> Recieving objects: 100% (299/299), 4.61MiB | 2.98 MiB/s, done.
> Resolving deltas: 100% (145/145), done. Unpacking objects: 100% (10/10), done.
```

Now, you have a local copy of your fork of the BRITbrAIN repository.

> Note: The repository name and output numbers that you see on your computer, representing the total file size, etc, may differ from the example I have provided above.

---

## &rarr; **Testing**

#### Testing user stories

Testing my user's <u>key priorities</u>:

#### Validator checks

#### Responsive Design

#### Additional Testing

#### Additional Testing

#### Bugs

## &rarr; **Credits**

#### Content

- Bootstrap 4.5: Bootstrap Library used throughout the project, components used include the grid System, forms, buttons, modals, nav menu, leaderboard table

- [css-tricks.com](https://css-tricks.com/): Using 8 digit hex codes.

- [codepen.io](https://codepen.io/zebateira/pen/VvqJwm?css-preprocessor=none): Helped with code for game timer.

- [codepen.io](https://codepen.io/vaughan1/pen/ZXOxKW): Helped with code for displaying the clickable map regions.

- [sweetalert2](https://sweetalert2.github.io/): Used for responsive popup boxes.

- [youtube.com](youtube.com):
  - [Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k): Helped with code for js file.

#### Media

- [pixabay.com](https://pixabay.com/): Brain image for game logo.
- [mapchart.net](https://mapchart.net/): map image for game logo.

#### Acknowledgements

## &rarr; **Contact**

Created by @lucyjpjones

If you have any problems, questions or suggestions for my project please contact me on the email below:

```
lucyjpjones@gmail.com
```

Thanks for visiting.

&copy;
LucyJPJones
