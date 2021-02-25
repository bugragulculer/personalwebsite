import React from 'react';
import './podcast.css'

const PodcastComp = () => {
  return (
    <section className='two-section'>
      <div className='section-container'>
      <h2>Did you see my Podcast?</h2>
      <h4 className='h4'>Currently, I only do podcast in Turkish, </h4>
      <h4>however, in the near future, I'm planning to record podcasts in English. Stay tuned.</h4>
      <iframe className='spotify' src="https://open.spotify.com/embed-podcast/show/558Alds0OXFl56F0Ar4LxS" width="90%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    </section>

  );
};  

export default PodcastComp;