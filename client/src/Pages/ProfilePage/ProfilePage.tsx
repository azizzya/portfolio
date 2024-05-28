import React, { FC } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import './style.scss'
import photo from '../../shared/photo.jpg'


interface ProfilePageProps {
    
}

const ProfilePage: FC<ProfilePageProps> = () => {
    return (
        <>
            <Navbar />
            <div className="profile-page-wrapper">
                <div className="major-profile-block">
                    <div className="minor-profile-block">
                        <img src={photo} alt='' className='profile-photo'/>
                        <div className="profile-right">
                            <div className="profile-info">
                                <div className="profile-name-info">
                                    <div className="profile-name">
                                        Акира Фудзии
                                    </div>
                                    <div className="profile-login">
                                        @akirafudzii
                                    </div>
                                </div>
                                <div className="profile-description">
                                    обо мне: Меня зовут акира, я в основном занимаюсь портретной съемкой. также делаю снимки пейзажей, животных. 
                                </div>
                            </div>
                            <div className="profile-buttons">
                                <button className='become-photographer'>СТАТЬ ФОТОГРАФОМ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;