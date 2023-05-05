import '../styling/PublicationContainer.css';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { EndPointContext } from '../context/EndPointContext';
import { AuthContext } from '../context/AuthContext';

export const PublicationContainer = ({ publication }) => {
    const { endpoint } = useContext(EndPointContext)
    const { token, User } = useContext(AuthContext)
    const { caption, pic, user, published_on, publication_likes } = publication
    const arrDate = published_on.split("-")
    const [liked, setLiked] = useState(false)
    const [likeNumber, setLikeNumber] = useState()
    const [seeMore, setSeeMore] = useState(false)
    console.log(publication_likes.length)
    const dateJsx = (pubilshedOnDate) => {
        const now = new Date(Date.now())
        const dayNow = now.getDate()
        const monthNow = now.getMonth() + 1
        const yearNow = now.getFullYear()
        const arrDate = pubilshedOnDate.split("-")
        const dayPublication = arrDate[2].substring(0, 2)
        const monthPublication = arrDate[1]
        const yearPublication = arrDate[0]
        const hourPublication = arrDate[2].substring(3, 5)
        const minutePublication = arrDate[2].substring(6, 8)
        const minuteNow = now.getMinutes()
        const minutesDiff = Math.abs(minuteNow - minutePublication)
        const hoursDiff = Math.abs(hourPublication - now.getHours())
        console.log(minuteNow, minutePublication)
        if (yearNow != yearPublication) return `${yearPublication}-${monthPublication}-${dayPublication}`
        if (monthNow != monthPublication) return `${yearPublication}-${monthPublication}-${dayPublication}`
        if (dayNow != dayPublication) return `${Math.abs(dayNow - dayPublication)} days ago`
        if (hourPublication != now.getHours() && Math.abs(minuteNow - minutePublication) > 59) return `${(hourPublication - now.getHours())} hour${hoursDiff > 1} ago`
        if (hourPublication != now.getHours()) return `${minutesDiff} minute${(minutesDiff > 1) && 's'} ago`
    }
    const handleLike = async () => {
        liked ? setLikeNumber(likeNumber - 1) : setLikeNumber(likeNumber + 1)
        setLiked(!liked)
        const response = await fetch(`${endpoint}/like/${publication.id}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: User.id
            })
        })
    }
    useEffect(() => {
        setLiked(publication_likes.some((e) => e.user.id === User.id))
        setLikeNumber(publication_likes.length)
    }, [User, publication_likes])
    return (
        <div className='publication-container'>
            <div className='mobile-bottom-of-publication-container'>
                <div>{dateJsx(published_on)}</div>
                {token ?
                    <div className='like-container'>
                        <div className='like-text'>{likeNumber}</div>
                        <BsFillSuitHeartFill className={`like ${liked ? "liked" : "unliked"}`} onClick={handleLike} />
                    </div> :
                    <div className='like-text'>
                        {likeNumber} like{likeNumber > 1 ? "s" : ""}
                    </div>
                }
            </div>
            <div className='mobile-caption'>
                {caption.length > 21 && !seeMore ?
                    <div>
                        {caption.substring(0, 21)} <span onClick={() => { setSeeMore(true) }}>see more</span>
                    </div> : `${caption} `}
                {
                    seeMore ?
                        <span onClick={() => { setSeeMore(false) }}>
                            see less
                        </span> : ""
                }
            </div>

            <div className='publication-container-image'>
                <img src={pic} alt='' className='publication-image' />
            </div>
            <div className='publication-container-information'>
                <div className='publication-owner'>
                    <div className='img'>
                        <img src={user.profile_pic} alt='' />
                    </div>
                    <div className='username'>{user.username}</div>
                </div>
                <p className='caption'>{caption}</p>
                <div className='bottom-of-publication-container'>
                    <div>{dateJsx(published_on)}</div>
                    <div>

                    </div>
                    {token ?
                        <div className='like-container'>
                            <div className='like-text'>{likeNumber}</div>
                            <BsFillSuitHeartFill className={`like ${liked ? "liked" : "unliked"}`} onClick={handleLike} />
                        </div> :
                        <div className='like-text'>
                            {publication_likes.length} like{publication_likes.length > 1 ? "s" : ""}
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};