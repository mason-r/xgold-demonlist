class Demon {
  constructor(name, date, attempts, creators, position, thumbnail, video) {
    this.name = name;
    this.date = date;
    this.attempts = attempts;
    this.creators = creators;
    this.position = position;
    this.thumbnail = thumbnail;
    this.video = video;
  }
}

class DemonRating {
  constructor(name, enjoyment, gp, deco, song, notes=null) {
    this.name = name;
    this.enjoyment = enjoyment;
    this.gp = gp;
    this.deco = deco;
    this.song = song;
    this.notes = notes;
  }
}

class ToDo {
  constructor(name, reason, excitement=1) {
    this.name = name;
    this.reason = reason;
    this.excitement = excitement;
  }
}

let upcomingDemons = [
  new Demon("Apollo 11", "8/8/2024", 0, "nasgubb", "N/A", "https://i.ytimg.com/vi/r9SkrrOecpY/mqdefault.jpg", "https://www.youtube.com/watch?v=r9SkrrOecpY")
];

let demons = [
  211,
  new Demon("Neurostasis", "8/8/2024", 14193, "KiwiPenguin", "N/A", "https://i.ytimg.com/vi/EY24IAPPrFo/mqdefault.jpg", "https://www.youtube.com/watch?v=EY24IAPPrFo"),
  255,
  204,
  new Demon("ruber cash 22", "5/21/2024", 10676, "KoKo43", "N/A", "https://i.ytimg.com/vi/VhR1m1OolZs/mqdefault.jpg", "https://www.youtube.com/watch?v=VhR1m1OolZs"),
  new Demon("troll level two", "12/8/2023", 14429, "Lexy & more", "N/A", "https://i.ytimg.com/vi/WyXmTx6wZxw/mqdefault.jpg", "https://www.youtube.com/watch?v=WyXmTx6wZxw"),
  new Demon("The Cellar Path", "2/19/2024", 9927, "JamAttack", "N/A", "https://i.ytimg.com/vi/FBB3nlOz62c/mqdefault.jpg", "https://www.youtube.com/watch?v=FBB3nlOz62c"),
  new Demon("Worse Trip", "11/11/2023", 9941, "Loltad", "N/A", "https://i.ytimg.com/vi/1Z5w4BXCoGk/mqdefault.jpg", "https://www.youtube.com/watch?v=1Z5w4BXCoGk"),
  new Demon("Coolie Mazie Paloozi", "3/17/2024", 12251, "Akunakunn", "N/A", "https://i.ytimg.com/vi/6fJkb8o17_M/mqdefault.jpg", "https://www.youtube.com/watch?v=6fJkb8o17_M"),
  357,
  new Demon("The Sulphur Sea", "10/15/2023", 7141, "YoReid", "N/A", "https://i.ytimg.com/vi/wz8XcDMDKhY/mqdefault.jpg", "https://www.youtube.com/watch?v=BKFRd1VvuO0"),
  313,
  242,
  70,
  69,
  251,
  29,
  new Demon("moment", "8/1/2023", 8024, "lexycat & icedcave", "N/A", "https://i.ytimg.com/vi/bLfKsN4NCNY/mqdefault.jpg", "https://www.youtube.com/watch?v=uURizFayTI8"),
  new Demon("Motorbreath", "8/6/2023", 9370, "TwisterDude161", "N/A", "https://i.ytimg.com/vi/R41Yj8XpMhM/mqdefault.jpg", "https://www.youtube.com/watch?v=xFHwZ4uZK5c"),
  new Demon("U235", "7/15/2023", 8249, "oleki", "N/A","https://i.ytimg.com/vi/eGwXAJej5WU/mqdefault.jpg", "https://www.youtube.com/watch?v=c2fogGZbQII"),
  new Demon("BROWNOIX", "7/1/2023", 8084, "ArtaxFerSarh & more", "N/A", "https://i.ytimg.com/vi/nnJuOHHseaE/mqdefault.jpg", "https://www.youtube.com/watch?v=j6oFiliI1Ds"),
  new Demon("Reflective", "2/20/2023", 7108, "Mojitoz & more", "N/A", "https://i.ytimg.com/vi/1fzhBT_7Fos/mqdefault.jpg", "https://www.youtube.com/watch?v=cLlibHpQQ9c"),
  new Demon("Reanimate", "1/18/2023", 6851, "ilnm & more", "N/A", "https://i.ytimg.com/vi/jk-r4_Nctes/mqdefault.jpg", "https://www.youtube.com/watch?v=3A9K_eVj5nQ&t=1306s"),
  new Demon("HURRICANE", "5/4/2023", 5094, "BIANOX & more", "N/A", "https://i.ytimg.com/vi/WQcGIY8_28c/mqdefault.jpg", "https://www.youtube.com/watch?v=k3Xjceml5eM"),
  new Demon("CICADA3302", "6/24/2024", 3554, "Darwin", "N/A", "https://i.ytimg.com/vi/DsM-e8yF5ys/mqdefault.jpg", "https://www.youtube.com/watch?v=uALmVDAcpkE"),
  new Demon("I NEVER DREAM", "6/25/2023", 3948, "skywalker14", "N/A", "https://i.ytimg.com/vi/9bumyVCkPiw/mqdefault.jpg", "https://www.youtube.com/watch?v=0e9FlAk_JXI"),
  new Demon("Crowd Control", "6/22/2023", 4909, "Deadlox & more", "N/A", "https://i.ytimg.com/vi/-q0iBUZti9s/mqdefault.jpg", "https://www.youtube.com/watch?v=rMrdggRE1gM"),
  new Demon("Napalm", "3/6/2023", "Unknown", "Marwec & more", "N/A", "https://i.ytimg.com/vi/ND--Ai4XVfM/mqdefault.jpg", "https://youtu.be/-ZQwUByHZ4Q?t=749"),
  new Demon("Dismal Duststorm", "7/6/2023", 3425, "Multiverse55", "N/A","https://i.ytimg.com/vi/l-hYBdrM0bc/mqdefault.jpg", "https://www.youtube.com/watch?v=61xftfDyl8E"),
  new Demon("Lost Love",  "3/6/2023", 6409,"TheBlackHell", "N/A", "https://i.ytimg.com/vi/KGh4Fe5SmXc/mqdefault.jpg", "https://www.youtube.com/watch?v=qLmpGXa_dXk&t=882s"),
  new Demon("troll level", "2/1/2023", 8158, "lexycat, glitchi & lena", "N/A", "https://i.ytimg.com/vi/eqYr6MLwJE4/mqdefault.jpg", "https://www.youtube.com/watch?v=RU4BYzCgEAQ"),
  new Demon("niwa", "9/23/2023", 3333, "Teno & more", "N/A", "https://i.ytimg.com/vi/1tven_pFftA/mqdefault.jpg", "https://www.youtube.com/watch?v=EBzDURIuDQE"),
  190,
  new Demon("Precipitance", "4/26/2023", 6332, "Extravagon", "N/A","https://i.ytimg.com/vi/_W9xA5lqmLs/mqdefault.jpg", "https://www.youtube.com/watch?v=9p3VQOeXbjY"),
  new Demon("Acu", "1/28/2023", 4026, "neigefeu", "N/A", "https://i.ytimg.com/vi/z6l74Mkoxm8/mqdefault.jpg", "https://www.youtube.com/watch?v=ydQ-__LqEFM&t=795s")
];

let demonRatings = [
  new DemonRating("Killbot", 9.5, 9, 7, 5, "Fluked the last 40%, which is easily the most insane fluke I have ever had. Really fun gameplay, song kinda sucks but it fits well with the level. \
    Enjoyment would be 10 if I didn't get a headache after every stream"),
  new DemonRating("Neurostasis", 9.5, 9, 8.5, 8.5, "Extremely fun level that I got <span style='text-decoration:underline;' title='78, 79x2, 80x2, 82, 83, 84'>very unlucky on</span>, \
    but still enjoyed so much. An absolute masterpiece of song representation."),
  new DemonRating("Ethereal Artifice", 6.5, 7.5, 8, 9, "Pretty good level that I got very unlucky on (82x2 and 81). Not quite as good as everyone says it is, but not terrible either."),
  new DemonRating("Black Blizzard", 7.5, 8.5, 9, 9, "First emerald demon!! The drop is REALLY REALLY GOOD, the predrop is expectedly very hard. Great level though"),
  new DemonRating("ruber cash 22", 6, 6.5, 7.5, 6, "The final Jade demon. There were definitely better options (and worse ones (madmansion)), but I chose this one I guess. Pretty okay level,\
    bizarre balancing, chokepoints, you know the drill"),
  new DemonRating("troll level two", 9, 8.5, 9, 10, "My first ever <i>unrated extreme demon</i> AND new hardest!!!!! This level is extremely fun and very silly :3 hope it gets rated soon. \
    <br>did i mention i fluked from 63"),
  new DemonRating("The Cellar Path", 9, 9, 10, 8, "Absolutely fantastic level. The decoration is stunning, and the gameplay flows extremely well. The entire level is a dual, which led to \
    some interesting physics and bugs, but surprisingly nothing was broken."),
  new DemonRating("Worse Trip", 6, 8, 8.5, 7, "I didn't have a super good time playing this level, but somehow I fluked from 67 which definitely helped the enjoyment. Pretty cool level"),
  new DemonRating("Coolie Mazie Paloozi", 9, 8, 8.5, 7.5, "Extremely confusing, yet surprisingly fun to learn and consistent. The only level you <i>might</i> get away with noclipping. \
    The last 5% kinda brings it down, especially the final straightfly."),
  new DemonRating("Endless Dream", 6, 8.5, 9, 8, "Former hardest extreme! I had a pretty bad time with this one, with a worst fail of 98%, but I pulled it off! First extreme at college too."),
  new DemonRating("The Sulphur Sea", 9, 9, 10, 9, "I LOVE this level so much. Calmity-themed levels never fail to blow me away, and this was absolutely no exception. the sulphur peak"),
  new DemonRating("DARKENED", 5, 5, 8.5, 7.5, "One of the more annoying levels I've played. Pretty unbalanced with some random timing chokepoints scattered around."),
  new DemonRating("SPEEDRUN", 8.5, 9, 8, 8, "Former hardest and first Jade-tier level. This level has extremely good song representation and very nice balancing. It does have a couple weird chokepoints, \
    but altogether it's a great level."),
  new DemonRating("Blade of Justice", 10, 9.5, 7.5, 7.5, "Former hardest extreme. This is the most fun I have ever had with a level. This is also definitely my favorite hardest so far."),
  new DemonRating("Bloodbath", 5, 4, 7, 7.5, "Former hardest and former top 1. Fluked from 52%, by far my best fluke to date. This level is very annoyingly balanced, with some parts being \
    WAY harder than others."),
  new DemonRating("Prismatic Haze", 9.5, 9.5, 8, 8, "Former hardest extreme demon. Always try to play GOOD LEVELS for your hardests!!!"),
  new DemonRating("Triple Six", 9, 8, 10, 6, "Incredible memory level. Strong epilepsy warning."),
  new DemonRating("moment", 4, 5.5, 7.5, 8, "This level is pretty fun, but the absurd chokepoints scattered throughout the level bring it down a lot. I really like a lot of the gameplay, but I \
    also REALLY hate the chokepoints."),
  new DemonRating("Motorbreath", 5.5, 6.5, 8, 9, "This has an extremely difficult predrop and a very easy second half. This level got pretty boring, but the gameplay was fun despite it being \
    unbalanced. This also gets bonus points for the song."),
  new DemonRating("U235", 7.5, 9, 8, 6.5, "I raced this with 8 people and placed 4th! Very fun level, though the first half gets somewhat annoying after too long."),
  new DemonRating("BROWNOIX", 8.5, 9, 8, 5.5, "Very fun level with super cool dual gameplay. The first half is quite heavy."),
  new DemonRating("Reflective", 7.5, 5.5, 8, 8.5, "Very annoying predrop, everything else is great."),
  new DemonRating("Reanimate", 7, 6.5, 8, 9.5, "First extreme demon! The song is the best part, which is usually a red flag, but this song is just so good that it's fine."),
  new DemonRating("HURRICANE", 7, 8.5, 8, 5, "Littered with chokepoints. All of them are manageable, but still kind of annoying."),
  new DemonRating("CICADA3302", 8, 9.5, 10, 9.5, "By far one of the greatest levels I've ever played. Incredible song representation, amazing effects, and great gameplay come together for one of \
    the coolest Geometry Dash experiences I've ever had."),
  new DemonRating("I NEVER DREAM", 7, 7.5, 10, 7, "Absolutely gorgeous level with very strange yet fun gameplay. The first half is WAY harder than the second."),
  new DemonRating("Crowd Control", 6, 6.5, 7, 5.5, "Decent level significantly impacted by its heavy chokepoints. Kind of a chore to play from anywhere, but especially from 0."),
  new DemonRating("Napalm", 1.5, 3, 7.5, 7, "Current least favorite extreme. I despise this level. A lot of people say it's good, but I just hated it the whole way through."),
  new DemonRating("Dismal Duststorm", 8, 9, 10, 8.5, "Awesome desert-themed demon with extremely good decoration. I got very unlucky, but still enjoyed the level a lot."),
  new DemonRating("Lost Love", 9.5, 9.5, 7.5, 9.5, "Fantastic memory level and definitely one of my favorite extremes ever."),
  new DemonRating("troll level", 6.5, 8, 6, 7.5, "Predrop is not great, the drop is awesome."),
  new DemonRating("niwa", 6, 7, 8.5, 8.5, "Pretty fun level with some fairly annoying chokepoints, particularly the last ship (where I died three times)."),
  new DemonRating("Retention", 7.5, 8.5, 7, 7, "Has exactly one very annoying chokepoint. Other than that, it's a very fun level."),
  new DemonRating("Precipitance", 6, 6, 7, 6, "Very average level. This is my easy"),
  new DemonRating("Acu", 8, 9, 7, 7.5, "Easiest extreme. Somewhat annoying predrop and postdrop, which is the opposite of good balancing.")
];

let toDoList = [
  new ToDo("Cat Planet", "I tried this level and liked it, then decided to do Retention instead. I'll come back to this eventually."),
  new ToDo("Reverie", "First of the Ocular Miracle series. I want to beat Ocular Miracle, so naturally I want to beat this."),
  new ToDo("Faith", "Second chapter of Ocular Miracle. Same reason as Reverie, except this one actually is extreme demon."),
  new ToDo("Diligence", "Final level of the Ocular Miracle series. Same reason as Faith."),
  new ToDo("Digital Disarray", "Originally added because it was the last Platinum level. It was moved to Sapphire, but I still want to do it because it looks pretty fun."),
  new ToDo("Concaved Memories", "First Sapphire level and I heard it was good? Not really sure about this one"),
  new ToDo("Agen Wida", "Really cool-looking level that I would do ASAP if it wasn't for the insane wave chokepoint in the middle.", 3),
  new ToDo("Fellow Phobia", "Omori XXL level. Looks super cool. I promise I will play omori soon I promise", 2),
  new ToDo("KINGSLAYER", "Nice decoration and a cool song. I honestly forget why I put this here but it must have been for a good reason"),
  new ToDo("Maybe Possibly Thing", "Funny memory level. I like memory and this looks like a good one!"),
  new ToDo("SorryForPartyRocking", "Really good all around. Currently taking a break from this as well. I'll probably beat it later.", 2),
  new ToDo("cave of heart", "Looks like a cool memory level. I don't know too much about this one since I just watched a video of it once"),
  new ToDo("Quaoar", "I actually wanted to do this for my first extreme because it looked so good. Good thing I did NOT do that."),
  new ToDo("Faded Dream", "Absolutely mesmerizing memory level. Just stunning. I hope the gameplay is as good as the decoration", 2),
  new ToDo("Belloq", "Really cool-looking level with a great song and tons of music sync. I've heard the gameplay isn't as good, but hopefully everything else will make up for it."),
  new ToDo("Boogie", "I'm pretty sure I put this in just because it's XXL. I don't remember why this is here. Help me"),
  new ToDo("RASH", "I've been repeatedly recommended this since I started beating extremes, so here it is. I don't know if I'll ever actually do this."),
  new ToDo("Audio Expulsion", "Looks like it has really fun gameplay at least. Not sure about decoration or song."),
  new ToDo("Auditory Breaker", "Very cool remake of Sonic Wave. If I want to do Sonic Wave, I might do this as well."),
  new ToDo("Black Flag", "This is really just here because it looks SO GOOD. 2.2 optimization has helped a ton, so lag hopefully won't be nearly as much of an issue as it used to be."),
  new ToDo("Crystal", "Uses one of my favorite songs and looks like it has really fun gameplay. Reviews are mixed, but I won't knock it till I try it.", 2),
  new ToDo("Glitzy Bozo Land", "The only unrated extreme on here. The gameplay gimmick is super cool, and I love the kaizo theme."),
  new ToDo("Ziroikabi", "Probably pretty fun? Plus it's in GDDP Emerald tier, which makes me want to do it a bit more."),
  new ToDo("Berserk", "Very cool-looking Zylenox level. Planning on doing this one for GDDP Emerald tier. Mixed reviews on the balancing, but fun overall."),
  new ToDo("Ameliorate", "Really weird but pretty cool level. The weirdness is charming in a way. Also very long.", 2),
  new ToDo("ConFusion", "Apparently the best memory level ever. I like memory gameplay, so this will be worth a shot."),
  new ToDo("Night Rider", "I ADORE the design of this level throughout the entire thing. I just hope the gameplay can match it.", 2),
  new ToDo("Nightmare Chasm", "Sequel to Titan Complex. Actually easier than TC, and apparently way more fun too."),
  new ToDo("vaenstep", "I do not remember why I put this here. Literally no clue. Apparently I want to do it though."),
  new ToDo("Bitcrusher", "Cool-looking memory level, somewhat similar in theme to Killbot. Another memory level I put here because I like memory."),
  new ToDo("WOW", "Extremely high-CPS and sync-based level. I love the song and the gameplay style. I can't wait to beat this someday!", 4),
  new ToDo("super probably level", "Pretty funny memory level that I may not end up doing after all. I did one practice run of it and it took a long time."),
  new ToDo("Chromatic Haze", "Sequel to Prismatic Haze, one of my favorite extreme demons. The gameplay and decoration are similar, so I think I'll definitely enjoy this one too.", 3),
  new ToDo("Ocular Miracle", "A level that takes you on a journey. The level is VERY long, so it'll be a good nerve control/stamina challenge.", 2),
  new ToDo("Sunset Sandstorm", "Super cool memory level that perfectly does the song justice. The predrop is half of the level, so that might get annoying."),
  new ToDo("Sonic Wave", "I want to do this purely for the nostalgia and the level's history. I know that's not a good reason, and I know I won't enjoy the level much either.", 0),
  new ToDo("Sparkling", "Gameplay looks really cool and goes super well with the song. Looks like a blast all around."),
  new ToDo("Shutdown", "I LOVE Oli gameplay. Ulon was a total blast, and from what it looks like, this level is basically just much harder Ulon.", 2),
  new ToDo("Requiem", "HOLY SHIT", 4),
  new ToDo("Storming Summit", "Of course I have to do the only Celeste-themed level on the demon list. I LOVE CELESTE!!!!!!", 3),
  new ToDo("Nhelv", "Extremely cool-looking memory/learny level. I really love the design of this level.", 4),
  new ToDo("Fog", "Very very interesting level with a randomized memory part apparently?? I wonder how many memory levels I have on here.", 2),
  new ToDo("Bloodlust", "A must-do for literally everyone. A rite of passage into the top tier. Et cetera"),
  new ToDo("RUTHLESS", "Absolutely gorgeous extreme demon. From what I hear, the gameplay doesn't quite get to the level that the decoration does.", 2),
  new ToDo("Shardscapes", "Robot-only gameplay looks cool. Has a really nice atmosphere and unique gameplay."),
  new ToDo("Kinesiophobia", "woah", 3),
  new ToDo("RUST", "Very interesting gameplay and one of my favorite songs. The structuring is simple, but works surprisingly well.", 3),
  new ToDo("Lotus Flower", "Really cool dual gameplay. Never seen ship movements like that before. I hope this is still possible in 2.2"),
  new ToDo("Esfera", "Oddly nostalgic Korean megacollab. This level is also very long, but the gameplay looks very unique and fun."),
  new ToDo("Kenos", "I can't have watched npesta for so long and not wanted to beat Kenos. Honestly not sure about the level itself; this one's a big maybe."),
  new ToDo("Zodiac", "Likely the best Top 1 we've ever had. The balancing seems pretty annoying, but the gameplay looks pretty fun."),
  new ToDo("Network", "Awesome level with the WORLD'S FIRST offsync dual... and a big ol spiral in the background.", 3),
  new ToDo("Nullscapes", "EXTREMELY good-looking sequel to Shardscapes with the same robot-only gimmicks.", 3),
  new ToDo("Verdant Landscape", "One of the best extremes ever made, according to many. I can't ignore that reputation.", 2),
  new ToDo("Oblivion", "Awesome song, good gameplay, nice decoration. I really like the gameplay style, and the song is just SO good.", 3),
  new ToDo("Edge of Destiny", "Much, much harder (and better-looking) remake of Blade of Justice. This level looks so cool.", 2),
  new ToDo("The Hallucination", "Cool nine circles level with some really weird, yet interesting gameplay. I don't like nine circles levels too much, but this one looks like a good one."),
  new ToDo("LIMBO", "One of the best levels in its difficulty range. There's so much I want to say about this level that I can't fit in here. This level is so cool.", 4),
  new ToDo("Kyouki", "At this point I'm starting to run out of options for harder levels. Kyouki looks pretty fun though? Maybe?"),
  new ToDo("Ashley Wave Trials", "This is probably never going to happen."),
  new ToDo("Return 0", "This level has been cancelled, but I'm leaving it here in case somehow it gets revived. A 17-minute long level is insane to me.", 2),
  new ToDo("Flamewall", "Upcoming extreme demon, maybe in top 3-5 range? Uses a super good song and has very nice gameplay."),
  new ToDo("Ascension to Heaven", "THIS IS THE BEST LEVEL OF ALL TIME. It uses all of my favorite song ever, looks unbelievably beautiful, and (hopefully) plays very well. I CANNOT WAIT to beat this level.", 4),
  // new ToDo("Kaizo Trap", "I actually don't know if this level has been made public yet")
];

function generateColorCode(num) {
  let hex;
  switch (num) {
    case 10:
      hex = "33FF00";
      break;
    case 9.5: 
      hex = "4CFF00";
      break;
    case 9: 
      hex = "66FF00";
      break;
    case 8.5:
      hex = "7FFF00";
      break;
    case 8:
      hex = "99FF00";
      break;
    case 7.5:
      hex = "B2FF00";
      break;
    case 7:
      hex = "CCFF00";
      break;
    case 6.5:
      hex = "E5FF00";
      break;
    case 6:
      hex = "FFFF00";
      break;
    case 5.5:
      hex = "FFE600";
      break;
    case 5:
      hex = "FFCC00";
      break;
    case 4.5:
      hex = "FFB300";
      break;
    case 4:
      hex = "FF9900";
      break;
    case 3.5:
      hex = "FF8000";
      break;
    case 3:
      hex = "FF6600";
      break;
    case 2.5:
      hex = "FF4D00";
      break;
    case 2:
      hex = "FF3300";
      break;
    case 1.5:
      hex = "FF1A00";
      break;
    case 1:
      hex = "FF0000";
      break;
    case 0.5:
      hex = "E60000";
      break;
    case 0:
      hex = "CC0000";
      break;
    default:
      hex = "FFFFFF";
  }
  return hex;
}

function averageRating(demon) {
  return Math.round(((demon.enjoyment + demon.gp + demon.deco + demon.song)/4)*2)/2; // it does all this goofy stuff to round to the nearest 0.5 so the CSS colors will work
}

function getCreatorString(creators) {
  let creatorName;
  if (creators.length == 1) {
    creatorName = creators[0].name;
  } else if (creators.length == 2) {
    creatorName = `${creators[0].name} & ${creators[1].name}`;
  } else {
    creatorName = `${creators[0].name} & more`;
  }
  return creatorName;
}

$(document).ready(function() {
  $(function() {
    $("#list-button").click(function() {
      $("#list").show();
      $("#ratings").hide();
      $("#todo").hide();
    });
    $("#ratings-button").click(function() {
      $("#ratings").show();
      $("#list").hide();
      $("#todo").hide();
    })
    $("#todo-button").click(function() {
      $("#todo").show();
      $("#list").hide();
      $("#ratings").hide();
    })
  });
  
  async function list() {
    let demonCounter = 1;
    let promises = demons.map(function(currentItem) {
      return new Promise(function(resolve) {
        let currentDemon;
        if (typeof currentItem === "number") {
          $.ajax({
            url: "https://pointercrate.com/api/v2/demons/" + currentItem,
            method: "GET"
          }).done(function(data) {
            let creatorName = getCreatorString(data.data.creators);
            currentDemon = new Demon(
              data.data.name,
              null,
              null,
              creatorName,
              data.data.position,
              data.data.thumbnail,
              data.data.video
            );
            // Clean up the data: replace videos, add attempts and dates
            switch (currentDemon.name) {
              case "Prismatic Haze":
                currentDemon.video = "https://www.youtube.com/watch?v=Raz1oAta89k&t=1409s";
                currentDemon.attempts = 10557;
                currentDemon.date = "4/23/2023";
                break;
              case "Triple Six":
                currentDemon.video = "https://www.youtube.com/watch?v=9EvcVYTlplE";
                currentDemon.attempts = 10467;
                currentDemon.date = "5/18/2023";
                break;
              case "Retention":
                currentDemon.video = "https://www.youtube.com/watch?v=cMRfz1ZtOm8";
                currentDemon.attempts = 6233;
                currentDemon.creators = "WOOGI1411";
                currentDemon.date = "5/26/2023";
                break;
              case "Bloodbath":
                currentDemon.video = "https://www.youtube.com/watch?v=t8hZkgieWGw&t=1172s";
                currentDemon.attempts = 13828;
                currentDemon.date = "6/10/2023";
                break;
              case "Blade of Justice":
                currentDemon.video = "https://www.youtube.com/watch?v=UKKPnjRyO3g";
                currentDemon.attempts = 14903;
                currentDemon.date = "7/24/2023";
                break;
              case "SPEEDRUN":
                currentDemon.video = "https://www.youtube.com/watch?v=z_JXoH4lQu0";
                currentDemon.attempts = 7888;
                currentDemon.date = "8/15/2023";
                break;
              case "Endless Dream":
                currentDemon.video = "https://www.youtube.com/watch?v=eTqYTVNWjA8";
                currentDemon.attempts = 11342;
                currentDemon.date = "9/18/2023";
                break;
              case "DARKENED":
                currentDemon.video = "https://www.youtube.com/watch?v=4llZUZGH4pg";
                currentDemon.creators = "BIANOX & more";
                currentDemon.attempts = 7118;
                currentDemon.date = "1/13/2024";
                break;
              case "Black Blizzard":
                currentDemon.video = "https://www.youtube.com/watch?v=OENvXGj2Mc8";
                currentDemon.thumbnail = "https://i.ytimg.com/vi/OENvXGj2Mc8/mqdefault.jpg"
                currentDemon.attempts = 15114;
                currentDemon.date = "6/11/2024";
                break;
              case "Killbot":
                currentDemon.video = "https://www.youtube.com/watch?v=aE6SbYD9OYQ&t=1282s";
                currentDemon.thumbnail = "https://i.ytimg.com/vi/aE6SbYD9OYQ/mqdefault.jpg";
                currentDemon.attempts = 13759;
                currentDemon.date = "6/28/2024";
                break;
              case "Ethereal Artifice":
                currentDemon.video = "https://www.youtube.com/watch?v=bqO0u7ZYXlM";
                currentDemon.attempts = 12004;
                currentDemon.date = "7/20/2024";
            }
            resolve(currentDemon);
          }).fail(function() {
            console.log("API error");
            resolve(null); // Resolve with null for failed requests
          });
        } else {
          currentDemon = currentItem;
          resolve(currentDemon);
        }
      });
    });
  
    let results = await Promise.all(promises);
  
    results.forEach(function(currentDemon) {
      if (currentDemon) {
        $("#list-container").append(`
          <div class="demon">
            <div class="demon-thumbnail">
              <a href=${currentDemon.video} target="_blank"><img src=${currentDemon.thumbnail} alt="${currentDemon.name}"></a>
            </div>
            <div class="demon-info">
              <h1>#${demonCounter}: ${currentDemon.name}</h1>
              <h2>By ${currentDemon.creators}</h2>
              <p>Demon list position: ${currentDemon.position}</p>
              <p>Date completed: ${currentDemon.date}</p>
              <p>Attempt count: ${currentDemon.attempts}</p>
            </div>
          </div>`);
        demonCounter++;
      }
    });
  }
  
  async function upcomingList() {
    if (upcomingDemons.length > 0) {
      let promises = upcomingDemons.map(function(currentItem) {
        return new Promise(function(resolve) {
          let currentDemon;
          if (typeof currentItem === "number") {
            $.ajax({
              url: "https://pointercrate.com/api/v2/demons/" + currentItem + "/",
              method: "GET"
            }).done(function(data) {
              let creatorName = getCreatorString(data.data.creators);
              currentDemon = new Demon(
                data.data.name,
                null,
                null,
                creatorName,
                data.data.position,
                data.data.thumbnail,
                data.data.video
              );
              // Clean up the data: replace objects/arrays in creators
              switch (currentDemon.name) {
                case "Ethereal Artifice":
                currentDemon.date = "6/29/2024";
                break;
              }
              resolve(currentDemon);
            }).fail(function() {
              console.log("API error");
              resolve(null); // Resolve with null for failed requests
            });
          } else {
            currentDemon = currentItem;
            resolve(currentDemon);
          }
        });
      });

      let results = await Promise.all(promises);

      results.forEach(function(currentDemon) {
        if (currentDemon) {
          $("#upcoming-container").append(`
            <div class="demon">
              <div class="demon-thumbnail">
                <a href=${currentDemon.video} target="_blank"><img src=${currentDemon.thumbnail}></a>
              </div>
              <div class="demon-info">
                <h1>${currentDemon.name}</h1>
                <h2>By ${currentDemon.creators}</h2>
                <p>Demon list position: ${currentDemon.position}</p>
                <p>Date started: ${currentDemon.date}</p>
                <p>Projected list placement: <b>2-3</b></p>
              </div>
            </div>`);
        }
      });
    }
    else {
      $("#upcoming-container").append(`<p>Nothing right now!</p>`)
    }
  }
  
  function ratings() {
    // probably order highest to lowest? or most recent? or add an option to reorder?
    for (let demon of demonRatings) {
      avg = (demon.enjoyment + demon.gp + demon.deco + demon.song)/4;
      avgColor = generateColorCode(averageRating(demon));
      $("#ratings-container").append(`
      <div class="demon demon-rating">
        <h1>${demon.name}</h1>
        <p style="background-color:#${avgColor}; padding:1.5% 0%;"><b>Overall: ${avg} / 10</b></p>
        <p style="background-color:#${generateColorCode(demon.enjoyment)};">Enjoyment: ${demon.enjoyment} / 10</p>
        <p style="background-color:#${generateColorCode(demon.gp)};">Gameplay: ${demon.gp} / 10</p>
        <p style="background-color:#${generateColorCode(demon.deco)};">Decoration: ${demon.deco} / 10</p>
        <p style="background-color:#${generateColorCode(demon.song)};">Song: ${demon.song} / 10</p>
        <p>${demon.notes}</p>
      </div>`)
    }
  }

  function toDo() {
    for (let demon of toDoList) {
      let name;
      switch (demon.excitement) {
        case 0:
          name = `<h1 style="color:red;">${demon.name}</h1>`;
          break;
        case 1:
          name = `<h1>${demon.name}</h1>`;
          break;
        case 2:
          name = `<h1><i>${demon.name}</i></h1>`;
          break;
        case 3:
          name = `<h1><b>${demon.name}</b></h1>`;
          break;
        case 4:
          name = `<h1><i><b>${demon.name}</b></i></h1>`;
          break;
        default:
          name = `<h1>${demon.name}</h1>`;
      }
      $("#todo-container").append(`
        <div class="demon demon-todo">
          ${name}
          <p>${demon.reason}</p>
        </div>`)
    }
  }
  
  list();
  upcomingList();
  ratings();
  toDo();
})