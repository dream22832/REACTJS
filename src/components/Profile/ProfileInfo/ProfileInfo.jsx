import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://s-sd.ru/images/cms/data/hed2.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                < img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} autoFocus={true}/>
            </div>
        </div>
    )
}

export default ProfileInfo;