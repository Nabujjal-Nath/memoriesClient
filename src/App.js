import "./App.css";
import { Container, Typography, AppBar, Grow, Grid } from '@material-ui/core'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
function App() {
  return (
    <Container maxWidth="lg">
      <AppBar color="inherit" position="static">
        <Typography variant="h2" align="center">
          Hi Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
