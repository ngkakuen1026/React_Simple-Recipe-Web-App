import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as images from './images';

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBMI(bmiValue);

    let bmiMessage = '';
    if (bmiValue < 18.5) {
      bmiMessage = 'Underweight, Please review our Recipe Finder for your meal recommendication';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      bmiMessage = 'Normal weight, You can check our Recipe Finder and Workout recommendication and keep it up';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      bmiMessage = 'Overweight, Please check our recipe and workout plan';
    } else {
      bmiMessage = 'Obese, Contact us now!';
    }
    setMessage(bmiMessage);
  };

  return (
    <div className='bmi'>
      <div className='bmi-calculation'>
        <Container className="mt-5 fluid bg">         
          <div className='bmi-calculation-calculator'>
            <Row className='bmi-heading-group p-5'>
              <h1 className="mb-4 bmi-heading1">Calculate Your BMI</h1>
              <h2 className='mb-4 bmi-heading2'>Calculate your BMI by entering your weight and height</h2>
            </Row>

            <Row className="bmi-calculator-row">
              <Col className="bmi-input-col mb-3" lg={6}>
                <h2 className="bmi-table-heading mb-4">Enter your information:</h2>
                <Row className="bmi-calculator-row mb-3" lg={12}>
                  <label className="bmi-form-label">Weight (kg):</label>
                  <input type="number" className="bmi-form-control" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight in kilograms" />
                </Row>
                <Row className="bmi-calculator-row mb-3" lg={12}>
                  <label className="bmi-form-label">Height (cm):</label>
                  <input type="number" className="bmi-form-control" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height in centimeters" />
                </Row>
                <Row className="bmi-calculator-row mb-3">
                  <Col className="bmi-calculator-col mb-3">
                    <button className="bmi-calculate-button" onClick={calculateBMI}>Calculate BMI</button>
                  </Col>
                </Row>
                <Row className="bmi-calculator-row mb-3">
                  <ul className='bmi-explanation px-4'>
                    <li>Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</li>
                    <li>Healthy weight for the height: 48.6 kg - 65.6 kg</li>
                    <li>Lose 6.4 kg to reach a BMI of 25 kg/m2.</li>
                    <li>BMI Prime: 1.1</li>
                    <li>Index: 16.9 kg/m3</li>
                  </ul>
                </Row>
              </Col>

              <Col className="bmi-table-col mb-3" lg={6}>
                <h2 className="bmi-table-heading mb-4">BMI table for adults</h2>
                <table className='bmi-table-adult'>
                  <tr>
                    <th>Classification</th>
                    <th>BMI range (kg/m²)</th>
                  </tr>
                  <tr>
                    <td>Severe Thinness</td>
                    <td>&lt; 16</td>
                  </tr>
                  <tr>
                    <td>Moderate Thinness</td>
                    <td>16 - 17</td>
                  </tr>
                  <tr>
                    <td>Mild Thinness</td>
                    <td>17 - 18.5</td>
                  </tr>
                  <tr>
                    <td>Normal</td>
                    <td>18.5 - 25</td>
                  </tr>
                  <tr>
                    <td>Overweight</td>
                    <td>25 - 30</td>
                  </tr>
                  <tr>
                    <td>Obese Class I</td>
                    <td>30 - 35</td>
                  </tr>
                  <tr>
                    <td>Obese Class II</td>
                    <td>35 - 40</td>
                  </tr>
                  <tr>
                    <td>Obese Class III</td>
                    <td>&gt; 40</td>
                  </tr>
                </table>
              </Col>
            </Row>

            <Row className="bmi-calculator-row">
              <Col className='bmi-calculator-result' lg={12}>
                {bmi && message && (
                    <div className="result-container">
                      <p className="result-result">Your BMI is <b>{bmi}</b> </p>
                      <p className="result-result-calculation">You are {message}</p>
                    </div>
                  )}
              </Col>
            </Row>
          </div>

          <div className='bmi-introduction my-3'>
            <Row className='bmi-introduction-row'>
              <Col className='bmi-introduction-col'>
                <h1 className="bmi-table-heading1 mb-4">BMI Introduction</h1>
                <p className="bmi-description">BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</p>
              </Col>
            </Row>
          </div>

          <div className='bmi-chart-adults my-3'>
            <Row className='bmi-chart-adults-row'>
              <Col className='bmi-chart-adults-col' lg={12}>
                <h1 className="bmi-table-heading1 mb-4">BMI chart for adults</h1>
                <p className="bmi-description">This is a graph of BMI categories based on the World Health Organization data. The dashed lines represent subdivisions within a major categorization.</p>
              </Col>
              <Col className='bmi-chart' lg={12}>
                <img src={images.BMIChart} alt='BMI-chart' className='bmi-chart'></img>
              </Col>
            </Row>
          </div>

          <div className='bmi-risks my-3'>
            <Row className='bmi-risks-row'>
              <Col className='bmi-risks-col' lg={12}>
                <h1 className="bmi-table-heading1 mb-4">Risks associated with being overweight</h1>
                <p className="bmi-description">Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>
              </Col>
              <Col className='bmi-risks-col' lg={12}>
                <ul className='bmi-risk-explanation px-4'>
                  <li>High blood pressure</li>
                  <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
                  <li>Type II diabetes</li>
                  <li>Coronary heart disease</li>
                  <li>Stroke</li>
                  <li>Gallbladder disease</li>
                  <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
                  <li>Sleep apnea and breathing problems</li>
                  <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
                  <li>Low quality of life</li>
                  <li>Mental illnesses such as clinical depression, anxiety, and others</li>
                  <li>Body pains and difficulty with certain physical functions</li>
                  <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                </ul>
              </Col>
              <Col className='bmi-risks-col' lg={12}>
                <p className="bmi-description">As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.</p>
              </Col>
            </Row>
          </div>

          <div className='bmi-risks my-3'>
            <Row className='bmi-risks-row'>
              <Col className='bmi-risks-col' lg={12}>
                <h1 className="bmi-table-heading1 mb-4">Risks associated with being underweight</h1>
                <p className="bmi-description">Being underweight has its own associated risks, listed below:</p>
              </Col>
              <Col className='bmi-risks-col' lg={12}>
                <ul className='bmi-risk-explanation px-4'>
                  <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
                  <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
                  <li>A decrease in immune function</li>
                  <li>Growth and development issues, particularly in children and teenagers</li>
                  <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
                  <li>Potential complications as a result of surgery</li>
                  <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                </ul>
              </Col>
              <Col className='bmi-risks-col' lg={12}>
                <p className="bmi-description">In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.</p>
              </Col>
            </Row>
          </div>

          <div className='bmi-prime pb-5'>
            <Row className='bmi-prime-row'>
              <Col className='bmi-prime-col' lg={12}>
                <h1 className="bmi-table-heading1 mb-4">BMI Prime</h1>
                <p className="bmi-description">BMI prime is the ratio of a person's measured BMI to the upper limit of BMI that is considered "normal," by institutions such as the WHO and the CDC. Though it may differ in some countries, such as those in Asia, this upper limit, which will be referred to as BMIupper is 25 kg/m2.</p>
              </Col>
              <Col>
                <p className='bmi-description'>The BMI prime formula is:</p>
                <p class="bmi-prime-formula">
                  <table>
                    <tr>
                      <td>BMI prime =</td>
                      <td>
                        <table class="bmi-table">
                          <tbody>
                            <tr>
                              <td>BMI</td>
                            </tr>
                            <tr>
                              <td class="bmi-divider"></td>
                            </tr>
                            <tr>
                              <td class="bmi-value">25</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </p>
              </Col>
              <Col className='bmi-prime-col' lg={12}>
                <ul className='bmi-risk-explanation'>
                  <li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
                  <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
                  <li>A decrease in immune function</li>
                  <li>Growth and development issues, particularly in children and teenagers</li>
                  <li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
                  <li>Potential complications as a result of surgery</li>
                  <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                </ul>
              </Col>
              <Col className='bmi-prime-col' lg={12}>
                <p className="bmi-description">Since BMI prime is a ratio of two BMI values, BMI prime is a dimensionless value. A person who has a BMI prime less than 0.74 is classified as underweight; from 0.74 to 1 is classified as normal; greater than 1 is classified as overweight; and greater than 1.2 is classified as obese. The table below shows a person's weight classification based on their BMI prime:</p>
              </Col>
              <Col className='bmi-prime-row my-3' lg={8}>
                <table className='bmi-table-adult'>
                  <thead>
                    <tr>
                      <th>Classification</th>
                      <th>BMI</th>
                      <th>BMI Prime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Severe Thinness</td>
                      <td>&lt; 16</td>
                      <td>&lt; 0.64</td>
                    </tr>
                    <tr>
                      <td>Moderate Thinness</td>
                      <td>16 - 17</td>
                      <td>0.64 - 0.68</td>
                    </tr>
                    <tr>
                      <td>Mild Thinness</td>
                      <td>17 - 18.5</td>
                      <td>0.68 - 0.74</td>
                    </tr>
                    <tr>
                      <td>Normal</td>
                      <td>18.5 - 25</td>
                      <td>0.74 - 1</td>
                    </tr>
                    <tr>
                      <td>Overweight</td>
                      <td>25 - 30</td>
                      <td>1 - 1.2</td>
                    </tr>
                    <tr>
                      <td>Obese Class I</td>
                      <td>30 - 35</td>
                      <td>1.2 - 1.4</td>
                    </tr>
                    <tr>
                      <td>Obese Class II</td>
                      <td>35 - 40</td>
                      <td>1.4 - 1.6</td>
                    </tr>
                    <tr>
                      <td>Obese Class III</td>
                      <td>&gt; 40</td>
                      <td>&gt; 1.6</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col className='bmi-prime-col my-3' lg={12}>
                <p className="bmi-description">BMI prime allows us to make a quick assessment of how much a person's BMI differs from the upper limit of BMI that is considered normal. It also allows for comparisons between groups of people who have different upper BMI limits.</p>
              </Col>
            </Row>
          </div>

        </Container>
      </div>  
    </div>
  );
};

export default Bmi;

