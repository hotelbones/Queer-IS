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
"gallery": "gallery2.jpg",
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
			"surprised": "w-surprised.png",
		}
	},

};

let script = {
	// The game starts here.
	"Start": [
		"scene gallery",
		"show witch happy",
		"witch uhhh...I guess we will just have to do it here",

		{"Choice":{
			"dowhat":{
				"Text": "Do WHAT here?",
				"Do": "jump emotional",
			},

			"ready":{
				"Text": "Are you sure its safe?",
				"Do": "jump safe",
			}
		}}

	],

	"emotional": [
		"show witch surprised",
		"witch ..........",
		"show witch happy",
		"witch ha ha.....",
		"witch You goof so much! Come on, its just gonna be....",
		"show witch intent",
		"witch ..emotional.",

	],

		"safe": [
			"show witch dark",
			"witch I think soon what is and isn't safe will probably change a lot for you.",
			"witch ........",
			"witch Right now, with what I understand about you. No this probably isn't safe. It's honestly going to be uncomfortable.",
			"witch And, if you don't want to, it isn't something I will pressure you to do.",


			{"Choice":{
				"ok":{
					"Text": "It's okay, I think I can handle it.",
					"Do": "jump ritual",
				},

				"more":{
					"Text": "I just don't think I am comfortable with this.",
					"Do": "exit",
				}

			}}
		],

		"ritual": [
			"witch I need you to be honest with yourself for this. Really be transparent with your own emotions.",
			"witch I'm not going to hold your hand the entire time. I'm just going to give you the steps to follow, and be here if things get hard.",
			"witch If you decide not to follow the steps, maybe this won't be as emotional of a process. It's really up to you.",
			"witch Anyways, lets do this.",
			"hide witch with fadeOut",
			"witch Before we start I need you to get a piece of paper and something to write with. Let me know when you are ready.",
			"witch Alright, I want you to think about the past week. Is there anything that really got underneath your skin?",
			"witch It can be something that made your blood boil, or even something that just threw off your normal daily flow.",
			"witch Now, take your time, and write your feelings about that moment, person, or thing.",

			{"Input": {
            "Text": "Can you tell me what you wrote?",
            "Validation": function(input) {
                return input.trim().length > 0;
							}
						}},

			"witch How does writing about this make you feel?",
			{"choice":{
				"angry":{
					"Text": "Angry",
					"Do": "jump ritualAnger",
				},
				"sad":{
					"Text": "Sad",
					"Do": "jump ritualSad",
				},
				"uncomfortable":{
					"Text": "Uncomfortable",
					"Do": "jump ritualUncomfort",
				},
				"nm":{
					"Text": "Not much really",
					"Do": "jump ritualNothing",
				}
			}}

		],

		"ritualAnger": [
			"witch Yeah I totally get that.",
			"witch "
		],
		"ritualSad": [
			"witch Feeling sad is totally understandable. "
		],
		"ritualUncomfort": [
			"witch  "
		],
		"ritualNothing": [
			"witch Feeling anger is totally understandable. "
		]


};
