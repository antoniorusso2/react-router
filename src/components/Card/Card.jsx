/* eslint-disable react/prop-types */
import placeholder from '../../assets/placeholder.bmp';
import style from './Card.module.css';
import { URI } from '../../pages/Posts/Index';

export default function Card({ post }) {
  console.log(post);
  const { title, content, image } = post;

  return (
    <>
      <div className={style.card}>
        <div className={style.header}>
          <img className={style.img} src={`${URI}${image}` || placeholder} alt="" />
        </div>
        <div className={style.body}>
          <h2 className={style.title}>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
