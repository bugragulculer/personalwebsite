import React from 'react'
import './podcast.css'

function podcast() {
    return (
        <div >
            <div className='hero_podcast'>
                <h1 className='hero_podcast_header'>
                    If you're looking for my podcast page, here it is!
                </h1>
                <p className='hero_podcast_desc'> 
                    Currently, I only do podcast in Turkish, however, in the near future, I'm planning to record podcasts in English. Stay tuned.
                </p>
            </div>
            <div className='podcast_sources'>
                <h1 className='podcast_header'>
                    You can listen to my podcast in different platforms!
                </h1 >
                <h1 className='podcast_header'>
                    Spotify
                </h1>
                <iframe className='spotify' src="https://open.spotify.com/embed-podcast/show/558Alds0OXFl56F0Ar4LxS"  height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <h1 className='podcast_header'>
                    Apple Music
                </h1>
                <iframe className='apple_music' allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="500"  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/ortaya-kar%C4%B1%C5%9F%C4%B1k/id1538796490"></iframe>
                <h1 className='podcast_header'>
                    YouTube
                </h1>
                <iframe className='youtube_embed'  src="https://www.youtube.com/embed/videoseries?list=PL0xvo3CxSLzorfEl9Bq2plOv-1aiE3nU_" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      </div>  
    )
}

export default podcast

