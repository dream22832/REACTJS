import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>);

}

export default Post;