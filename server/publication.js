// Set the server to publish mongo posts.

Meteor.publish('posts', function() {
    return Posts.find();
});

// Meteor.publish('posts', function() {
//     return Posts.find(
//         {flagged: false}
//         );
// });
