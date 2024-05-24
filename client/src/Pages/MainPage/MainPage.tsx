import Navbar from '../../Components/Navbar/Navbar';
import Post from '../../Components/Post/Post';
import './style.scss'


interface Props {
    
}

const MainPage = (props: Props) => {
    return (
        <div className='main-page-wrapper'>
            <Navbar />
            
            <div className="posts">
                <Post />
                <Post />
                <Post />                
            </div>
        </div>
    )
}

export default MainPage;