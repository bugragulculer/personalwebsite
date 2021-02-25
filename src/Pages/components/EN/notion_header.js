import React from 'react'
import Notion from '../../assets/notion_header.png'
import './notion_header.css'

function notion_header() {
    return (
        <div>
            <div className='notion_header'>
                <div className='notion_header_half'>
                    <h1 className='notion_header_h1'>Notion</h1>
                    <h1 className='notion_header_h2'>All-in-One Workspace</h1>
                    <h2 className='notion_header_h3'>One tool for you and your entire team. Write, plan and organize.</h2>
                </div>
                <div className='notion_header_half'>
                    <img className='notion_header_image' src={Notion} alt=""/>
                </div>
            </div>
            <div className='notion_notice'>
                <h1 className='notion_notice_header'>Notion Turkey Community is now open!</h1>
                <div className='notion_notice_desc'>
                    <a className='notion_notice_desc_i' href="https://www.notion.so/notionturkiye/Notion-T-rkiye-456ec455a3484192a6c4b7a2f9baa61a">To go to the community page click here.</a>
                </div>
            </div>
        </div>
    )
}
         

export default notion_header