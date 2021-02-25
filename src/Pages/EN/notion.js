import React from 'react'
import Plan from '../components/EN/tab_plan'
import Tracker from '../components/EN/tab_tracker'
import Header from '../components/EN/notion_header'
import YouTube from '../components/EN/notion_youtube'
import './notion.css'

function notion() {
    return (
        <div>
            <Header />
            <Plan />
            <Tracker />

        </div>
    )
}

export default notion
