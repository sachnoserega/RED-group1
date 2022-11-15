import React from 'react'
import styles from './Header.module.scss'
import userImage from '../../../images/header/user.svg'
import authImage from '../../../images/header/hamburger.svg'
// import { useHistory } from 'react-router'
// import Hamburger from './Hamburger/Hamburger'

// import arrowImage from '../../../images/header/arrow.svg'
// import { useAuth } from '../../../hooks/useAuth'


const Header = () => {
    return <header className={styles.header}>

        <button type="button">
           <img src={userImage} alt="Auth" />
        </button>

        <button type="button">
        <img src={authImage} alt="Auth" />
        </button>
    </header>
}


// const Header = ({ backLink }) => {
// 	const history = useHistory()
// 	const { location } = history

// 	const { isAuth } = useAuth()

// 	return (
// 		<header className={styles.header}>
// 			{location.pathname !== '/' ? (
// 				<button type='button' onClick={() => history.push(backLink || '/')}>
// 					<img
// 						src={arrowImage}
// 						width='29'
// 						height='23'
// 						alt='back'
// 						draggable={false}
// 					/>
// 				</button>
// 			) : (
// 				<button
// 					type='button'
// 					onClick={() => history.push(isAuth ? '/profile' : '/auth')}
// 				>
// 					<img
// 						src={isAuth ? authImage : userImage}
// 						alt='Auth'
// 						height='40'
// 						width='40'
// 						draggable={false}
// 					/>
// 				</button>
// 			)}
// 			<Hamburger />
// 		</header>
// 	)
// }

export default Header