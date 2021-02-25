import React from 'react'
import habits from '../../assets/aliskanlik.png'
import journal_2 from '../../assets/gunluk_2.png'
import CV from '../../assets/CV.png'
import book from '../../assets/kitap.png'
import media from '../../assets/medya.png'
import './tab_tracker.css'

const App = () => {


    return (
      <div className="tabs">
        
        <h1>Trackers</h1>
        <Tabs>
          <Tab label="Habits" id='1'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Daily Habits</h1>
                <p className='notion_content_desc_righti'>If you've read James Clear's Atomic Habits, you know how effective habits are in our lives. This template will help you keep track of your new habits!</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Go to template!</a>
              
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={habits} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Book" id='2'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Book Tracker</h1>
                <p className='notion_content_desc_righti'>If you are fond of books like me, this template is just for you. This is a great template where you can track which book you read when or which page of which book you are on.</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Go to template!</a>
              
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={book} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label='Media' id='3'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Media Tracker</h1>
                <p className='notion_content_desc_righti'>A great Notion template that will help you keep track of all kinds of content you can think of, from movies to books, from playlists to podcasts, from games to articles, and eliminates the question of which series you were in which episode.</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Go to template!</a>
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={media} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Journal" id='4'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>Journal</h1>
                <p className='notion_content_desc_righti'>Notion is a great diary app. The diary template I'm also using is now available for you!</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/G-nl-k-dcf5252f815b48439317c6c770e5af8f">Go to template!</a>
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={journal_2} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="CV" id='5'>
            <div className='notion_contenti'>
              <div className='notion_content_half_righti'>
                <h1 className='notion_content_h1_righti'>CV Template</h1>
                <p className='notion_content_desc_righti'>It is a very useful template that you can play with the information on your CV and the design of your CV, or share it on website when it is ready.</p>
                <a className='notion_content_url' href="https://www.notion.so/notionturkiye/CV-Tasla-ad39efe151a745d8849163b04317dc5f">Go to template!</a>
              </div>
              <div className='notion_content_half_lefti'>
                <img className='notion_content_image_righti' src={CV} alt="" />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }

  changeTab = (tab) => {
    this.setState({ activeTab: tab.id=tab + 1}, 3000)
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };

  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': 'normal'} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
 

export default App