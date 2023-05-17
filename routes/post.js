const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message: error});
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({_id: req.params.postId});
        res.json({message: "Post eliminado correctamente"});
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;


/*const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);

    }catch (error) {
        res.json({message: error });
    }
});
router.get('/:postId', async ( req, res) => {
    try {
        const post = await post.findById(req.params.postId);
        res.json(post);
    }catch (error) {
        res.json({message: error})
    }
});
router.delete('/:posrId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId });
    }
});
*/