import React from "react";
import { Container } from 'react-bootstrap';

// Sorry to overwrite your footer, John
// This snippet from mailchimp is automatically connected
// Can be styled by selecting the classes
const innerHTML =
    `<div id="mc_embed_signup" class="container">
        <form action="https://vanthemanofficial.us1.list-manage.com/subscribe/post?u=4ea4479d3ef5a01f6e14ef95f&amp;id=5e025910f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
                <h2 class="small-salt">Join The Mailing Squad!!</h2>
                <div class="indicates-required"><span class="asterisk indicates-required">*</span> indicates required</div>
                
                <div class="row">
                    <div class="mc-field-group col-md-3">
                        <label for="mce-EMAIL">Email Address  <span class="asterisk indicates-required">*</span>
                        </label>
                        <input class="input-field"  type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
                    </div>
                    <div class="mc-field-group col-md-3">
                        <label for="mce-FNAME">First Name </label>
                        <input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
                    </div>
                    <div class="mc-field-group col-md-3">
                        <label for="mce-LNAME">Last Name </label>
                        <input type="text" value="" name="LNAME" class="" id="mce-LNAME" />
                    </div>
                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>

                    
                    <div class="mc-field-group col-md-3">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                        <p class="brandingLogo"><a href="http://eepurl.com/hU2faz" title="Mailchimp - email marketing made easy and fun"></a></p>
                    </div>
                   

                </div>
                
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4ea4479d3ef5a01f6e14ef95f_5e025910f9" tabindex="-1" value="" /></div>
                
            </div>
        </form>
    </div>`

function Footer() {
    return (
        <Container className='footer'>
            <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
        </Container>
    );
}

export default Footer;