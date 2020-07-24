import React from 'react'
import userOne from './../../Images/user-1.jpg'
import userTwo from './../../Images/user-2.jpg'
import userThree from './../../Images/user-3.jpg'
import './Users.css'

function Users() {
    return(
        <div className='Users'>
            <div className='users__content'>
                <div className='user'>
                    <img src={userOne}  class='user__img' alt='user one'/>
                    <div className='user__text'>
                        <h3 className='user__name'>Mogamat Bob</h3>
                        <p className='user__desc'>
                            Web - Android Developer
                        </p>
                    </div>
                </div>

                <div className='user'>
                    <img src={userTwo} class='user__img' alt='user two'/>
                    <div className='user__text'>
                        <h3 className='user__name'>Mogamat Bob</h3>
                        <p className='user__desc'>
                            Web - Android Developer
                        </p>
                    </div>
                </div>

                <div className='user'>
                    <img src={userThree} class='user__img' alt='user three'/>
                    <div className='user__text'>
                        <h3 className='user__name'>Mogamat Bob</h3>
                        <p className='user__desc'>
                            Web - Android Developer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}