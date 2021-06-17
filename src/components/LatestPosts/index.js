import React, { Component } from 'react';
import FilterCapsules from '../FilterCapsules';
import BlogCards from '../BlogCards';
import styles from './latestposts.module.css'

const LatestPosts = () => {
    return ( 
        <div className={styles.postsContainer}>
            <h3>Latest Posts</h3>
            <FilterCapsules />
            <BlogCards />
        </div>
     );
}
 
export default LatestPosts;