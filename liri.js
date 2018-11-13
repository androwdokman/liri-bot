require("dotenv").config();

var Twitter = require("twitter");

var spotify = require("node-spotify-api");

var request = require("request");

var fs = require("fs");

var key = require("./key");

var spotify = new Spotify(key.spotify);

var tweets = new twitter(key.twitterkey);