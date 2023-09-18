import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ChatLayout from './layouts/ChatLayout';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import ForgotPassword from './pages/ForgotPassword';
import RegisterForm from './pages/RegisterForm';
import ConversationPage from './pages/Conversation';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';
import './css/Navbar.css';
import './css/App.css';


function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <ChatLayout />
                </PrivateRoute>}>
              <Route
                path=":chatId"
                element={
                  <PrivateRoute>
                    <ConversationPage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
