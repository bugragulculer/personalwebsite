import React from 'react'
import './newsletter.css'

class SubscribePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            NameValue: '',
        };
    }

    render() {
        return (
            <section className='two-section'>
                <h2>Subscribe to My Newsletter</h2>
                <h4>I am sending a newsletter every Friday</h4>
                <h4>No spam. Unsubscribe anytime.</h4>
            <form action="https://youtube.us4.list-manage.com/subscribe/post?u=202596093129dd9f85893dc69&amp;id=de8bc456c2" method="GET" noValidate>
                <input type="hidden" name="u" value="202596093129dd9f85893dc69" />
                <input type="hidden" name="id" value="de8bc456c2" />
                <label htmlFor='MERGE0'>
                    Email
                    <input
                        type="email"
                        name="EMAIL"
                        id="MERGE0"
                        value={this.state.emailValue}
                        onChange={(e) => { this.setState({ emailValue: e.target.value }); }}
                        autoCapitalize="off"
                        autoCorrect="off"
                    />
                </label>
                <label htmlFor='MERGE1'>
                    First name
                    <input
                        type="text"
                        name="NAME"
                        id="MERGE1"
                        value={this.state.NameValue}
                        onChange={(e) => { this.setState({ NameValue: e.target.value }); }}
                    />
                </label>
                <li><input type="checkbox" value="1" name="group[71482][1]" id="mce-group[71482]-71482-0" checked/><label for="mce-group[71482]-71482-0">Bugra Gulculer</label></li>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true' aria-label="Please leave the following two fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name" />

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email" />

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                    </div>
                    
                </form>
                </section>
        )
    }
}

export default SubscribePage;


