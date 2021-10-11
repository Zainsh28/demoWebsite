import React from 'react'
import footer from "../assets/background.jpg"
import Container from "../ui/Container"
import Section from "../ui/Section"
import SectionHeading from "../ui/Section"
import StyledButton from "../ui/StyledButton"
import { FaArrowRight } from "react-icons/fa"
import { makeStyles } from '@mui/styles'



const Footer = () => {

  const useStyles = makeStyles(theme => (
    {
      heading: {
        color: theme.palette.text.primary.main,
        fontSize: "3rem",
        [theme.breakpoints.down('md')]: {
          fontSize: "2rem",
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: "1rem"
        },
      },

      subHeading: {
        color: theme.palette.links.main,
        fontSize: "1rem",
        [theme.breakpoints.down('md')]: {
          fontSize: "0.7rem",
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: "0.5rem"
        },
      }
    }
  ))

  const classes = useStyles();

  return (
    <Container mt="0rem" bg={footer} justify="center" alignItem="center" direction="column">
      <Section
        m="5rem 0rem"
        direction="row"
        justify="space-around"
        alignItem="center"
        wrap="wrap"
        width="100%"
      >
        <Section direction="column">
          <SectionHeading className={classes.heading}>
            Simple Software.
            <br />
            Revolutionary Results.
          </SectionHeading>
          <SectionHeading className={classes.subHeading}>
            Take Advantage of 21st Century
          </SectionHeading>
          <Section justify="flex-start">
            <StyledButton bg="transparent" color="#1A76D2" border="2px solid #1A76D2" br="30px">
              Learn More <FaArrowRight />
            </StyledButton>
          </Section>
        </Section>
        <Section>
          <StyledButton
            bg="#FFBA60"
            color="white"
            border="none"
            m="0px 10px"
            padding="10px"
            font="pacifico"
            size="1rem"
          >
            Free Estimate
          </StyledButton>
        </Section>
      </Section>
    </Container>

  )
}

export default Footer
