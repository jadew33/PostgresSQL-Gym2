import React from "react";

const innerHTML =
    `<div id="mc_embed_signup" class="footer">
        <form action="https://vanthemanofficial.us1.list-manage.com/subscribe/post?u=4ea4479d3ef5a01f6e14ef95f&amp;id=5e025910f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">

                <div class="row">
                    <div class="mc-field-group col-lg-6 col-md-12">
                        <h2 class="small-salt">Join The Mailing Squad!!</h2>
                    </div>

                    <div class="mc-field-group col-lg-2 col-md-4">
                        <label for="mce-EMAIL">Email<span class="asterisk indicates-required">*</span>
                        </label>
                        <input class="input-field"  type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email Address" />
                    </div>

                    <div class="mc-field-group col-lg-2 col-md-4">
                        <label for="mce-FNAME">Name*</label>
                        <input type="text" value="" name="FNAME" class="input-field" id="mce-FNAME" placeholder="First Name"/>
                    </div>

                    <div class="mc-field-group col-lg-2 col-md-4">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                    </div>

                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>

                </div>
                
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4ea4479d3ef5a01f6e14ef95f_5e025910f9" tabindex="-1" value="" /></div>
                
            </div>
        </form>
    </div>`

function Footer() {
    return (
        <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
    );
}

export default Footer;