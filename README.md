Frontend Mentor - Tic Tac Toe solution
This is a solution to the Tic Tac Toe challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview
The challenge
Screenshot
Links
My process
Built with
What I learned
Continued development
Author
Acknowledgments
Overview
The challenge
Users should be able to:

View the optimal layout for the game depending on their device's screen size
See hover states for all interactive elements on the page
Play the game either solo vs the computer or multiplayer against another person
Bonus 1: Save the game state in the browser so that it’s preserved if the player refreshes their browser
Bonus 2: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win
Screenshot


Links
Live Site URL: Live Site
My process
I began with the building out the logic and basic gameplay before any type of styling occured. Setting up the board and registering the click events was a bit challenging at first but once I grasped the use of a multi-dimensonal array and using x and y coordinates as my selectors everything feel in place afterwards.

Built with
Flexbox
Mobile-first workflow
React - JS library
What I learned
This was a great projec to tackle after I followed a course on uDemy about functional components in React. Previous projects that I have developed in React were using class components and needed to learn functional components to bring myself up to speed with the industry. This project was great for learning how to pass around states into different components and using functions to set styling.

I was really challenged with styling the selected squares that were part of the win condition. It took me a minute to figure out how to get the background and svg image styled correctly with the right conditional logic to only be applied to the winning squares.

Continued development
I'm going to focus on refactoring this project using useContext and useEffect to help condense some of the code and assist in passing around the states. I feel this is much to learn about these React items.
