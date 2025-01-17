// import contentful from 'contentful-management'
// import { json, error } from '@sveltejs/kit';

// import { getLeagueTeamManagers } from "$lib/utils/helper";

// const client = contentful.createClient({
//     // This is the access token for this space. Normally you get the token in the Contentful web app
//     accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
// });

// const lang = "en-US";

// export async function POST({request, params}) {
//     const space = await client.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE)
//         .catch(e => {
//             console.error(e);
//             throw error(500, "Problem getting contentful space");
//         });
//     const environment = await space.getEnvironment('master')
//         .catch(e => {
//             console.error(e);
//             throw error(500, "Problem getting contentful environment");
//         });
    
//     const authorID = params.id;
//     const {comment, postID} = await request.json();

//     const leagueTeamManagers = await getLeagueTeamManagers();

//     const author = validateID(leagueTeamManagers, authorID);

//     if(!author) {
//         throw error(500, "Invalid author");
//     }

//     let fields = {
//         "blogID": {},
//         "comment": {},
//         "author": {}
//     };

//     fields.blogID[lang] = postID;
//     fields.comment[lang] = comment;
//     fields.author[lang] = author;

//     const newComment = await environment.createEntry('blog_comment', {fields})
//         .catch(e => {
//             console.error(e);
//             throw error(500, "Problem adding comment");
//         });

//     await newComment.publish()
//         .catch((e) => {
//             console.error(e);
//             throw error(500, "Problem publishing comment");
//         });

//     // remove lang constraint
//     newComment.fields.blogID = postID;
//     newComment.fields.comment = comment;
//     newComment.fields.author = author;

//     return json(newComment);
// }

// const validateID = (leagueTeamManagers, authorID) => {
//     for(const yearKey in leagueTeamManagers.teamManagersMap) {
//         for(const rosterKey in leagueTeamManagers.teamManagersMap[yearKey]) {
//             for(const manager of leagueTeamManagers.teamManagersMap[yearKey][rosterKey].managers) {
//                 if(manager == authorID) {
//                     return leagueTeamManagers.users[manager].display_name;
//                 }
//             }
//         }
//     }
    
//     return false;
// }