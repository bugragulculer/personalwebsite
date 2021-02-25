import React from 'react'
import './notion_youtube.css'

const notion_videos = () => {
    return (
        <div className='notion_videos' >
            <div className='video_desc'>
                <h1 className='video_desc_h1'>Notion'ı öğrenmeye başlayın</h1>
                <h3 className='video_desc_h3'>YouTube'da paylaştığım Notion videolarıyla Notion'ın temellerini öğrenebilir ve size özel sayfalar oluşturabilirsiniz. </h3>
            </div>
            <h2 className='video_desc_h2'>Yeni Başlayanlar İçin</h2>
            <div className='videos'>
                <iframe className='video' src="https://www.youtube.com/embed/xPRFMEfWKtE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='video' src="https://www.youtube.com/embed/fAHU8EW_PPI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h2 className='video_desc_h2'>Son Videolarım</h2>
            <div className='videos'>
                <iframe className='video' src="https://www.youtube.com/embed/t7KfyBZ3BjI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className='video' src="https://www.youtube.com/embed/flIwZNmovf4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default notion_videos