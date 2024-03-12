import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

const Workout = () => {
    //back to top button
    const handleGoToWorkoutCategory = () => {
        const workoutCategoryElement = document.getElementById('workout-category');
        workoutCategoryElement.scrollIntoView({ behavior: 'smooth' });
    };

    //Workout arrays object
    const workoutList = {
        weightLosingList: [
            {
              videoUrl: 'https://www.youtube.com/embed/WTUruNwUMFI?si=yYZMNjNpeVGFwUL-',
              title: 'Aerobic Exercises',
              description: 'Get your heart pumping and boost your fitness with aerobic exercises. These dynamic activities like running, cycling, swimming, or dancing increase oxygen flow, strengthen your heart and lungs, and help you maintain a healthy weight. Incorporating regular aerobic exercises into your routine improves energy levels, reduces stress, and contributes to a healthier, happier you.',
            },
            {
              videoUrl: 'https://www.youtube.com/embed/a0Hrvh4RS3o?si=CVMmxr0C29iGFgR3',
              title: 'Jumping Rope',
              description: 'Jumping rope is a fun and effective exercise that improves cardiovascular fitness, coordination, and leg strength. It\'s a versatile workout that can be tailored to your fitness level and easily incorporated into your routine. Add jumping rope to your workouts for a dynamic and engaging cardio option with great results.',
            },
            {
              videoUrl: 'https://www.youtube.com/embed/b5e8QwnKAP0?si=JD33hlkSFW-Fe7_8',
              title: 'Push-Ups',
              description: 'Push-ups are a versatile and effective exercise that targets your chest, shoulders, triceps, and core muscles. They build upper body strength, improve posture, and enhance muscular endurance. With no equipment required, push-ups can be modified to suit different fitness levels and can be done anywhere. Add push-ups to your routine for a stronger, more defined upper body.',
            },
            {
              videoUrl: 'https://www.youtube.com/embed/j7rKKpwdXNE?si=-lHkN_OcMRBvivjX',
              title: 'Yoga',
              description: 'Yoga combines physical movement, breath control, and mindfulness for overall well-being. It improves flexibility, strength, and balance while reducing stress. With different styles and levels, yoga can be adapted to suit anyone. Regular practice enhances physical fitness, mental clarity, and self-awareness.',
            },
            {
              videoUrl: 'https://www.youtube.com/embed/irfw1gQ0foQ?si=2TghNPiV-HiPa86N',
              title: 'Squats',
              description: 'Squats are a highly effective exercise that targets your glutes, quads, hamstrings, and core. By incorporating squats into your routine, you can build lower body strength, improve muscle tone, and enhance overall fitness. With different variations available, squats offer versatility and can be tailored to your goals and fitness level.',
            }
        ],
        bodyBuildList: [
            {
                videoUrl: 'https://www.youtube.com/embed/4Y2ZdHCOXok?si=W32gGVDQYkUDwNJ_',
                title: 'Bench Press',
                description: 'The bench press is a fundamental upper body exercise that targets the chest, shoulders, and triceps. It involves lying on a flat bench, gripping a barbell with an overhand grip, and pressing the weight away from the chest. This exercise helps build strength and muscle mass in the chest muscles, contributing to a well-developed upper body. It is a popular exercise in bodybuilding and strength training routines, and variations like incline bench press and decline bench press can be used to target specific areas of the chest. Proper form and technique are essential to maximize the benefits and ensure safety during the bench press.'
            },
            {
                videoUrl: 'https://www.youtube.com/embed/EbOPpWi4L8s?si=kITjiyyxNiEgKQ-b',
                title: 'Squat',
                description: 'The squat is a compound exercise that targets multiple muscle groups, primarily the quadriceps, hamstrings, glutes, and core. It involves bending the knees and hips to lower the body into a squatting position and then driving through the heels to return to a standing position. Squats are a foundational exercise for building lower body strength, power, and overall functional fitness. They are highly versatile and can be performed with barbells, dumbbells, kettlebells, or bodyweight. Squats play a crucial role in enhancing athletic performance, improving lower body aesthetics, and promoting overall strength development. Proper form, including maintaining a neutral spine and engaging the core, is essential to prevent injury and maximize the benefits of the squat exercise.'
            },
            {
                videoUrl: 'https://www.youtube.com/embed/xcomIo8MWyc?si=dRkAS1LQENgO2P6I',
                title: 'Deadlifts',
                description: 'Deadlifts are a compound exercise that targets the muscles of the posterior chain, including the glutes, hamstrings, lower back, and traps. It involves lifting a barbell or dumbbells from the floor to a standing position using proper form and technique. Deadlifts are highly effective for building overall strength, developing a strong back, and improving functional movement patterns.'
            },
            {
                videoUrl: 'https://www.youtube.com/embed/kGooAJM3294?si=6noMGbFn2AJIxphv',
                title: 'Shoulder Press',
                description: 'The shoulder press, also known as the overhead press, is an exercise that primarily targets the shoulder muscles (deltoids) but also engages the triceps and upper back. It is performed by pressing a barbell or dumbbells overhead while standing or sitting. Shoulder presses are beneficial for developing shoulder strength, increasing overhead pressing power, and promoting balanced upper body development.'
            },
            {
                videoUrl: 'https://www.youtube.com/embed/qXrTDQG1oUQ?si=EeaSM0xqvXcwpsY9',
                title: 'Bent-Over Row',
                description: 'Bent-over rows are an excellent exercise for targeting the back muscles, including the lats, rhomboids, and rear deltoids. It involves bending forward at the hips, keeping the back straight, and pulling a barbell or dumbbells towards the chest. Bent-over rows help strengthen the back, improve posture, and enhance pulling movements, making them a valuable addition to any strength or bodybuilding routine.'
            },
            {
                videoUrl: 'https://www.youtube.com/embed/B6rGDcfyPto?si=qoFKFwCi_MxMqqGT',
                title: 'Leg Press',
                description: 'The leg press is a machine-based exercise that primarily targets the quadriceps, hamstrings, and glutes. It involves pushing a weighted platform away from the body using the legs. Leg presses are effective for building lower body strength, developing muscular endurance, and improving overall leg power. They provide a safer alternative to squats for individuals with certain mobility limitations or lower back issues.'
            },
        ],
        strengthList: [
            {
                videoUrl: 'https://www.youtube.com/embed/_oyxCn2iSjU?si=P8FbBo6_350HVUMI',
                title: 'Romanian Deadlifts',
                description: 'Romanian deadlifts are a variation of the traditional deadlift that primarily targets the hamstrings and glutes while also engaging the lower back and core muscles. To perform Romanian deadlifts, start with a barbell or dumbbells in front of your thighs. Keeping your back straight, hinge at the hips and lower the weight down your legs while slightly bending your knees. Lower the weight until you feel a stretch in your hamstrings, then push your hips forward to return to the starting position. Romanian deadlifts help strengthen the posterior chain, improve hip mobility, and enhance hamstring and glute development.'
            },
            {
                videoUrl: 'https://www.youtube.com/embed/wkD8rjkodUI?si=7rCU65zmKMUqwDjv',
                title: 'Russian Twists',
                description: 'Russian twists are an exercise that targets the oblique muscles and core. To perform Russian twists, sit on the ground with your knees bent and feet flat on the floor. Lean back slightly while maintaining a straight back and engage your core. Hold a weight or medicine ball in front of your chest and twist your torso to one side, touching the weight to the ground beside you. Return to the center and twist to the other side. Russian twists help strengthen the obliques, improve rotational stability, and enhance overall core strength.'
            },
            {
                videoUrl: 'https://www.youtube.com/embed/sSESeQAir2M?si=IL9jsl6yNkPx6U3k',
                title: 'Kettlebell Swings',
                description: 'Kettlebell swings are a dynamic exercise that engages the hips, glutes, and core. To perform kettlebell swings, start with a kettlebell between your legs, standing with your feet shoulder-width apart. Hinge at the hips, bend your knees slightly, and swing the kettlebell back between your legs. Explosively drive your hips forward, using the momentum to swing the kettlebell up to chest height or slightly above, while keeping your arms straight. Control the swing back down between your legs and repeat. Kettlebell swings help develop explosive power, strengthen the posterior chain, and improve hip and glute activation.'
            },
        ]
    }

    return ( 
        <div className='workout'>
            <Container className="mt-5 fluid bg">
                <Row className='p-5'>
                    <h1 className="mb-4 workout-heading1">Workout Recommendation</h1>
                    <h2 className='mb-4 workout-heading2'>Achieve your desire goal with different types of workout</h2>
                </Row>

                <Row className='workout-category-row mb-4' id='workout-category'>
                    <Col className='workout-category' lg={8}>
                        <ul className="workout-ordered-list">
                        <li><a href="#losingweight">Weight-Loss</a><span className="workout-separator">|</span></li>
                        <li><a href="#bodybuild">Body Build</a><span className="workout-separator">|</span></li>
                        <li><a href="#strength">Strength</a></li>
                        </ul>
                    </Col>
                    <Col className='d-grid d-lg-flex justify-content-end' lg={4}>
                        <button className='workout-backtotopbtn' onClick={handleGoToWorkoutCategory}>Back To Top</button>
                    </Col>
                </Row>

                <div id='losing-weight' className='py-5'>
                    <h2 className='workout-workout-heading'>The following workout is for losing weight:</h2>
                    {workoutList.weightLosingList.map((weightLosingWorkouts, index) => (
                        <Row className='workout-workout-row mt-5' key={index}>
                            <Col className='workout-workout-col ' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 1:2 }}>
                                {['16x9'].map((ratio) => (
                                <Ratio key={ratio} aspectRatio={ratio}>
                                    <iframe src={weightLosingWorkouts.videoUrl} title="YouTube video" allowFullScreen></iframe>
                                </Ratio>
                                ))}
                            </Col>
                            <Col className='workout-workout-col ' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 2:1 }}>
                                <h1 className='workout-workout-heading my-4'>{weightLosingWorkouts.title}</h1>
                                <p className='workout-workout-paragraph'>{weightLosingWorkouts.description}</p>
                            </Col>
                        </Row>
                    ))}
                </div>
                

                <div id='bodybuild' className='py-5'>
                    <h2 className='workout-workout-heading'>The following workout is for body build:</h2>
                    {workoutList.bodyBuildList.map((bodyBuildWorkouts, index) => (
                        <Row className='workout-workout-row mt-5' key={index}>
                            <Col className='workout-workout-col ' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 1:2 }}>
                                {['16x9'].map((ratio) => (
                                <Ratio key={ratio} aspectRatio={ratio}>
                                    <iframe src={bodyBuildWorkouts.videoUrl} title="YouTube video" allowFullScreen></iframe>
                                </Ratio>
                                ))}
                            </Col>
                            <Col className='workout-workout-col ' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 2:1 }}>
                                <h1 className='workout-workout-heading my-4'>{bodyBuildWorkouts.title}</h1>
                                <p className='workout-workout-paragraph'>{bodyBuildWorkouts.description}</p>
                            </Col>
                        </Row>
                    ))}
                </div>

                <div id='strength' className='py-5'>
                    <h2 className='workout-workout-heading'>The following workout is for strengthen body:</h2>
                    {workoutList.strengthList.map((strengthWorkouts, index) => (
                        <Row className='workout-workout-row mt-5' key={index}>
                            <Col className='workout-workout-col ' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 1:2 }}>
                                {['16x9'].map((ratio) => (
                                <Ratio key={ratio} aspectRatio={ratio}>
                                    <iframe src={strengthWorkouts.videoUrl} title="YouTube video" allowFullScreen></iframe>
                                </Ratio>
                                ))}
                            </Col>
                            <Col className='workout-workout-col ' xs={{ span: 12, order: index % 2 === 0? 1:2 }} lg={{ span: 6, order: index % 2 === 0? 2:1 }}>
                                <h1 className='workout-workout-heading my-4'>{strengthWorkouts.title}</h1>
                                <p className='workout-workout-paragraph'>{strengthWorkouts.description}</p>
                            </Col>
                        </Row>
                    ))}
                </div>
            </Container>
        </div>
    );
}
 

export default Workout;