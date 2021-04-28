import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

import { getNumberOfPosts } from '../../api';



const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();



    // Brojimo koliko ima postova u bazi podataka

    let compteur;

    (async () => {
        compteur = await getNumberOfPosts().then(result => { return result.data });
    })();



return (

    //TODO: CircularProgress ne treba da se pojavi u bazi podataka nema nijedan post (prazna)
    (!posts.length) ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>

            {
                posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>

                ))}

        </Grid>
    )

);

};

export default Posts;

