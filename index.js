const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";
const NbaseURL = 'https://nekos.life/api/v2';
const fetch = require('node-fetch');
//const { Command } = require('discord.js-commando');
//const sourceFile = require('./config.json');
const nekEndPts = require('./nekEndPts.json');

//const NekoResponceEmbed = new Discord.MessageEmbed()
//	.setColor('#1DE886')
//FIX WHY IT ISNT GRABBING GIF TAGS

const nekoHelpEmbed = new Discord.MessageEmbed()
//const module.exports = { variableName: "variableValue" };
	.setColor('#ff0000')
	.setTitle('Neko Command Help')
	.setURL('https://nekos.life/')
	//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('powered by nekos.life')
	.setThumbnail('https://cdn.nekos.life/avatar/avatar_03.png')
	.addFields(
		{ name: 'neko', value: 'SFW Neko Image', inline: true },
		{ name: 'Nneko', value: 'NFSW Neko Image (L)', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'neko (tag)', value: 'get image by tag', inline:true },
		{ name: 'Nneko (tag)', value: 'NSFW get image by tag', inline:true },
		{ name: '\u200B', value: '\u200B',inline:false},
		{ name: 'SFW Tags', value: `
		tickle,  slap,  poke,  pat,  neko,  meow,  lizard,  kiss,
		hug,  foxgirl,  feed,  cuddle, nekogif,  kemonomimi,
		holo,  smug,  baka,	woof,  wallpaper,  goose,
		gecg, avatar, waifu `,inline:true},

	)


const mainHelp = new Discord.MessageEmbed()
	//const module.exports = { variableName: "variableValue" };
		.setColor('#ff0000')
		.setTitle('Bot Command Help!')
		//.setURL('https://nekos.life/')
		//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('A bot by William C.')
		.setThumbnail('https://64.media.tumblr.com/6853e5f649cdcf979a970e330df66583/tumblr_p649kq8pPN1ubcx5fo9_250.png')
		.setFooter("use +[module name] to see commands for that module!")
		.addFields(
			{ name: '🐈 Nekos!', value: '[nekohelp]', inline: true },
			{ name: '🔞 \"Special\" Nekos!', value: '[nnekohelp]', inline: true },
			{ name: '\u200B', value: '\u200B' },
			{ name: '🎲 Fun!', value: '[funhelp]', inline:true },
			{ name: '⚙️ Misc.', value: '[mischelp]', inline:true },
			//{ name: '\u200B', value: '\u200B',inline:false},
			//{ name: 'SFW Tags', value: `
			//tickle,  slap,  poke,  pat,  neko,  meow,  lizard,  kiss,
			//hug,  foxgirl,  feed,  cuddle, nekogif,  kemonomimi,
			//holo,  smug,  baka,	woof,  wallpaper,  goose,
			//gecg, avatar, waifu `,inline:true},
		)

const funHelp = new Discord.MessageEmbed()
	//const module.exports = { variableName: "variableValue" };
		.setColor('#ff0000')
		.setTitle('🎲 Fun Commands Help!')
		//.setURL('https://nekos.life/')
		//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('A bot by William C.')
		.setThumbnail('https://64.media.tumblr.com/6853e5f649cdcf979a970e330df66583/tumblr_p649kq8pPN1ubcx5fo9_250.png')
		.addFields(
			{ name: '🎱 8ball', value: 'Roll an 8ball, and test your fate!', inline: true },
			{ name: '📠 fact', value: 'An interesting fact!', inline: true },
			{ name: '\u200B', value: '\u200B' },
			{ name: '✨ owoify [text]', value: 'Owoifies text! Fun for everyone!', inline:true },
		)

const miscHelp = new Discord.MessageEmbed()
	//const module.exports = { variableName: "variableValue" };
		.setColor('#ff0000')
		.setTitle('⚙️ Miscellaneous Commands Help!')
		//.setURL('https://nekos.life/')
		//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('A bot by William C.')
		.setThumbnail('https://64.media.tumblr.com/6853e5f649cdcf979a970e330df66583/tumblr_p649kq8pPN1ubcx5fo9_250.png')
		.addFields(
			{ name: '🏓 ping', value: 'Check the bots ping!', inline: true },
		)

const nekoNSFWTags = new Discord.MessageEmbed()
	//const module.exports = { variableName: "variableValue" };
		.setColor('#ff0000')
		.setTitle('Neko Command Help')
		.setURL('https://nekos.life/')
		//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('powered by nekos.life')
		.setThumbnail('https://cdn.nekos.life/avatar/avatar_03.png')
		.addFields(
/*
	{ name: 'NSFW Tags', value: `
	randomHentaiGif,	pussy,	nsfwnekogif, 	kuni,
	 cumsluts,	classic,	boobs,	bJ,	anal,	avatar,	 yuri,	trap,
	 tits,  girlSoloGif,  girlSolo,  pussyWankGif,  pussyArt,
	 kemonomimi,  kitsune,  keta,  holo,  holoEro,  hentai,
	 futanari,  femdom,  feetGif,  eroFeet,  feet,  ero,
	 eroKitsune,  eroKemonomimi,  eroNeko,  eroYuri,  cumArts,
	 blowJob,  spank,  gasm `, inline:true },
)
*/{ name: 'NSFW Tags', value: `
	pussyGif,  pussy,  nsfwNekoGif,  yuri,  eroyuri,  kuni,
	cumgif,  cum,  classic,  boobs,  smallboobs,  boobsGif,
	blowjob / bj,  bjgif,  nsfwAvatar,  anal,  trap,
	girlSoloGif / soloG,  girlSolo / solo,
	pussyWankGif / pwankg,  keta,  ero,  eroNeko / eron,
	eroKistune / erok,  eroKemonomimi/ eroKemo,  lewdkemo,
	feet,  erofeet,  feetgif / feetg,  hololewd,  holoero,
	hentai,  futanari,  lewd,  femdom,  spank,  gasm, `, inline:true },
)

	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	//.setTimestamp()
	//.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');


const TestEmbed = new Discord.MessageEmbed()
		.setColor('#FF2214')
		.setTitle("NSFW")
		.setURL("https://cdn.nekos.life/nsfw_neko_gif/hneko14.gif")
		.setImage("https://cdn.nekos.life/nsfw_neko_gif/hneko14.gif")


client.on("message",async message=>{

	  if(message.author.bot) return;
	  if(message.content.indexOf(prefix) !== 0) return;
	  const args = message.content.slice(prefix.length).trim().split(/ +/g);
	  const command = args.shift().toLowerCase();

		if(command==="debug"){

			message.channel.send(TestEmbed);
		}

		if(command === "ping") {
			// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
			// The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
			const m = await message.channel.send("Ping?");
			m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`);// API Latency is ${Math.round(client.ping)}ms`);
		}
		if(command==="debug2"){
			var Temp=message.content.split(" ");
			message.channel.send(nekEndPts.sfw[Temp[1]])
		}
		if(command==="debug3"){
			var Temp=message.content.split(" ");
			message.channel.send(nekEndPts.nsfw[Temp[1]])
		}




	  if(command === "say") {

	    const sayMessage = args.join(" ");

	    message.delete().catch(O_o=>{});

	    message.channel.send(sayMessage);
	  }

		//command.content.includes('purge')
		if(command === "owoify"){

			var toOwO=message.content.split(/ (.+)/)[1];
			var owoedString=("https://nekos.life/api/v2/owoify?text="+encodeURIComponent(toOwO));
			const BBB = await fetch(owoedString).then(response => response.json());
			message.channel.send(BBB.owo);
		}
		if(command==="8ball"){
			var urltoGet=("https://nekos.life/api/v2/8ball");

			const BBB = await fetch(urltoGet).then(response => response.json());
			message.channel.send(BBB.response);
		}
		if(command==="fact"){
			var urltoGet=("https://nekos.life/api/v2/fact");

			const BBB = await fetch(urltoGet).then(response => response.json());
			message.channel.send(BBB.fact);
		}
		if(command === "nneko"){

			const filter = (reaction, user) => {
					return ['🗑️'].includes(reaction.emoji.name) && user.id === message.author.id;
			};
			if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }

						var MessagesToPurgeSplit=message.content.split(" ");
						if(MessagesToPurgeSplit.length > 1){
							var tag=MessagesToPurgeSplit[1]
						  var fullUrl=NbaseURL+nekEndPts.nsfw[tag]
							//var fullUrl=NbaseURL+"/img/"+tag
							if((MessagesToPurgeSplit.length==3) && (MessagesToPurgeSplit[2]>0)){
								if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
									let NSNeko = await message.channel.send("dfdf fdfdfdfdf fdf")

									NSNeko.react('🗑️');
									NSNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
									.then(collected => {
										const reaction = collected.first();
										if(!message.channel.nsfw){
											message.channel.send("This ability requires the channel to be marked as NSFW.").then(msg => {
											msg.delete({ timeout: 5000 })
											})
											return; }

										if (reaction.emoji.name === '🗑️') {
											NSNeko.delete().catch(O_o=>{});
										}
									})
									.catch(collected => {
										var a = 1;
									});




								}
								else{
									for (i = 0; i < MessagesToPurgeSplit[2]-1; i++) {
									const BBB = await fetch(fullUrl).then(response => response.json());
									var NekoResponceEmbed = new Discord.MessageEmbed()
										.setColor('#FF2214')
										.setTitle("NSFW " + tag)
										.setURL(BBB.url)
										.setImage(BBB.url)

									let NSNeko = await message.channel.send(NekoResponceEmbed);



									NSNeko.react('🗑️');
									NSNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
									.then(collected => {
										const reaction = collected.first();
										if(!message.channel.nsfw){
											message.channel.send("This ability requires the channel to be marked as NSFW.").then(msg => {
											msg.delete({ timeout: 5000 })
											})
											return; }

										if (reaction.emoji.name === '🗑️') {
											NSNeko.delete().catch(O_o=>{});
										}
									})
									.catch(collected => {
										var a = 1;
									});




								}

							}
							}
							if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
								let NSNeko = await message.channel.send("error getting tag")
							}
							else{

								const BBB = await fetch(fullUrl).then(response => response.json());
								var NekoResponceEmbed = new Discord.MessageEmbed()
									.setColor('#FF2214')
									.setTitle("NSFW " + tag)
									.setURL(BBB.url)
									.setImage(BBB.url)
								let NSNeko = await message.channel.send(NekoResponceEmbed);



								NSNeko.react('🗑️');
								NSNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
								.then(collected => {
									const reaction = collected.first();
									if(!message.channel.nsfw){
										message.channel.send("This ability requires the channel to be marked as NSFW.").then(msg => {
										msg.delete({ timeout: 5000 })
										})
										return; }

									if (reaction.emoji.name === '🗑️') {
										NSNeko.delete().catch(O_o=>{});
									}
								})
								.catch(collected => {
									var a = 1;
								});




							}
						}
						else{

							const AAa = await fetch('https://nekos.life/api/lewd/neko').then(response => response.json());
							var NekoResponceEmbed = new Discord.MessageEmbed()
								.setColor('#FF2214')
								.setTitle("NSFW")
								.setURL(AAa.neko)
								.setImage(AAa.neko)
 							let NSNeko = await message.channel.send(NekoResponceEmbed);



							NSNeko.react('🗑️');
							NSNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
							.then(collected => {
								const reaction = collected.first();
								if(!message.channel.nsfw){
									message.channel.send("This ability requires the channel to be marked as NSFW.").then(msg => {
									msg.delete({ timeout: 5000 })
									})
									return; }

								if (reaction.emoji.name === '🗑️') {
									NSNeko.delete().catch(O_o=>{});
								}
							})
							.catch(collected => {
								var a = 1;
							});




						}


			//const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'underage');





		}
/*
			if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }

			var MessagesToPurgeSplit=message.content.split(" ");
			if(MessagesToPurgeSplit.length > 1){
				var tag=MessagesToPurgeSplit[1]
				var fullUrl=NbaseURL+nekEndPts.nsfw[tag]
				if((MessagesToPurgeSplit.length==3) && (MessagesToPurgeSplit[2]>0)){
					if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
						message.channel.send("dfdf fdfdfdfdf fdf")
					}
					else{
						for (i = 0; i < MessagesToPurgeSplit[2]-1; i++) {
						const BBB = await fetch(fullUrl).then(response => response.json());
						var NekoResponceEmbed = new Discord.MessageEmbed()
							.setColor('#FF2214')
							.setTitle("NSFW " + tag)
							.setURL(BBB.url)
							.setImage(BBB.url)
						message.channel.send(NekoResponceEmbed);
					}
				}
				}
				if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
					message.channel.send("error getting tag")
				}
				else{

					const BBB = await fetch(fullUrl).then(response => response.json());
					var NekoResponceEmbed = new Discord.MessageEmbed()
						.setColor('#FF2214')
						.setTitle("NSFW " + tag)
						.setURL(BBB.url)
						.setImage(BBB.url)
					message.channel.send(NekoResponceEmbed);
				}
			}
			else{

				const AAa = await fetch('https://nekos.life/api/lewd/neko').then(response => response.json());
				var NekoResponceEmbed = new Discord.MessageEmbed()
					.setColor('#FF2214')
					.setTitle("NSFW")
					.setURL(AAa.neko)
					.setImage(AAa.neko)
				message.channel.send(NekoResponceEmbed);
			}


		}
*/
		if(command === "neko"){

			const filter = (reaction, user) => {
					return ['🗑️'].includes(reaction.emoji.name) && user.id === message.author.id;
			};
			var MessagesToPurgeSplit=message.content.split(" ");
			if(MessagesToPurgeSplit.length > 1){
				var tag=MessagesToPurgeSplit[1]
				var fullUrl=NbaseURL+nekEndPts.sfw[tag]
				if((MessagesToPurgeSplit.length==3) && (MessagesToPurgeSplit[2]>0)){
					if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
						let SFNeko = await message.channel.send("dfdf fdfdfdfdf fdf")




						SFNeko.react('🗑️');
						SFNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
						.then(collected => {
							const reaction = collected.first();

							if (reaction.emoji.name === '🗑️') {
								SFNeko.delete().catch(O_o=>{});
							}
						})
						.catch(collected => {
							var a = 1;
						});





					}
					else{
						for (i = 0; i < MessagesToPurgeSplit[2]-1; i++) {
						const BBB = await fetch(fullUrl).then(response => response.json());
						var NekoResponceEmbed = new Discord.MessageEmbed()
							.setColor('#1DE886')
							.setTitle("SFW " + tag)
							.setURL(BBB.url)
							.setImage(BBB.url)
						let SFNeko = await message.channel.send(NekoResponceEmbed);




												SFNeko.react('🗑️');
												SFNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
												.then(collected => {
													const reaction = collected.first();

													if (reaction.emoji.name === '🗑️') {
														SFNeko.delete().catch(O_o=>{});
													}
												})
												.catch(collected => {
													var a = 1;
												});


					}
				}
			}

				if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
					message.channel.send("error getting tag")
				}
				else{
					const BBB = await fetch(fullUrl).then(response => response.json());
					//message.channel.send(BBB.url)
					var NekoResponceEmbed = new Discord.MessageEmbed()
						.setColor('#1DE886')
						.setTitle("SFW " + tag)
						.setURL(BBB.url)
						.setImage(BBB.url)
					let SFNeko = await message.channel.send(NekoResponceEmbed);




											SFNeko.react('🗑️');
											SFNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
											.then(collected => {
												const reaction = collected.first();

												if (reaction.emoji.name === '🗑️') {
													SFNeko.delete().catch(O_o=>{});
												}
											})
											.catch(collected => {
												var a = 1;
											});



				}
			}
			else{
			const AAa = await fetch('https://nekos.life/api/neko').then(response => response.json());
			var NekoResponceEmbed = new Discord.MessageEmbed()
				.setColor('#1DE886')
				.setTitle("SFW")
				.setURL(AAa.neko)
				.setImage(AAa.neko)
			let SFNeko = await message.channel.send(NekoResponceEmbed);




									SFNeko.react('🗑️');
									SFNeko.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
									.then(collected => {
										const reaction = collected.first();

										if (reaction.emoji.name === '🗑️') {
											SFNeko.delete().catch(O_o=>{});
										}
									})
									.catch(collected => {
										var a = 1;
									});




			}
		}









/*
			var MessagesToPurgeSplit=message.content.split(" ");
			if(MessagesToPurgeSplit.length > 1){
				var tag=MessagesToPurgeSplit[1]
				var fullUrl=NbaseURL+nekEndPts.sfw[tag]
				if((MessagesToPurgeSplit.length==3) && (MessagesToPurgeSplit[2]>0)){
					if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
						message.channel.send("dfdf fdfdfdfdf fdf")
					}
					else{
						for (i = 0; i < MessagesToPurgeSplit[2]-1; i++) {
						const BBB = await fetch(fullUrl).then(response => response.json());
						var NekoResponceEmbed = new Discord.MessageEmbed()
							.setColor('#1DE886')
							.setTitle("SFW " + tag)
							.setURL(BBB.url)
							.setImage(BBB.url)
						message.channel.send(NekoResponceEmbed);
					}
				}
			}

				if((NbaseURL===fullUrl) || ("https://nekos.life/api/v2undefined" === (fullUrl)) ){
					message.channel.send("error getting tag")
				}
				else{
					const BBB = await fetch(fullUrl).then(response => response.json());
					//message.channel.send(BBB.url)
					var NekoResponceEmbed = new Discord.MessageEmbed()
						.setColor('#1DE886')
						.setTitle("SFW " + tag)
						.setURL(BBB.url)
						.setImage(BBB.url)
					message.channel.send(NekoResponceEmbed);
				}
			}
			else{
			const AAa = await fetch('https://nekos.life/api/neko').then(response => response.json());
			var NekoResponceEmbed = new Discord.MessageEmbed()
				.setColor('#1DE886')
				.setTitle("SFW")
				.setURL(AAa.neko)
				.setImage(AAa.neko)
			message.channel.send(NekoResponceEmbed);
			}
		}






		*/
		if(command === "nekohelp"){
			const filter = (reaction, user) => {
					return ['🔞'].includes(reaction.emoji.name) && user.id === message.author.id;
			};
			let jjjj = await message.channel.send(nekoHelpEmbed)
			jjjj.react('🔞');
			jjjj.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();
				if(!message.channel.nsfw){
					message.channel.send("This ability requires the channel to be marked as NSFW.").then(msg => {
    			msg.delete({ timeout: 5000 })
  				})
					return; }

				if (reaction.emoji.name === '🔞') {
					message.channel.send(nekoNSFWTags);
				}
			})
			.catch(collected => {
				var a = 1;
			});
			//const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'underage');

		}
		if(command==="nnekohelp"){
			if(!message.channel.nsfw){
				message.channel.send("This ability requires the channel to be marked as NSFW.").then(msg => {
				msg.delete({ timeout: 5000 })
				})
				return;
			}
			else{message.channel.send(nekoNSFWTags)}
		}

		if(command==="funhelp"){
			message.channel.send(funHelp);
		}
		if(command==="mischelp"){
			message.channel.send(miscHelp);
		}
		if(command==="help"){
			message.channel.send(mainHelp);
		}


		if(command === "purgepurgepurgepurgepurge"){  //purge
			//message.channel.send(message.author);
			if(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_MESSAGES')){
			var MessagesToPurgeSplit=message.content.split(" ");
			//message.channel.send(message.content.split(" "));
			if(MessagesToPurgeSplit.length > 1){
				var Number = parseInt(MessagesToPurgeSplit[1])+2;
				if((Number > 0)  && (Number < 95)){
				message.channel.send("Are you sure you want to delete " + Number +  " messages from this channel? Yes/No")
				message.channel.awaitMessages(m => m.author.id == message.author.id,
			                            {max: 1, time: 30000}).then(collected => {
			                                    // only accept messages by the user who sent the command
			                                    // accept only 1 message, and return the promise after 30000ms = 30s

			                                    // first (and, in this case, only) message of the collection
			                                    if (collected.first().content.toLowerCase() == 'yes') {
																						async function clear() {
																		            message.delete();
																		            const fetched = await message.channel.messages.fetch({limit: Number});
																		            message.channel.bulkDelete(fetched);
																		        }
																		        clear();
																					/*
																						async function clear(num) {

																									message.author.send(num);
																			            message.delete();
																			            const fetched = await message.channel.messages.fetch({limit: num});
																			            message.channel.bulkDelete(fetched);
																			        }
																							//message.channel.send(Number);
																							message.author.send(Number);
																			        clear(Number+2);
																					*/
																					}
																					else
																					 message.reply('Operation canceled.');
													 }).catch(() => {
																	 message.reply('No answer after 30 seconds, operation canceled.');
													 });
			}
			else{
				message.channel.send("Either Message Number is too high (>98), or not a number")
			}
			}
			else{
			message.channel.send("Purging All Messages, Are you sure you want to do this? Yes/No");
				message.channel.awaitMessages(m => m.author.id == message.author.id,
			                            {max: 1, time: 30000}).then(collected => {
			                                    // only accept messages by the user who sent the command
			                                    // accept only 1 message, and return the promise after 30000ms = 30s

			                                    // first (and, in this case, only) message of the collection
			                                    if (collected.first().content.toLowerCase() == 'yes') {
																						async function clear() {
																			            message.delete();
																			            const fetched = await message.channel.messages.fetch({limit: 99});
																			            message.channel.bulkDelete(fetched);
																			        }

																			        clear();
																							message.channel.send("aaaa");
																					}
																					else
																					 message.reply('Operation canceled.');
													 }).catch(() => {
																	 message.reply('No answer after 30 seconds, operation canceled.');
													 });
									 //break;
			//.then(message => {
			//	message.delete(3000).catch(O_o=>{});
			//})
		}

		}

	//  if(command == "setup-role") {
	//    let myRole = message.guild.roles.find(role => role.name === "Bot Mod");
	//  }


}});



client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`)
    setTimeout(function(){ // in leftToEight() milliseconds run this:
        sendMessage(); // send the message once
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ // repeat this every 24 hours
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})
function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
}

function sendMessage(){
    var guild = client.guilds.cache.get('563730294524346369');
    if(guild && guild.channels.cache.get('738845774837710868'))
			var d=1;
        //guild.channels.cache.get('738845774837710868').send("It's Fonky Monkey Friday!!!")
        //.then(guild.channels.cache.get('738845774837710868').send(new Discord.MessageAttachment('./fonky_monky_friday.mp4', 'fonky_monky_friday.mp4')).catch(console.error));
    }


client.login('NOPE,IM NOT GIVING YOU MY KEY')
