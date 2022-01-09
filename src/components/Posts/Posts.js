import {React, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

import { getNumberOfPosts } from '../../api';

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const [isEmptyDatabase, setIsEmptyDatabase] = useState(true);

    // Brojimo koliko ima postova u bazi podataka
     
     getNumberOfPosts().then(result => { if (result !== 0) setIsEmptyDatabase(false); else setIsEmptyDatabase(true)});

        if (isEmptyDatabase) {
            return null;
        }
        
       return (!posts.length) ? (<CircularProgress />) : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>

                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>

                    ))}

            </Grid>
        )

};

export default Posts;

