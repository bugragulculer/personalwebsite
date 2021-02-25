import React from 'react';
import './podcast.css'

const PodcastComp = () => {
  return (
    <section className='two-section'>
      <div className='section-container'>
      <h2>Podcast'imi gördünüz mü?</h2>
      <h4 className='h4'>Haftada bazen 1 bölüm bazen de 3 bölüm yayınlıyorum. </h4>
      <h4>Genelde teknoloji üzerine konustugum bu podcast'i kaçırmayın.</h4>
      <iframe className='spotify' src="https://open.spotify.com/embed-podcast/show/558Alds0OXFl56F0Ar4LxS" width="90%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    </section>

  );
};  

export default PodcastComp;