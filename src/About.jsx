import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as images from './images';
import WebTitleContext from './WebTitleContext';
import Ratio from 'react-bootstrap/Ratio';

const About = () => {
  const webTitle = useContext(WebTitleContext);

  const handleGoToExpertCategory = () => {
    const workoutCategoryElement = document.getElementById('aboutus-expert-category');
    workoutCategoryElement.scrollIntoView({ behavior: 'smooth' });
  };

  const expertList = {
    leadershipList: [
      { name: "David Johnson", role: "Founder, CEO & Nutritionist", expertImg: images.ExpertsImage1},
      { name: "Jack Phillips", role: "Co-founder, Personal Trainer & Psychologist", expertImg: images.ExpertsImage2},
      { name: "Emily Waston", role: "Co-founder & Nutritionist", expertImg: images.ExpertsImage3},
    ],
    medicalTeamList: [
      { name: 'Oliver Wilson', role: 'Medical Director', expertImg: images.ExpertsImage4 },
      { name: 'Ava Parker', role: 'Head Nurse', expertImg: images.ExpertsImage5 },
    ],
    medicalReviewBoardList: [
      { name: 'Ethan Davis', role: 'Medical Expert', expertImg: images.ExpertsImage6 },
      { name: 'Lily Anderson', role: 'Research Specialist', expertImg: images.ExpertsImage7 },
      { name: 'Henry Roberts', role: 'Senior Physician', expertImg: images.ExpertsImage8 },
      { name: 'Grace Thompson', role: 'Pharmaceutical Advisor', expertImg: images.ExpertsImage9 },
      { name: 'Daniel Wilson', role: 'Ethics Consultant', expertImg: images.ExpertsImage10 },
      { name: 'Mia Harris', role: 'Regulatory Analyst', expertImg: images.ExpertsImage11 },
      { name: 'Jacob Martin', role: 'Data Scientist', expertImg: images.ExpertsImage12 },
      { name: 'Sophia Evans', role: 'Clinical Researcher', expertImg: images.ExpertsImage13 },
    ],
    expertContributorsList: [
      { name: 'William Johnson', role: 'Medical Writer', expertImg: images.ExpertsImage2 },
      { name: 'Charlotte Thompson', role: 'Health Educator', expertImg: images.ExpertsImage3 },
      { name: 'James Roberts', role: 'Medical Illustrator', expertImg: images.ExpertsImage4 },
      { name: 'Avery Parker', role: 'Health Blogger', expertImg: images.ExpertsImage5 },
      { name: 'Sofia Davis', role: 'Nutrition Consultant', expertImg: images.ExpertsImage6 },
      { name: 'Benjamin Wilson', role: 'Fitness Trainer', expertImg: images.ExpertsImage7 },
      { name: 'Abigail Anderson', role: 'Wellness Coach', expertImg: images.ExpertsImage8 },
      { name: 'Elijah Thompson', role: 'Holistic Practitioner', expertImg: images.ExpertsImage10 },
    ],
    expertPanelList: [
      { name: 'Lucas Johnson', role: 'Panel Moderator', expertImg: images.ExpertsImage2 },
      { name: 'Mila Parker', role: 'Panelist', expertImg: images.ExpertsImage4 },
    ],
    corporateList: [
      { name: 'Gabriel Davis', role: 'Corporate Communications Manager', expertImg: images.ExpertsImage12 },
      { name: 'Victoria Wilson', role: 'Corporate Social Responsibility Officer', expertImg: images.ExpertsImage13 },
      { name: 'Christopher Anderson', role: 'Human Resources Director', expertImg: images.ExpertsImage11 },
    ],
    engineeringList: [
      { name: 'Leo Thompson', role: 'Lead Engineer', expertImg: images.ExpertsImage10 },
      { name: 'Scarlett Roberts', role: 'Software Developer', expertImg: images.ExpertsImage9 },
    ],
    marketingAndCommercialList: [
      { name: 'Jack Johnson', role: 'Marketing Manager', expertImg: images.ExpertsImage7 },
      { name: 'Aria Davis', role: 'Digital Advertising Specialist', expertImg: images.ExpertsImage8 },
      { name: 'Caleb Anderson', role: 'Sales Representative', expertImg: images.ExpertsImage6 },
      { name: 'Eva Parker', role: 'Market Research Analyst', expertImg: images.ExpertsImage5 },
      { name: 'Owen Wilson', role: 'Brand Ambassador', expertImg: images.ExpertsImage4 },
      { name: 'Stella Thompson', role: 'Public Relations Coordinator', expertImg: images.ExpertsImage3 },
    ],
    productAndDesignList: [
      { name: 'Noah Roberts', role: 'Product Manager', expertImg: images.ExpertsImage2 },
      { name: 'Luna Anderson', role: 'UX/UI Designer', expertImg: images.ExpertsImage1 },
    ],
  };

  return (
    <div className='about'>
      <div className='aboutus'> 
        <Container className="mt-5">
          <div className='aboutus-about'>
            <Row className='aboutus-headinggroup p-5'>
              <h1 className='aboutus-heading1'>About {webTitle}</h1>
            </Row>
            <Row className='aboutus-row'>
              <Col className='abotus-col' xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
                <h1>Our Mission</h1>
                <p className='about-us-paragraph'>
                  At {webTitle}, we're dedicated to helping you achieve your health and wellness goals through personalized meal and workout plans. Our mission is to simplify the journey towards a healthier lifestyle by providing you with customized tools and guidance. We believe that everyone deserves access to delicious meals and effective workouts that fit their unique needs. Join us and let's make healthy living enjoyable and accessible for all.
                </p>
              </Col>
              <Col className='abotus-col' xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                <img src={images.AboutUsImage1} alt='aboutusimage1' className='aboutus-image'></img>
              </Col>
            </Row>
            <Row className='aboutus-row'>
              <Col className='abotus-col mt-3' lg={12}>
                <h1 className='aboutus-heading1'>Our Story</h1>
              </Col>
            </Row>
            <Row className='aboutus-row mt-5'>
              <Col className='workout-workout-col ' lg={6}>
                {['16x9'].map((ratio) => (
                    <Ratio key={ratio} aspectRatio={ratio}>
                        <iframe src="https://www.youtube.com/embed/BIv9054dBBI?si=iYkGEfNEsMUVdPQi" title="YouTube video" allowFullScreen></iframe>
                    </Ratio>
                ))}
              </Col>
              <Col className='abotus-col' lg={6}>
                <p className='about-us-paragraph'>
                  {webTitle} was born from a shared passion for health and wellness. Faced with the challenges of managing diet and fitness, our founders, Sarah and James, envisioned a platform that would simplify the process. They assembled a team of experts and developed a comprehensive solution that combines cutting-edge technology with personalized plans. Since our launch, we've helped thousands of individuals transform their lives and built a vibrant community. Join us today and embark on a transformative experience with {webTitle}.
                </p>
              </Col>
            </Row>
          </div>

          <div className='aboutus-expert'>
            <Row className='aboutus-expert-headinggroup py-4'>
              <h1 className='aboutus-expert-heading1'>Meet Our Team</h1>
            </Row>
            <Row className='aboutus-expert-row' id="aboutus-expert-category">
              <Col className='aboutus-expert-category' lg={8}>
                <ul className="ordered-list">
                  <li><a href="#leadership">Leadership</a><span className="separator">|</span></li>
                  <li><a href="#medical">Medical</a><span className="separator">|</span></li>
                  <li><a href="#medicalrb">Medical review board</a><span className="separator">|</span></li>
                  <li><a href="#expertcontributors">Expert contributors</a><span className="separator">|</span></li>
                  <li><a href="#expertpane">Expert panel</a><span className="separator">|</span></li>
                  <li><a href="#conporate">Corporate</a><span className="separator">|</span></li>
                  <li><a href="#engineering">Engineering</a><span className="separator">|</span></li>
                  <li><a href="#marketing">Marketing &amp; commercial</a><span className="separator">|</span></li>
                  <li><a href="#product">Product &amp; Design</a><span className="separator">|</span></li>
                  <li><a href="#moderators">Moderators</a></li>
                </ul>
              </Col>
              <Col className='d-grid d-lg-flex justify-content-end' lg={4}>
                <button className='workout-backtotopbtn' onClick={handleGoToExpertCategory}>Back To Top</button>
              </Col>
            </Row>
            <Row className='hiring-button my-5'>
              <a href="#email">We are hiring!</a>
            </Row>
            <Row>
              <Col className='aboutus-expert-paragraph' lg={8}>
                <p className='aboutus-expert-paragraph1'>
                Empowering people everywhere to revolutionize their health requires a team of dedicated professionals. Our team members come from all over the world, and together we hold a broad range of knowledge and expertise that makes this company unique.
                </p>
                <p className='aboutus-expert-paragraph2'>
                Our team comprises all kinds of skill sets and professions, from doctors, dietitians and nurses to journalists, developers, school teachers and cookbook authors. We create the content on our site. Despite our different backgrounds, we all have one thing in common: We all want to create a brighter future for millions of people — wherever they live and whatever their means.
                </p>
              </Col>
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='leadership'>
              <h1 className='aboutus-expert-heading mb-5'>Leadership</h1>
              {expertList.leadershipList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='medical'>
              <h1 className='aboutus-expert-heading mb-5'>Medical Team</h1>
              {expertList.medicalTeamList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='medicalrb'>
              <h1 className='aboutus-expert-heading mb-5'>Medical Review Board</h1>
              {expertList.medicalReviewBoardList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='expertcontributors'>
              <h1 className='aboutus-expert-heading mb-5'>Expert Contributors</h1>
              {expertList.expertContributorsList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='expertpanel'>
              <h1 className='aboutus-expert-heading mb-5'>Expert Panel</h1>
              {expertList.expertPanelList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='conporate'>
              <h1 className='aboutus-expert-heading mb-5'>Conporate</h1>
              {expertList.corporateList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='engineering'>
              <h1 className='aboutus-expert-heading mb-5'>Engineering</h1>
              {expertList.engineeringList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='marketing'>
              <h1 className='aboutus-expert-heading mb-5'>Marketing &amp; commercial</h1>
              {expertList.marketingAndCommercialList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className='aboutus-expert-leadership my-5' id='product'>
              <h1 className='aboutus-expert-heading mb-5'>Product &amp; Design</h1>
              {expertList.productAndDesignList.map((experts, index) => (
                <Col className='aboutus-expert-col' xs={6} lg={3}>
                  <Row className="aboutus-expert-expertimage">
                    <div className="aboutus-image-container">
                      <img src={experts.expertImg} alt="" className="rounded-circle aboutus-expert-image" />
                    </div>
                  </Row>
                  <Row className='aboutus-expert-expertinfo'>
                    <h1>{experts.name}</h1>
                    <h3>{experts.role}</h3>
                  </Row>
                </Col>
              ))}
            </Row>

          </div>

          <div className='workwithus'>
            <h1 className='workwithus-heading'>Work With Us</h1>
            <Row className='joinus-paragraph' >
              <Col lg={8}>
                <p className='mb-4'>
                  Do you want to join the fast-growing Team {webTitle}? We are always looking for highly talented and driven individuals who can help our purpose - empowering people everywhere to revolutionize their health.
                </p>
                <p className='mb-4'>
                  If you live close to our main office in Stockholm, Sweden, that is a big bonus. Also, if you’re extremely talented and passionate about low carb, and living in the US, UK, Canada (or anywhere, really) we also may want to talk to you about how we can work together, for example as a writer or low-carb recipe creator.
                </p>
                <p className='mb-4'>
                  <a href='#email'>Learn more about our open positions on our careers page</a> 
                </p>
                <p className='mb-4'>
                  Feel free to e-mail us at jobs@{webTitle}.com, include your resume and ideas for how you could help us improve.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>   
    </div>
  );
};

export default About;

