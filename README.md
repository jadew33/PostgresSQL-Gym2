# w22-van-the-man

Van, if you want to update your website or hire freelancers, fork the repo and then deploy the new edited project using a platform of your choice

How to clone and run this repo locally (code editor like vscode required) 

Using the terminal,

Clone the repo:

git clone https://github.com/queens-web-development-club/w22-van-the-man.git

Navigate into the root of the repo:

cd /w22-van-the-man

Install dependencies by running: 

npm i

Navigate into the front end client folder:

cd /client

Install dependencies required by the client folder by running 'npm i' again

Should be able to start a local server now. 

Try 1, navigate back to the root from the client 'cd ..' and run 'npm run dev'

If this doesnt work, try 2, in the root start the server 'node index.js', then navigate back to the client folder 'cd client' and run 'npm start'

#h how to add images to the gallery
There are 2 categories of the image rows, rows for horizontal image and rows for vertical images

Rows for horizontal images can store 3 horizontal images. Rows for vertical images can store 4 vertical images. 

All that you need to do is import the photo at the top of gallery.js. Images must be stored in src/Assets/Images and the larger the file is memory wise, the longer it will take for the user to load the image.

Can follow this pattern: import galImg13 from '../Assets/Images/gal_13.png';

Templates for vertical and horizontal rows here: What needs to be replaced are what follows the src and alt.
Replace the src={whateverYouCallTheImageName} and change the alt="message that describes the image"

            <Row className="image-row vertical">
                <Col xs={12} md={3}>
                    <img src={galImg7} alt="recording studio with mic" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg8} alt="on stage with mic" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg9} alt="in studio" />
                </Col>
                <Col xs={12} md={3}>
                    <img src={galImg10} alt="street with basketball" />
                </Col>
            </Row>
            
                        <Row className="image-row horizontal" >
                <Col xs={12} md={4}>
                    <img src={galImg2} alt="teal bg with couch" />
                </Col>

                <Col xs={12} md={4}>
                    <img src={galImg5} alt="studio on piano" />
                </Col>
                <Col xs={12} md={4}>
                    <img src={galImg12} alt="studio organizing" />
                </Col>
            </Row>
