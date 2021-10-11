import React, { useEffect, useState } from 'react'
import Container from "../../ui/Container"
import axios from "axios"
import SectionHeading from '../../ui/SectionHeading'
import CircularProgress from '@mui/material/CircularProgress';

const Services = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      }).catch(er => console.log(er))
  }, [])

  return (
    <Container mt="4rem" direction="column" justify="center" alignItem="center" alignContent="center">
      {
        !loading && posts.length > 0 ? posts.map((post) => (
          <div style={{ margin: "5rem 0rem" }} key={post.id}>
            <SectionHeading
              color="navy"
              font-size="2rem"
              font-weight="600"
              text-align="center">
              {post.title}
            </SectionHeading>
            <p>{post.body}</p>
          </div>
        )) : <CircularProgress color="primary" />

      }
    </Container >
  )
}

export default Services