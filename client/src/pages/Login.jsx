import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login - accept any input
        if (username && password) {
            navigate('/home');
        } else {
            alert('Please enter username and password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Welcome Back</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Sign in to manage your tasks
                </p>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
