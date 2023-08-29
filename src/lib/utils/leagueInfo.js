/*   STEP 1   */
// export const leagueID = "972236561200799744";

//* Real League here: // export const leagueID = "865443697817423872";
////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////
export const leagueID = "1000787989668696064";
////////////////////////////////////
///////////////////////////////////
//////////////////////////////////
/////////////////////////////////
////////////////////////////////
const league_user_ids = [
  {
    user_id: 482350633177837568,
    name: "JimNayzium"
  },
  {
    user_id: 844644401824231424,
    name: "Maxbosley",

  },
  {
    user_id: 991035802056466432,
    name: "Warriorlocke",

  },
  {
    user_id: 992924368130867200,
    name: "DommyBoi412",

  },
  {
    user_id: 1000787150196457472,
    name: "brandonhenry",

  },
  {
    user_id: 1000839713948770304,
    name: "kingdavidtradewite",

  },
  {
    user_id: 1000905284367319040,
    name: "SMT7",

  },
  {
    user_id: 1000905318622105600,
    name: "Willready31",

  },
  {
    user_id: 1000919564785389568,
    name: "AveMcG",

  },
  {
    user_id: 1000921514327326720,
    name: "McToots",
  }
];
///////////////////////////////
//////////////////////////////
/////////////////////////////
export async function fetchLeagueManagersMSS() {
  const response = await fetch(`https://api.sleeper.app/v1/league/${leagueID}/users`, { compress: true });
  const data = await response.json();
  let counter = 0;
  let new_managers = new Array();
  Object.entries(data).forEach(item => {
    const [key, value] = item;
    counter++;
    let manager_obj = {
      managerID: value.user_id,
      roster: counter,
      name: value.display_name,
      location: "Blythewood, SC",
      bio: value.metadata.team_name,
      photo: `https://sleepercdn.com/avatars/thumbs/${value.avatar}`,
      mode: "Win Now",
      rival: {
        name: "Rival",
        link: 0,
        image: "/managers/rival.jpg",
      },
      philosophy: "Your fantasy team's philosophy",
      tradingScale: 10,
      preferredContact: "Text",
    };
    new_managers.push(manager_obj);
  });
  return new_managers;
}
// your league ID
const currentYear = new Date().getFullYear();
export const leagueName = "FANDEMIC " + currentYear; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2020 during the Covid-19 Pandemic, FANDEMIC is the home league of Marty Simpson. It consists of Marty's former students while a teacher and coach at a high school in Columbia, South Carolina, as well as some of Marty's close stand-up comedian friends. The signature of the Fandemic Fantasy Football league is the roster requirements on a weekly basis.</p>
  <p>
  <ul>
    <li>You must start a rookie somewhere in your line-up.</li>
    <li>The positions in the starting line-up are: QB, RB, RB, WR, WR, WR, TE, FLEX, FLEX, SUPER_FLEX.</li>
    <li>No DST and no KICKER!</li>
    <li>Half-PPR scoring with 4 point thrown touchdowns.</li>
    <li>The playoffs are a one of a kind Royal Rumble style where a group makes each round and the top scores from each round advance! (versus head to head match-ups.)</li></ul>`;



//# pull this from the browser window by going to IFF link and looking in the file IFF_Manger_Roster.svelte
//#    // export const managers = await fetchLeagueManagersMSS();
export const managers = [
  {
    "managerID": "482350633177837568",
    "roster": 1,
    "name": "JimNayzium",
    "location": "Blythewood, SC",
    "bio": "Brees Nuts",
    "photo": "https://sleepercdn.com/avatars/thumbs/d8db99cf6b5397bccf29cfb91e40c320",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "844644401824231424",
    "roster": 2,
    "name": "Maxbosley",
    "location": "Blythewood, SC",
    "photo": "https://sleepercdn.com/avatars/thumbs/b319fdf8b7b5b0359d3c78622ba4d70c",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "991035802056466432",
    "roster": 3,
    "name": "Warriorlocke",
    "location": "Blythewood, SC",
    "bio": "Olave Garden",
    "photo": "https://sleepercdn.com/avatars/thumbs/c29deb12ec2084114e3e7332bb06d587",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "992924368130867200",
    "roster": 4,
    "name": "DommyBoi412",
    "location": "Blythewood, SC",
    "photo": "https://sleepercdn.com/avatars/thumbs/8eb8f8bf999945d523f2c4033f70473e",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "1000787150196457472",
    "roster": 5,
    "name": "brandonhenry",
    "location": "Blythewood, SC",
    "photo": "https://sleepercdn.com/avatars/thumbs/f0edbf4278f53f9425db175073df6584",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "1000839713948770304",
    "roster": 6,
    "name": "kingDavid16",
    "location": "Blythewood, SC",
    "photo": "https://sleepercdn.com/avatars/thumbs/ef8b86ba7d311bd301e0b4e27d7a4054",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "1000905284367319040",
    "roster": 7,
    "name": "SMT7",
    "location": "Blythewood, SC",
    "photo": "https://sleepercdn.com/avatars/thumbs/82aec8e811b839b8ec25d7b458afd57b",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "1000905318622105600",
    "roster": 8,
    "name": "Willready31",
    "location": "Blythewood, SC",
    "bio": "Cookin’ with Kelce",
    "photo": "https://sleepercdn.com/avatars/thumbs/4f4090e5e9c3941414db40a871e3e909",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "1000919564785389568",
    "roster": 9,
    "name": "AveMcG",
    "location": "Blythewood, SC",
    "bio": "Bijan & the Bolts",
    "photo": "https://sleepercdn.com/avatars/thumbs/b319fdf8b7b5b0359d3c78622ba4d70c",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  },
  {
    "managerID": "1000921514327326720",
    "roster": 10,
    "name": "McToots",
    "location": "Blythewood, SC",
    "photo": "https://sleepercdn.com/avatars/thumbs/4f4090e5e9c3941414db40a871e3e909",
    "mode": "Win Now",
    "rival": {
      "name": "Rival",
      "link": 0,
      "image": "/managers/rival.jpg"
    },
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text"
  }
];

// export const managers = [
//   {
//   "managerID": "482350633177837568",
//   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   "name": "Marty Simpson",
//   "location": "Blythewood, SC", // (optional)
//   "bio": "Lorem ipsum...",
//   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   "rival": {
//     name: "Rival", // Can be anything (usually your rival's name)
//     link: 0, // manager array number within this array, or null to link back to all managers page
//     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   },
//   "philosophy": "Your fantasy team's philosophy",
//   "tradingScale": 10, // 1 - 10
//   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//     "managerID": "783036890130538496",
//     "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "name": "PeachesBrown",
//     "location": "West Columbia, SC", // (optional)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 1, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//     "managerID": "999115166937690112",
//     "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "name": "IFF2",
//     "location": "Columbia, SC", // (optional)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 2, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//   "managerID": "999116618913472512",
//     "name": "IFF5",
//     "location": "Raleigh, NC", // (optional)
//     "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 3, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//   "managerID": "999117446911041536",
//     "name": "IFF4",
//     "location": "Greenville, SC", // (optional)
//     "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 4, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//   "managerID": "999117723768717312",
//     "name": "IFF7",
//     "location": "Lexington, KY", // (optional)
//     "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 5, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//   "managerID": "999118150039977984",
//     "name": "IFF8",
//     "location": "Lexington, KY", // (optional)
//     "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 6, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//   "managerID": "999119076888838144",
//     "name": "IFF3",
//     "location": "Charleston, SC", // (optional)
//     "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 7, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//     "managerID": "999119468766973952",
//     "name": "IFF10",
//     "location": "Columbia, SC", // (optional)
//     "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//       name: "Rival", // Can be anything (usually your rival's name)
//       link: 8, // manager array number within this array, or null to link back to all managers page
//       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   },
//   {
//   "managerID": "999119810283941888",
//     "name": "IFF9",
//     "location": "Columbia, SC", // (optional)
//     "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     "bio": "Lorem ipsum...",
//     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     "rival": {
//     name: "Rival", // Can be anything (usually your rival's name)
//     link: 8, // manager array number within this array, or null to link back to all managers page
//     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     },
//     "philosophy": "Your fantasy team's philosophy",
//     "tradingScale": 10, // 1 - 10
//     "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   }



//   // ,
//   // {
//   //   "managerID": "624448105621835776",
//   //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "name": "Ash Aldridge",
//   //   "location": "West Columbia, SC", // (optional)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 1, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // },
//   // {
//   //   "managerID": "728250825083875328",
//   //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "name": "Stephen Parrish",
//   //   "location": "Columbia, SC", // (optional)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 2, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // },

//   // {
//   //   "managerID": "732350929130590208",
//   //   "name": "Brian Yandle",
//   //   "location": "Raleigh, NC", // (optional)
//   //   "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 3, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // },

//   // {
//   //   "managerID": "732392239275315200",
//   //   "name": "Brandon Rainwater",
//   //   "location": "Greenville, SC", // (optional)
//   //   "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 4, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // },

//   // {
//   //   "managerID": "733334465136459776",
//   //   "name": "Shawn Reynolds",
//   //   "location": "Lexington, KY", // (optional)
//   //   "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 5, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // },

//   // {
//   //   "managerID": "991805740383858688",
//   //   "name": "Shawn Reynolds, Jr.",
//   //   "location": "Lexington, KY", // (optional)
//   //   "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 6, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // },

//   // {
//   //   "managerID": "737935031867244544",
//   //   "name": "Walt Simpson",
//   //   "location": "Charleston, SC", // (optional)
//   //   "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 7, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // },
//   // {
//   //   "managerID": "871440298188922880",
//   //   "name": "David Pascutti",
//   //   "location": "Columbia, SC", // (optional)
//   //   "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//   //   "bio": "Lorem ipsum...",
//   //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   //   "rival": {
//   //     name: "Rival", // Can be anything (usually your rival's name)
//   //     link: 8, // manager array number within this array, or null to link back to all managers page
//   //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   //   },
//   //   "philosophy": "Your fantasy team's philosophy",
//   //   "tradingScale": 10, // 1 - 10
//   //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   // }


// ]
