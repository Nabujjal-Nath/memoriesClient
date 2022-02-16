import "./App.css";
import { Container, Typography, AppBar, Grow, Grid } from '@material-ui/core'
function App() {
  return (
    <Container maxWidth="lg">
      <AppBar color="inherit" position="static">
        <Typography variant="h2" align="center">
          Hi Memories
        </Typography>
      </AppBar>
    </Container>
  );
}

export default App;
