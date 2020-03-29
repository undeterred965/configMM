/* Magic Mirror Config
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",


	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "middle_center",
			config: {
				displaySeconds: false
			}
		},
		{
			module: "currentweather",
			position: "middle_center",
			header: "Weather:",
			config: {
				location: "Sedgefield, UK",
				appid: "6343ecdc5eaa15a29b44592078374e7e"
			}
		},
		{
			module: "weatherforecast",
			position: "middle_center",
			header: "Forecast:",
			config: {
				location: "Sedgefield, UK",
				appid: "6343ecdc5eaa15a29b44592078374e7e",
				maxNumberOfDays: 5,
				fadePoint: 0.33
			}
		},
		{
			module: "MMM-DailyBibleVerse",
			position: "middle_center",
			config: {
				version: "KJV"
			}
		},
		{
			module: "MMM-Touch",
			position: "top_right",
			config: {
				debug: false,
				useDisplay: false,
				defaultMode: "main",
				gestureCommands: {
					"main": {
						"SWIPE_DOWN_2": (commander) => {
							commander.shellExec("sudo shutdown -h now");
							},
						"SWIPE_DOWN_1": (commander) => {
							commander.shellExec("sudo reboot");
							},
						"TAP_1": (commander) => {
							commander.sendNotification("WAKE_UP");
							},
					}
				}
			}
		},
		{
			module: "MMM-RandomPhoto",
			position: "fullscreen",
			config: {
				opacity: 0.4,
				animationSpeed: 500,		// In milliseconds.
				updateInterval: 60,		// In seconds.
				url: 'https://picsum.photos/800/480/?random'
			}
		},
		{
			module: "MMM-Carousel",
			position: "bottom_bar",
			config: {
				moduleInterval: 15,		// In seconds.
				transitionTime: 200,		// In milliseconds.
				sleepTransitionTime: 5000,	// In milliseconds.
				wakeTransitionTime: 750,	// In milliseconds.
			}
                },
		{
			module: "MMM-CarouselSleep",
			position: "bottom_bar",
			config: {
				timeToSleep: 20,	// In minutes.
			}
		}
	]
};



/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}