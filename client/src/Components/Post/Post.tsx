import React, { FC } from 'react'
import './style.scss'
import photo from '../../shared/photo.jpg'
import post_photo from '../../shared/post-photo.png'
import send from '../../shared/send.png'
import like from '../../shared/like.png'
import dislike from '../../shared/dislike.png'
import share from '../../shared/share.png'

interface PostProps {
    
}

const Post: FC<PostProps> = () => {
    return (
        <div className="post">
            <div className="post-author">
                <img src={photo} alt="" className='post-author-photo'/>
                <p className='post-author-name'>Азиз Мадаминов</p>
            </div>
            <div className="post-tile">
                <img src={post_photo} alt="postPhoto" className='post-photo' />
            </div>
            <div className="post-footer">
                <div className="description">
                    <p className='description-text'>Эта фотография была сделана Екатериной Евсеевой, предположительно, в прошлом году в целях увеличения интереса к своему творчеству, что, кстати, у нее хорошо получается. Идем только вперед!</p>
                </div>
                <div className="post-lower-footer">
                    <div className="buttons">
                        <button className="like-button button">
                            <img src={like} alt="" className='button-img button-img-like' />
                        </button>
                        <button className="dislike-button button">
                            <img src={dislike} alt="" className='button-img button-img-dislike' />
                        </button>
                        <button className="share-button button">
                            <img src={share} alt="" className='button-img button-img-share' />
                        </button>
                    </div>
                    <div className="comments">
                        <div className="current-comment">
                            <form className='comment-form'>
                                <input type="text" placeholder='Введите комментарий' className='comment-input'/>
                                <button className='comment-send-button'>
                                    <img src={send} alt="" className='comment-send-img'/>
                                </button>
                            </form>
                        </div>
                        <div className="comment">
                            <img src={photo} alt="" className='comment-author-photo'/>
                            <p className='comment-text'>
                                Вау! Мне нравится!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;