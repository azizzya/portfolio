import { Link } from 'react-router-dom';
import './style.scss'

interface Props {

}

const AuthPage = (props: Props) => {
    return (
        <div className='auth-page-wrapper'>
            <form className='auth-form'>
                <div className="auth-form-wrapper">
                    <div className="login auth-el">
                        <label>
                            ЛОГИН
                        </label>
                        <input type='text' name='login' className='login auth-input'/>
                    </div>
                    <div className="password auth-el">
                        <label>
                            ПАРОЛЬ
                        </label>
                        <input type='password' name='password' className='password auth-input'/>
                    </div>
                </div>

                <Link to={'/'} className='auth-form-button'>ВОЙТИ</Link>
            </form>
        </div>
    )
}

export default AuthPage;