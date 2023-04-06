import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const { name, title, banner, picture, date, readingTime, read} = props.data;
    const handelTimeClick = props.handelTimeClick;
    const handelTitleClick = props.handelTitleClick;
    // const handelClick=(newData)=>{
    //     console.log(newData);
    // }
    return (
        <div>
           <section className='card'>
                <img src={banner} alt="" className="card-img"/>
                    <div className="card-auth">
                        <div className="card-user">
                            <img src={picture} alt="" />
                                <div>
                                    {name}<br/>
                                    {date}
                                </div>
                        </div>
                        <div>
                            <p>{readingTime} min read <FontAwesomeIcon icon={faBookmark} onClick={()=>handelTitleClick(props.data)}/></p>
                        </div>
                    </div>
                <div>
                    <h1>{title} </h1>
                </div>
                <div className="card-tag">
                    <p>#biginner</p>
                    <p>#programming</p>
                </div>
                <div>
                    <p className='read-mark' onClick={()=>handelTimeClick(readingTime)}>{read}</p>
                </div>
           </section>
        </div>
    );
};

export default Card;