import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import * as images from './images';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ChatHeartFill } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { PeopleFill } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Home2 = () => {

  //For better body part
  const betterBodySteps = [
    {
      image: images.EatingDietImage,
      title: 'Keep a healthy eating diet',
      description: 'A healthy eating diet is vital for overall well-being. Choosing nutritious foods and avoiding processed options boosts immunity, prevents diseases, and promotes energy levels. Prioritizing fruits, vegetables, whole grains, lean proteins, and healthy fats leads to a healthier and more fulfilling life.',
    },
    {
      image: images.RunningImage,
      title: 'Develop a Workout Routine',
      description: 'A workout routine is vital for a strong and healthy body. Regular exercise improves cardiovascular health, strength, and mental well-being. Whether it\'s gym workouts, running, or yoga, staying active boosts energy levels and overall fitness. A well-planned routine brings physical and mental benefits, supporting an active lifestyle.',
    },
    {
      image: images.ConfinenceImage,
      title: 'Be Confident in Yourself',
      description: 'Our app helps you visualize your journey to better health with recipes based on your body situation. Follow along through our expert-led practical guides about anything and everything!',
    }
  ];

  //For expert part
  const expertsList = [
    {name: "David Johnson", role: "Founder, CEO & Nutritionist", expertImg: images.ExpertsImage1},
    {name: "Jack Phillips", role: "Co-founder, Personal Trainer & Psychologist", expertImg: images.ExpertsImage2},
    {name: "Emily Waston", role: "Co-founder & Nutritionist", expertImg: images.ExpertsImage3}
  ];

  //For card part
  const cardsList = [
    {cardImg: images.CardImage1, cardTitle: "Chicken Avocado Sandwich", cardText: "Choose the food you like, we'll make the recipe for you", cardHeading: "Discover the food that works for you", cardParagraph: "Use our recipes, meal plans, and smart shopping list, or learn to put together easy meals from restaurants or takeout. Wherever you eat, we’ll help you find the best options."},
    {cardImg: images.CardImage2, cardTitle: "How to manage?", cardText: "By Franziiska Spritizler, RD, CDE", cardHeading: "Knowledge is power", cardParagraph: "Learn about more than just food. Understand some basic nutrition science, and get helpful tips about forming new habits. Our courses, guides, and videos have it all."},
    {cardImg: images.CardImage3, cardTitle: "How was your day?", cardText: "External support in realtime", cardHeading: "Expert support is key", cardParagraph: "Questions and bumps in the road will pop up. Our community of members and experts are here with answers and inspiration. Find the support you need, and help others, too."}
  ]

  //For result part
  const personlist = [
    {name: "Candace", age: 41, pounds: 150, quote: "It's a way of life for me now", beforeImg: images.CandaceBeforeImage, afterImg: images.CandaceAfterImage},
    {name: "John", age: 32, pounds: 180, quote: "Health is wealth", beforeImg: images.JohnBeforeImage, afterImg: images.JohnAfterImage},
    {name: "Emma", age: 27, pounds: 135, quote: "Stay fit, stay strong", beforeImg: images.EmmaBeforeImage, afterImg: images.EmmaAfterImage},
    {name: "Michael", age: 50, pounds: 200, quote: "MealAndMotion save my life", beforeImg: images.MichaelBeforeImage, afterImg: images.MichaelAfterImage},
    {name: "Sophia", age: 38, pounds: 160, quote: "Fitness is my passion", beforeImg: images.SophiaBeforeImage, afterImg: images.SophiaAfterImage},
  ];
  

  //For before and after image slider of result part
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === personlist.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? personlist.length - 1 : prevIndex - 1));
  };

  return (
    <div className='Home2'>
      <Container>
        <Carousel fade>
          <Carousel.Item>
            <img src={images.CarouselImageBg1} alt="First slide" className="d-block w-100" />
            <Carousel.Caption>
              <h3 className="carousel-heading">Get yourself a personal meal plan or design it yourself</h3>
              <h4 className="carousel-subheading">A well-designed diet plan to help you lose weight</h4>
              <p className='carousel-p'><a href='recipe'> Click here to contact us </a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images.CarouselImageBg2} alt="Second slide" className="d-block w-100" />
            <Carousel.Caption>
              <h3 className="carousel-heading">Get yourself a personal trainer</h3>
              <h4 className="carousel-subheading">A well-designed exercise plan to help you lose weight</h4>
              <p className='carousel-p'><a href='recipe'> Click here to contact us </a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images.CarouselImageBg3} alt="Third slide" className="d-block w-100" />
            <Carousel.Caption>
              <h3 className="carousel-heading">Keep it up, Stay focused</h3>
              <h4 className="carousel-subheading">Losing weight is not easy and a long journey</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <div className='record'>
        <Container>
          <Row className='record-row p-3'>
            <Col className='record-col' lg={4}><ChatHeartFill size={30} color="red" /> Trusted by <b>70k+ active members</b></Col>
            <Col className='record-col' lg={4}><StarFill size={30} color="#FFC700" /> <b>4.7</b> out of 5 based on 9,300+ reviews</Col>
            <Col className='record-col' lg={4}><PeopleFill size={30} color="#7777F9" /> We've helped <b>2.2m+ people</b> improve their health</Col>
          </Row>
        </Container>
      </div>

      <div className='betterbody py-4'>
        <Container>
          <h2 className='betterbodyheading'>You deserve a better body</h2>
          <h3 className='betterbodyheading2'>How? Follow these steps</h3>
          {betterBodySteps.map((step, index) => (
            <Row className='betterbody-row justify-content-md-center' key={index}>
              <Col className='betterbody-col' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 1:2 }}>
                <img src={step.image} alt="" className='rounded-image' />
              </Col>
              <Col className='betterbody-col' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 2:1 }}>
                <h4 className='betterbody-heading4'>{step.title}</h4>
                <p>{step.description}</p>
              </Col>
            </Row>
          ))}
          <Row className='betterbody-row justify-content-md-center'>
            <a href="/">Get Started Now</a>
          </Row>
        </Container>
      </div>

      <div className='experts py-4'>
        <Container>
          <h2 className='expertsheading'>Meet the <b>Experts</b></h2>
          <Row className='experts-row'>
            <Col className='experts-col' lg ="6">
              <p>We aim to provide unbiased guidance rooted in evidence-based information, nutritionally-reviewed recipes that satisfy, and inspiring tools to help you reach your goals in a sustainable way.</p>
            </Col>
          </Row>
          <Row className='experts-row justify-content-md-center'>
            {expertsList.map((experts, index) => (
              <Col className='experts-col' xs lg ="3" key={index}>
                <Row className='expertimage'>
                  <img src={experts.expertImg} alt="" className='rounded-circle' />
                </Row>
                <Row className='expertinfo'>
                  <h1>{experts.name}</h1>
                  <h3>{experts.role}</h3>
                </Row>
              </Col>
            ))}
            <Col className='experts-col-a' xs lg ="3">
              <a href="/about">And More &gt;</a>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='expectation py-4'>
        <Container>
          <h2 className='expectheading1'>What to <b>Expect?</b></h2>
          <h2 className='expectheading2'><b>Guidance</b> at your fingertips</h2>
          {cardsList.map((card, index) => (
            <Row className='expectation-row justify-content-md-center m-3'>
              <Col className='expectation-col-card d-flex justify-content-end' xs lg="6" key={index}>
                <Card>
                <Card.Img variant="top" src={card.cardImg} />
                <Card.Body>
                  <Card.Title>{card.cardTitle}</Card.Title>
                  <Card.Text>
                    {card.cardText}
                  </Card.Text>
                </Card.Body>
                </Card>
              </Col>
            <Col className='expectation-col-text' xs lg="6">  
              <h4 className='expectation-heading'>{card.cardHeading}</h4>
              <p>{card.cardParagraph}</p>
            </Col>
            </Row>
          ))}
          <Row className='expectation-row justify-content-md-center mt-5'>
            <a href="/">Get Started Now</a>
          </Row>
        </Container>
      </div>

      <div className='realresult py-5'>
        <Container>
          <Row className='resultheading my-4'>
            <Col xs={6} className='resultheadingbox'>
              <h2 className='result-subheading'>600+ SUCCESS STORIES</h2>
              <h1 className='result-heading'>Real people. <b>Real results.</b></h1>
            </Col>
            <Col xs={6} className='resultbuttonbox'>
              <div className='circle-wrapper' onClick={prevSlide}>
                <ArrowLeftCircle />
              </div>
              <div className='circle-wrapper' onClick={nextSlide}>
                <ArrowRightCircle />
              </div>
            </Col>
          </Row>
          <Row className='resultslider'>
            <Row>
              <Col xs={12} md={6} className='resultimgbox'>
                <Carousel slide={false}>
                  <Carousel.Item>
                    <img src={personlist[activeIndex].beforeImg} alt='Before' className='' />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={personlist[activeIndex].afterImg} alt='After' className='' />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col xs={12} md={6} className='resultbox'>
                <div className='resulttext'>
                  <h2 className='resultquote'>"{personlist[activeIndex].quote}"</h2>
                  <p className='resultdetail'>{personlist[activeIndex].name}, {personlist[activeIndex].age}, lost {personlist[activeIndex].pounds} pounds</p>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home2;