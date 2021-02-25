import React from 'react'
import okul from '../../assets/okul.png'
import gunluk from '../../assets/gunluk.png'
import hafta from '../../assets/hafta.png'
import aylik from '../../assets/aylik.png'
import yillik from '../../assets/yillik.png'
import './tab_plan.css'
import {Component} from 'react'

const App = () => {


    return (
      <div className="tabs">
        <h1>Planners</h1>
        <Tabs>
          <Tab label="Daily Plan" id='1'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Daily Plan</h1>
                <p className='notion_content_desc_left'>A useful Notion page where you can write daily things to do, plan which tasks will be done when, take necessary notes and keep track of your daily water consumption.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/G-nl-k-Plan-c78efb276fe143b98fa514bf6d8924ca">Go to template!</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={gunluk} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Weekly Plan" id='2'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Weekly Plan</h1>
                <p className='notion_content_desc_left'>A useful Notion page where you can write the weekly things to do, plan which tasks will be done on which day and when, and take the necessary notes.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Haftal-k-Plan-cfc8435011cf44e1aecb4c801b0c2025">Go to template!</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={hafta} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Monthly Plan" id='3'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Monthly Plan</h1>
                <p className='notion_content_desc_left'>A useful Notion page where you can write monthly things, mark which works will be done on which day on the calendar, and take the necessary notes.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Ayl-k-Plan-6b4dbca280554054b80190d493beb3b3">Go to template!</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={aylik} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Yearly Plan" id='4'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Yearly Plan</h1>
                <p className='notion_content_desc_left'>A handy Notion page where you can write down your yearly expectations and things to do, plan which jobs will be done in which quarter, and take notes.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Y-ll-k-Plan-1c4b621ec9614f86b3cd7065bf0d5f79">Go to template!</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={yillik} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="College Planner" id='5'> 
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>College Planner</h1>
                <p className='notion_content_desc_left'>It is your greatest assistant in the school where you can follow the contents of the lessons by subject, take notes on important dates such as exams, projects and assignments, and prepare notes and work cards for the lessons. </p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Okul-d63428cb10294300a3f2d66ddd48d17d">Go to template!</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={okul} alt="" />
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