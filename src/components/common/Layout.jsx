import React from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'
// import cn from 'classnames'


const Layout = ({children}) => {
    return ( 
        <div className={styles.wrapper}>
            <Header />
            {children}
        </div>
     );
}
 
export default Layout;

// const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
// 	return (
// 		<div
// 			className={cn(styles.wrapper, {
// 				[styles.otherPage]: !!heading,
// 			})}
// 			style={{ backgroundImage: `url(${bgImage})` }}
// 		>
// 			<Header backLink={backLink} />
// 			{heading && <h1 className={styles.heading}>{heading}</h1>}
// 			{children && <div>{children}</div>}
// 		</div>
// 	)
// }

// export default Layout
