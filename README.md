Wireframe: on phone, yet to post on imgur

Deployed heroku: https://secure-reaches-50075.herokuapp.com/
Deployed gh-pages: https://liquidsteel49.github.io/pokemon-react-client/

Technologies used: react, express, mongoDB, mongoose, javascript, html, css, and JASON

I want to make a replica of the "Who's that pokemon?" game played before and after the commercial break during the original Pokemon TV show. The user must sign up and sign in and make a profile before playing. This profile will have their trainer name and favorite pokemon id with picture.

I need to set up a database using a simplified CSV of gen 1 pokemon. This database will be made using MongoDB and contain a table for user, profile, and pokemon. There will be a loose relationship between user and profile. The API will be set up using an Express back-end framework. The API will need to GET, POST, PATCH, and DELETE user owned profiles. The API will need to GET pokemon table id, name, silouette, and visable to components.

The front end will use React.

Once signed in the user will be able to play a game where a silouette img is displayed and they will be given a chance to answer if the silouette belongs to the name of the pokemon displayed. Half of the time, the name will be correct, the other half will be a randomized incorrect name. The user will answer either true or false with a true/false bubble click; immediately upon click with no submit button. In later versions they will be writing in a name in a form field and submitting it. The form field should not be case sensitive.

When an answer is submitted, the silouette img component will be replaced with a visible pokemon img and there will be a ui response to tell the user if they were correct or not. The user will know how many corrected guesses they have made and that information will be stored with their profile information. When they delete their profile they will lose all the information stored within.

In later versions the user will be able to look up pokemon imgs even when they are not playing through a "pokedex" component.
