const User = require('./User');
const Post = require('./Post');
const Enjoy = require('./Enjoy');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Enjoy,
    as: 'enjoyed_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Enjoy,
    as: 'enjoyed_posts',
    foreignKey: 'post_id'
});

Enjoy.belongsTo(User, {
    foreignKey: 'user_id'
});

Enjoy.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Enjoy, {
    foreignKey: 'user_id'
});

Post.hasMany(Enjoy, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Enjoy };