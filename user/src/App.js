import React from 'react';
import memories from './components/images/memories.png';
import { Container, Typography, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


const App = () => {
  return (
    <Container className="max-auto max-w-lg ">
      <header className="bg-gray-100 py-4 rounded-lg my-8 flex flex-row justify-center items-center">
        <Typography className="text-4xl text-center text-blue-500">Memories</Typography>
        <img className="ml-4" src={memories} alt="icon" height="60" />
      </header>

      <div className="transition-all">
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Rest of your content */}
    </Container>
  );
};

export default App;