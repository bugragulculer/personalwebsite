import React from 'react'
import Plan from '../components/TR/tab_plan'
import İzle from '../components/TR/tab_izleyici'
import Header from '../components/TR/notion_header'
import YouTube from '../components/TR/notion_youtube'
import './notion.css'

function notion() {
    return (
        <div>
            <Header />
            <YouTube/>
            <Plan />
            <İzle />

        </div>
    )
}

export default notion
