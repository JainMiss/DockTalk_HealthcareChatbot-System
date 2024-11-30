import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
`;

// Styled components for layout and design
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #50c4f7, #0061f2); /* Updated gradient */
  color: #fff;
  padding: 0 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 120px 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-in-out;
`;

const HeaderTitle = styled.h1`
  font-size: 70px; /* Increased font size */
  font-weight: bold;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SubTitle = styled.p`
  font-size: 26px; /* Increased font size */
  font-weight: 300;
  margin: 15px 0 0;
  color: #e0f7fa;
`;

const CardsSection = styled.section`
  padding: 100px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 40px; /* Larger font size */
  margin-bottom: 30px;
  color: #fff;
  animation: ${fadeIn} 1s ease-in-out;
  letter-spacing: 1.5px;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  background: #fff;
  color: #444;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  width: 350px; /* Increased width */
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 140px;
  margin-bottom: 20px;
  animation: ${bounce} 2s infinite;
`;

const CardTitle = styled.h3`
  font-size: 24px; /* Increased font size */
  color: #0061f2;
  margin-bottom: 15px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 18px;
  color: #555;
`;

const CTASection = styled.section`
  text-align: center;
  padding: 100px 20px;
  background: #0061f2;
  border-radius: 25px;
  margin-top: 60px;
`;

const CTAButton = styled.button`
  background: #50c4f7;
  color: white;
  padding: 18px 40px;
  font-size: 22px; /* Larger font size */
  font-weight: bold;
  border: none;
  border-radius: 7px;
  margin-top: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: #00bcd4;
    transform: translateY(-5px);
  }
`;

const Home = () => {
  return (
    <>
      <div className="flex w-screen h-screen flex-col">
        <Navbar />
        <Container>
          {/* Header Section */}
          <Header>
            <HeaderTitle>Your Health, Simplified</HeaderTitle>
            <SubTitle>Transform your healthcare experience with DocTalk.</SubTitle>
          </Header>

          {/* Cards Section */}
          <CardsSection>
            <SectionTitle>Explore Our Features</SectionTitle>
            <CardsWrapper>
              <Card>
                <CardImage
                  src="https://media.istockphoto.com/id/1467868199/photo/3d-render-caucasian-young-man-cartoon-character-nurse-wears-blue-shirt-looks-at-camera-shows.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ycQG6-F1EBDC-BdvkoWdql81qyMiGyxlpUiGOhjWm4="
                  alt="Doctor"
                />
                <CardTitle>Instant Consultations</CardTitle>
                <CardDescription>
                  Get expert advice from certified doctors anywhere, anytime.
                </CardDescription>
              </Card>
              <Card>
                <CardImage
                  src="https://media.istockphoto.com/id/1281299925/photo/3d-render-woman-doctor-cartoon-character-looks-out-the-big-clipboard-syringe-and-glass-bottle.webp?a=1&b=1&s=612x612&w=0&k=20&c=izAchQR0YkJhKZ9cqPLtBzofMWzFRqGee9xAsPHZQRE="
                  alt="Nurse"
                />
                <CardTitle>Personalized Care</CardTitle>
                <CardDescription>
                  Tailored healthcare plans just for you and your family.
                </CardDescription>
              </Card>
              <Card>
                <CardImage
                  src="https://media.istockphoto.com/id/2167121704/photo/3d-render-pack-of-pills-icon-doctor-or-pharmacist-cartoon-hand-with-black-skin-holding-drugs.webp?a=1&b=1&s=612x612&w=0&k=20&c=N1ZQmnmWxfCo-T6tOSXXG2-Zgb5peH1x3nM-cDJzlbQ="
                  alt="Pharmacy"
                />
                <CardTitle>Online Pharmacy</CardTitle>
                <CardDescription>
                  Order medications easily and get them delivered to your door.
                </CardDescription>
              </Card>
            </CardsWrapper>
          </CardsSection>

          {/* Call to Action Section */}
          <CTASection>
            <h2 style={{ fontSize: '32px', marginBottom: '25px', color: '#fff' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '20px', marginBottom: '40px', color: '#e0f7fa' }}>
              Join the thousands of users improving their health with DocTalk.
            </p>
            <CTAButton>Sign Up Today</CTAButton>
          </CTASection>
        </Container>
      </div>
    </>
  );
};

export default Home;
