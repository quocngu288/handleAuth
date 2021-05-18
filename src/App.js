import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Main from './Components/Main'
import Login from './Components/Login';
import { history } from './helper/history'
// import { AuthProvider } from './Context/authContext'

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '400px' }} className="w-100">
          {/* <Signup /> */}
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Container>
    </Router>

    // </AuthProvider>

  );
}

export default App;
