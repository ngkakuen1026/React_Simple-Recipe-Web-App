import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Check} from 'react-bootstrap-icons';
import { PlusSquareFill, DashSquareFill } from 'react-bootstrap-icons';

const Pricing = () => {

    //answer expand
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleQuestionClick = (index) => {
      if (expandedIndex === index) {
        setExpandedIndex(null);
      } else {
        setExpandedIndex(index);
      }
    };
    
    //questions and answer array
    const questions = [
        {
          question: "How much does the membership cost?",
          answer:
            "The first 30 days are free when you sign up. Then it costs US$14.99 per month or US$119 per year (equivalent to three months free). If you cancel your membership within the first 30 days, you pay nothing.",
        },
        {
          question: "Is this a one-time payment or will it renew automatically?",
          answer: "Your membership is a subscription which will automatically renew until you cancel it.",
        },
        {
          question: "Can I try it without entering my payment info?",
          answer:
            "No, unfortunately not. We don’t accept advertising money, so we are supported by our members. The premium content is created and maintained by our hard-working team. They make the programs, videos, community, recipes, app, and site as trustworthy, simple, and inspiring to use as possible. There is no charge if you cancel within the trial period. If you wish to keep your membership after your free trial, your billing information is stored so that the account can convert with no service interruption.",
        },
        {
          question: "What benefits do I get with the membership?",
          answer: "With the membership, you get access to exclusive premium content, personalized programs, a supportive community, and many other resources to help you achieve your goals.",
        },
        {
          question: "How do I cancel my membership?",
          answer: "To cancel your membership, you can go to your account settings and follow the cancellation instructions. Alternatively, you can reach out to our customer support team for assistance.",
        },
        {
          question: "Are there any discounts available?",
          answer: "We occasionally run promotions and offer discounts to new and existing members. Keep an eye out for any special offers!",
        },
        {
          question: "Can I upgrade or downgrade my membership plan?",
          answer: "Yes, you can upgrade or downgrade your membership plan at any time. Simply go to your account settings and select the desired plan.",
        },
        {
          question: "How often are new programs and content added?",
          answer: "We regularly update our programs and content to provide fresh and valuable resources for our members. New programs and content are added on a monthly basis.",
        },
        {
          question: "Is the membership accessible on mobile devices?",
          answer: "Yes, our membership is accessible on mobile devices. We have a mobile app available for both iOS and Android platforms, allowing you to access the content and features on the go.",
        },
        {
          question: "Can I share my membership with others?",
          answer: "No, your membership is intended for individual use and is non-transferable. Sharing your membership with others is a violation of our terms and conditions.",
        },
    ];
    
    return ( 
        <div className='pricing'>
            <div className='pricing-card'>
                <Container className="my-5 fluid bg">
                    <Row className='p-5'>
                        <h1 className="mb-4 pricing-heading1">Choose Your Pricing Plan</h1>
                        <h2 className='mb-4 pricing-heading2'>All plans FREE and REFUNDABLE for the first 30 days</h2>
                    </Row>
                    <Row className='pricinglist'>
                        <Col className="pricing-card-col my-3 d-flex justify-content-center" xl={4} lg={6} md={6} xs={12}>
                            <Card style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Card.Title><h3 className='pricing-heading3'>Starter Wellness</h3></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted pricing-subheading p-1">Get started on your wellness journey with meal and workout consultancy</Card.Subtitle>
                                    <Card.Text><h1 className='price'>$60<span className="small-text" style={{ fontSize: '1rem' }}>.75</span></h1></Card.Text>
                                    <Card.Text className='pricing-date'>per month.</Card.Text>
                                    <Card.Text><button className='pricing-button'>Get Started</button></Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Everything in Community, plus:</Card.Subtitle>
                                    <Card.Text><Check color="black"/> Personalized Diet Plan</Card.Text>
                                    <Card.Text><Check color="black"/> Exercise Recommendations</Card.Text>
                                    <Card.Text><Check color="black"/> Nutritional Guidance</Card.Text>
                                    <Card.Text><Check color="black"/> Weekly Check-Ins</Card.Text>
                                    <Card.Text><Check color="black"/> Email & Online Support</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="pricing-card-col my-3 d-flex justify-content-center" xl={4} lg={6} md={6} xs={12}>
                            <Card style={{ width: '30rem'}}>
                                <Card.Body>
                                    <Card.Title><h3 className='pricing-heading3'>Fit and Balanced</h3></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted pricing-subheading">Take your fitness to the next level with advanced meal and workout</Card.Subtitle>
                                    <Card.Text><h1 className='price'>$150<span className="small-text" style={{ fontSize: '1rem' }}>.00</span></h1></Card.Text>
                                    <Card.Text className='pricing-date'>per month.</Card.Text>
                                    <Card.Text><button className='pricing-button'>Get Started</button></Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Everything in the Basic Package, plus:</Card.Subtitle>
                                    <Card.Text><Check color="black"/> Recipe Collection</Card.Text>
                                    <Card.Text><Check color="black"/> Goal Setting and Monitoring</Card.Text>
                                    <Card.Text><Check color="black"/> Supplement Recommendations</Card.Text>
                                    <Card.Text><Check color="black"/> Weekly Check-Ins</Card.Text>
                                    <Card.Text><Check color="black"/> Email & Online Support</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="pricing-card-col my-3 d-flex justify-content-center" xl={4} lg={6} md={6} xs={12}>
                            <Card style={{ width: '30rem'}}>
                                <Card.Body>
                                    <Card.Title><h3 className='pricing-heading3'>Ultimate Vitality</h3></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted pricing-subheading">Experience the ultimate vitality with personalized consultations and advanced fitness training</Card.Subtitle>
                                    <Card.Text><h1 className='price'>Let's Talk</h1></Card.Text>
                                    <Card.Text className='pricing-date'>Depends on the need</Card.Text>
                                    <Card.Text><button className='pricing-button-special'>Contact Sales</button></Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Everything in the Standard Package, plus:</Card.Subtitle>
                                    <Card.Text><Check color="black"/> One-on-One Consultations</Card.Text>
                                    <Card.Text><Check color="black"/> Advanced Fitness Training</Card.Text>
                                    <Card.Text><Check color="black"/> Mindfulness and Stress Management</Card.Text>
                                    <Card.Text><Check color="black"/> Weekly Check-Ins</Card.Text>
                                    <Card.Text><Check color="black"/> Email & Online Support</Card.Text>
                                    <Card.Text><Check color="black"/> Mindfulness and Stress Management Techniques</Card.Text>
                                    <Card.Text><Check color="black"/> Weekly Group Coaching Sessions</Card.Text>
                                    <Card.Text><Check color="black"/> Lifetime Membership to Program Materials</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="qna pb-5">
                <Container>
                    <h1 className="qna-heading1">Frequently asked questions</h1>
                    {questions.map((question, index) => (
                        <Row key={index}>
                        <Col>
                            <div className="question" onClick={() => handleQuestionClick(index)}>
                            <div className="question-text">
                                <span className="question-mark">
                                {expandedIndex === index ? <DashSquareFill /> : <PlusSquareFill />}
                                </span>
                                <span className="question-content">{question.question}</span>
                            </div>
                            {expandedIndex === index && <p className="answer">{question.answer}</p>}
                            </div>
                        </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    );
}
 
export default Pricing;