import React from "react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import SectionImage from "../../ui/SectionImage";
import StyledButton from "../../ui/StyledButton";
import Section from "../../ui/Section";
import ImageWrapper from "../../ui/ImageWrapper";

import { FaArrowRight } from "react-icons/fa";

import animationData from "../../animations/landinganimation/data"

import customSoftware from "../../assets/CustomSoftwareIcon.svg";
import mobile from "../../assets/mobileIcon.svg";
import website from "../../assets/websiteIcon.svg";
import repeatingBackground from "../../assets/repeatingBackground.svg";
import { makeStyles } from "@mui/styles";
import Lottie from "react-lottie";
import { useMediaQuery } from "@mui/material";


const Home = () => {

  const isScreenSmall = useMediaQuery('(max-width:500px)');


  const useStyles = makeStyles(theme => (
    {
      heading: {
        color: theme.palette.text.primary.main,
        fontSize: "2rem",
      },
      subHeading: {
        color: theme.palette.text.secondary.main,
        fontSize: "0.9rem",
      }
    }

  ))

  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <Container mt="4rem" justify="space-around" direction="column">
      <Section
        wrap="wrap-reverse"
        m="5rem 0rem"
        direction="row"
        justify="space-around"
        alignItem="center"
        width="100%"
      >
        <Section direction="column" justify="space-around" alignItem="center" alignContent="center">
          <SectionHeading className={classes.heading} >
            Bringing West Coast Technology
            <br />
            to the Midwest
          </SectionHeading>
          <Section justify="flex-end">
            <StyledButton
              bg="#FFBA60"
              color="white"
              border="none"
              font="pacifico"
              m="0px 10px"
            >
              Free Estimate
            </StyledButton>
            <StyledButton bg="white" color="#1A76D2" border="2px solid #1A76D2">
              Learn More <FaArrowRight />
            </StyledButton>
          </Section>
        </Section>
        <ImageWrapper>
          <Lottie
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
          />
        </ImageWrapper>
      </Section>
      <Section
        wrap="wrap-reverse"
        m="0rem 5rem"
        justify="flex-start"
        alignItem="center"
        alignContent="center"
      >
        <Section direction="column" justify="flex-start">
          <SectionHeading className={classes.heading}>
            Custom Software Development
          </SectionHeading>
          <SectionHeading className={classes.subHeading}>
            Save Energy. Save Time. Save Money.
          </SectionHeading>
          <br />
          <SectionHeading className={classes.subHeading}>
            Complete digital solutions, from investigation to{" "}
            <span>celebration</span>.
          </SectionHeading>
          <Section justify="flex-start">
            <StyledButton
              bg="white"
              m="1rem 0rem"
              color="#1A76D2"
              border="2px solid #1A76D2"
            >
              Learn More <FaArrowRight />
            </StyledButton>
          </Section>
        </Section>
        <ImageWrapper>
          <SectionImage src={customSoftware} alt="section-img" />
        </ImageWrapper>
      </Section>
      <Section
        wrap="wrap-reverse"
        m="0rem 5rem"
        justify="flex-end"
        alignItem="center"
        alignContent="center"
      >
        <Section direction="column" justify="flex-start">
          <SectionHeading className={classes.heading}>
            iOS/Android App Development
          </SectionHeading>
          <SectionHeading className={classes.subHeading}>
            Extend Functionality. Extend Access. Increase Engagement.
          </SectionHeading>
          <br />
          <SectionHeading className={classes.subHeading}>
            Integrate your web experience or create a standalone app
            <br />
            with either mobile platform.
          </SectionHeading>
          <Section justify="flex-start">
            <StyledButton
              bg="white"
              m="1rem 0rem"
              color="#1A76D2"
              border="2px solid #1A76D2"
            >
              Learn More <FaArrowRight />
            </StyledButton>
          </Section>
        </Section>
        <ImageWrapper m="0rem 1rem">
          <SectionImage src={mobile} alt="section-img" />
        </ImageWrapper>
      </Section>
      <Section
        wrap="wrap-reverse"
        m="0rem 5rem"
        justify="flex-start"
        alignItem="center"
        alignContent="center"
      >
        <Section direction="column" justify="center">
          <SectionHeading className={classes.heading}>
            Website Development
          </SectionHeading>
          <SectionHeading className={classes.subHeading}>
            Reach More. Discover More. Sell more.
          </SectionHeading>
          <br />
          <SectionHeading className={classes.subHeading}>
            Optimized for Search Engines,
            <br />
            built for speed.
          </SectionHeading>
          <Section justify="flex-start">
            <StyledButton
              bg="white"
              m="1rem 0rem"
              color="#1A76D2"
              border="2px solid #1A76D2"
            >
              Learn More <FaArrowRight />
            </StyledButton>
          </Section>
        </Section>
        <ImageWrapper m="0rem 1rem">
          <SectionImage src={website} alt="section-img" />
        </ImageWrapper>
      </Section>
      <Section
        bg={repeatingBackground}
        height="100vh"
        justify="center"
        alignItem="center"
        alignContent="center"
      >
        <Section
          bgc="white"
          border="5px soild black"
          br="30px"
          zIndex="100"
          height="50vh"
          width={isScreenSmall ? "90vw" : "50vw"}
          shadow="0px 3px 3px 3px #888888"
          direction="column"
          justify="center"
        >
          <SectionHeading
            color="#1A76D2"
            size="2rem"
            font="pacifico"
            align="center"
          >
            The Revolution
          </SectionHeading>
          <br />
          <SectionHeading
            color="grey"
            size="0.9rem"
            direction="column"
            align="center"
          >
            Visionary insights coupled with cutting-edge technology
            <br />
            is a recipe for revolution.
          </SectionHeading>
          <Section justify="center">
            <StyledButton
              bg="white"
              m="1rem 0rem"
              color="#1A76D2"
              border="2px solid #1A76D2"
            >
              Learn More <FaArrowRight />
            </StyledButton>
          </Section>
        </Section>
      </Section>
    </Container>
  );
};

export default Home;
