import classNames from 'classnames/bind';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './Slideshow.module.scss'



const cx = classNames.bind(styles)

const Slideshow = ({images}) => {


    return (
        <Slide>
            {images.map((image,index)=>
                (<div key={index} className={cx("each-slide-effect")}>
                <div style={{ 'backgroundImage': `url(${image.url})` }}>
                </div>
            </div>))}
        </Slide>
    );
};

export default Slideshow;