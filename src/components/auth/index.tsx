import { useLocation } from 'react-router-dom'
import { LoginPage } from './login/index'
import { RegisterPage } from './register/index'

export const AuthRootComponent = () => {
	const location = useLocation()
	return location.pathname === '/register' ? (
		<RegisterPage />
	) : location.pathname === '/login' ? (
		<LoginPage />
	) : null
}
