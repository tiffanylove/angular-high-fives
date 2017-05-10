# Fictional Character High Five-Off

In this assignment, you'll be making a making an app to high-five fictional characters. However, each fictional character's skill with high-fiving will be randomly generated. And each high five may or may not work!


## Setup

Run `npm install` to get Express. Angular and Bootstrap are included.

## In the View:
Display a character image, their name, and something about them (ya know, it's good to have an introduction before high-fiving strangers).
Note: Feel free to use Google to find content or make up your own! Include some images and give it your best styling effort.

Have a button for the user to click to give the character a high five. When clicked, generate a random number between 1 and 10 to compare against the character's high-five skill.

Display a statement about many high fives the character has successfully completed.

## High Five Logistics
Randomly generate a high-five skill for your character between 1 and 10. Note: this will mean the character's skill will be different each time the app is run.

One character that is unpredictable with high-fives: randomly generate their skill level between 1 and 10.

When a user clicks to give the character a high-five, randomly generate the quality of that high five (1-10).  If the high-five quality => character's high-five skill, the high five is successful. Otherwise, it is a miss!

If a highfive is successful, update the highfive count.

![](http://i.giphy.com/TEFplLVRDMWBi.gif)

To allow for more flexibility for POSSIBLE future changes put the successful high-five count and the random number generator a service.


# PART 2: Don't work on this until we've introduced Angular Routing
Using ng-router, give your app 2 more views with 2 more fictional characters.

One character that is very good at high-fives: randomly generate their skill level between 6 and 10.
One character that is decent with high-fives: randomly generate their skill level between 4 and 10.

You will need to find a way to share the total number of high fives across your controllers.
For example: "I've successfully made 4 of the 11 successful high fives!"

You'll be using Angular Routes to make a separate view for 3 different fictional characters of your choice. Your page should have a static header and footer of some kind, and 3 navigation buttons to swap out the content of the characters.

## Hard Mode
Use ng-show, ng-hide, ng-if, or ng-animate to add some creative, dynamic elements to your views when users click on things.

## Pro Mode
Make the whole experience responsive with the Bootstrap.
