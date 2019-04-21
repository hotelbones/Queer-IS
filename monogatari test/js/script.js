"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
"nightsky": "moon.jpg",
"gallery": "gallery.jpg",
"industry": "gaswell.jpg",
};

// Define the Characters
const characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff",
	},

	"Instructor": {
		"Name": "Instructor",
		"Color": "#5bcaff",
	},

	"moon": {
		"Name": "moon",
		"Color": "#00000",
	},

	"trickster": {
		"Name": "trickster",
		"Color": "#5bcaff",
		"Directory": "trickster",
		"Images":{
			"neutral": "t-neutral.png",
			"happy": "t-happy.png",
			"perform": "t-perform.png",
			"dark": "t-dark.png",
		}
	},


	"vandal": {
		"Name": "vandal",
		"Color": "#5bcaff",
		"Directory": "vandal",
		"Images":{
			"dark": "v-dark.png",
			"masked": "v-masked.png",
			"masked-mirrored": "v-masked-mirrored.png",
			"neutral": "v-neutral.png",
			"somber": "v-somber.png",
		}
	},

	"witch": {
		"Name": "witch",
		"Color": "#3bcaff",
		"Directory": "witch",
		"Images":{
			"dark": "w-dark.png",
			"happy": "w-happy.png",
			"intent": "w-intent.png",
			"look": "w-look.png",
			"magic": "w-magic.png",
			"sad": "w-sad.png",
		}
	},

};

let script = {
	// The game starts here.
	"Start": [
		"scene nightsky",
		"show witch look with fadeIn",
		"witch Here comes the moon",
		"witch If my readings are correct, tonight will be the night that the stars reconfigure, and the participants will appear.",
		"witch .......",
		"witch It's about time that the coil started",
		"witch I hope we can change it",
		"hide witch with fadeOut",

		"The moons glow feels different than other nights. The glow tonight can be felt on your face, washing over you with an aura.",
		"moon Another participant in tonights activities?",

		{"Choice":{
			"wha":{
				"Text": "Wha...?",
				"Do": "jump moonspeak",
			},

			"who":{
				"Text": "Who is that?",
				"Do": "jump moonspeak",
			}
		}}

	],

	"moonspeak": [

		"moon It's alright, everything will be explained soon. But for now there is only so much time, and things that you must do.",
		"moon Tonight you will have the opportunity to transform with others through interfaces and intersections. I want you to know that just because you have the opportunity, doesn't mean you have to accept it.",
		"moon In this transformation you may find pleasure and good fortune, or you may find discomfort and pain.",
		"moon It is for this reason I come to ask if you want to consensually enter this transformative process.",
		"NOTE: This game is about transforming your social media identity and through the mechanics, connects to your social media account and posts to it based on your actions.",

		{"Choice":{
			"Dialog": "moon Do you consent and permit your entrance into this process?",
			"yes":{
				"Text": "Yes, I consent",
				"Do": "jump gallery"
			},
			"no":{
				"Text": "No, I will stop here",
				"Do": ""
			}
		}}


	],

	"gallery": [

		"scene gallery with fadeIn",
		"The moons light washes over you and you awaken in an art gallery. People are walking around, but only within this room. An impossible figure sits at the front.",
		"Instructor Welcome everyone, glad to see full attendance again today.",
		"Instructor All of you are here for your various reasons, as usual.",
		"Instructor But, I'd like you to contribute to your community, as well as come here for the work around you.",

		"show vandal masked with fadeIn",
		"vandal .......",
		"a masked figure looks you up and down as everyone is making themselves comfortable.",
		"People are looking around the space, talking, or even beginning to sit down. But this masked one continues to stare at you.",
		"vandal I don't remember seeing you around.",

		{"Choice":{
			"new":{
				"Text": "I'm ne-",
				"Do": "jump uncaring",
			}

			// "uncaring":{
			// 	"Text": "I don't care"
			// }
		}}

	],

		"uncaring": [
			"vandal I don't care, I just...",
			"show vandal masked-mirrored with fadeIn",
			"vandal .......",
			"the masked figure begins to walk past you and whispers while walking by",
			"vandal if you want, we can meet up in the backroom later",
			"hide vandal with fadeOut",
			"they go to sit on their mat before you can answer",

			"Instructor Alright everyone, get to your mats",
			"You look around and everyone is walking to different colors mats on the floor.",
			"It seems like you should find one to sit at, but you didn't bring one.",

			{"Choice":{
				"walk":{
					"Text": "Walk into another room",
					"Do": "jump walk",
				},
				"ask":{
					"Text": "Ask the person closest for help",
					"Do": "jump ask",
				},
				"wait":{
					"Text": "Wait around awkwardly silent",
					"Do": "jump wait",
				},

			}	}

		],

		"walk": [
			"slowly, you edge towards the doorway into another room of the gallery",
			"When the instructors figure doesn't seem to look your direction, you slip out and into the next room",
			"scene industry",
			"When you slide around the corner, the gallery looks different in an instant. No more paintings on the walls, in fact there arent any walls.",
			"You look through brush and trees, and then a flare of light can be seen in the corner of your eye.",
			"show vandal masked with fadeIn",
			"vandal you decided to come...sick..."
		],

		"ask": [
			"You ask a person close to you what to do",
			"show witch sad with fadeIn",
			"witch oh, you don't have a mat? Here.",
			"show witch magic",
			"her left eye shines and a rectangle rises from inside the ground.",
			"show witch happy",
			"witch You can sit next to me, I have a lot I can teach ya.",
		],

		"wait": [
			"You wait around, hoping someone will notice that you are the only one sitting down.",
			"Instructor Alright everyone, lets begin the feed.",
			"No one did.",
			"trickster *snickers*",
		],



};
