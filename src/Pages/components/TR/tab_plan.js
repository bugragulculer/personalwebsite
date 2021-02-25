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
        <h1>Planlayıcılar</h1>
        <Tabs>
          <Tab label="Günlük Plan" id='1'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Günlük Plan</h1>
                <p className='notion_content_desc_left'>Günlük yapılacakları yazabileceğiniz, hangi işlerin ne zaman yapılacağını planlayabileceğiniz, gerekli notları alabileceğiniz ve günlük su tüketiminizi takip edebileceğiniz kullanışlı bir Notion sayfası.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/G-nl-k-Plan-c78efb276fe143b98fa514bf6d8924ca">Şablona Götür</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={gunluk} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Haftalık Plan" id='2'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Haftalık Plan</h1>
                <p className='notion_content_desc_left'>Haftalık yapılacakları yazabileceğiniz, hangi işlerin hangi gün, ne zaman yapılacağını planlayabileceğiniz ve gerekli notları alabileceğiniz kullanışlı bir Notion sayfası.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Haftal-k-Plan-cfc8435011cf44e1aecb4c801b0c2025">Şablona Götür</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={hafta} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Aylık Plan" id='3'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Aylık Plan</h1>
                <p className='notion_content_desc_left'>Aylık yapılacakları yazabileceğiniz, hangi işlerin hangi gün, ne zaman yapılacağını takvim üstünde işaretleyebileceğiniz ve gerekli notları alabileceğiniz kullanışlı bir Notion sayfası.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Ayl-k-Plan-6b4dbca280554054b80190d493beb3b3">Şablona Götür</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={aylik} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Yıllık Plan" id='4'>
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Yıllık Plan</h1>
                <p className='notion_content_desc_left'>Yıllık beklentilerinizi ve yapılacaklarızı yazabileceğiniz, hangi işlerin hangi çeyrekte yapılacağını planlayabileceğiniz ve gerekli notları alabileceğiniz kullanışlı bir Notion sayfası.</p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Y-ll-k-Plan-1c4b621ec9614f86b3cd7065bf0d5f79">Şablona Götür</a>
              </div>
              <div className='notion_content_half_right'>
                <img className='notion_content_image_left' src={yillik} alt="" />
              </div>
            </div>
          </Tab>
          <Tab label="Okul" id='5'> 
            <div className='notion_content'>
              <div className='notion_content_half_left'>
                <h1 className='notion_content_h1_left'>Okul Planlayıcı</h1>
                <p className='notion_content_desc_left'>Derslerin içeriklerini konu konu takip edebileceğiniz, sınav, proje ve ödev gibi önemli tarihleri not alabileceğiniz, dersler için notlar ve çalışma kartları hazırlayabileceğiniz okuldaki en büyük yardımcınız. </p>
                <a className='notion_content_urli' href="https://www.notion.so/notionturkiye/Okul-d63428cb10294300a3f2d66ddd48d17d">Şablona Götür</a>
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