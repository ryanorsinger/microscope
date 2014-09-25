var postsData = [
    {
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Discover Meteor',
        author: 'Sacha Greif',
        url: 'http://discovermeteor.com'
    },
    {
        title: 'Meteor Academy',
        author: 'Ciara Burkett',
        url: 'http://meteor.academy/'
    },
    {   title: 'Meteor Hacks',
        author: 'Arunoda',
        url: 'https://meteorhacks.com'
    },
    {   title: 'Meteor In Action',
        author: 'Stephan Hochhaus, Manuel Schoebel',
        url: 'http://www.meteorinaction.com/'
    }
];

Template.postsList.helpers({
  posts: postsData
});
