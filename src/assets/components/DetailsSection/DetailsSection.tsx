import React from 'react';
import SingleDetail from '../SingleDetail/SingleDetail';
import DetailImg from '../../images/jpgs/Detail.jpg';
import DetailImgSmall from '../../images/jpgs/Detail_small.jpg';
import DetailImg2 from '../../images/jpgs/Detail2.jpg';
import DetailImg2Small from '../../images/jpgs/Detail2_small.jpg';
import './DetailsSection.scss';

interface Props {}
export interface Detail {
  title: string;
  description: string;
  image: string;
  imageSmall?: string;
  link: string;
}
const details = [
  {
    title: 'We are here to keep you comfy!',
    description:
      'With the mercury reaching new heights, it’s becoming increasingly difficult to remain calm and relaxed. During sweltering sun, an economical way to keep you calm is by using an air cooler. Simple and elegant, the cooler combines beautifully with the room’s ambiance. ',
    image: DetailImg,
    imageSmall: DetailImgSmall,
    link: '/',
  },
  {
    title: 'WHY INDUSTRIAL PORTABLE COOLERS',
    description:
      'Thinking about our customers need Clarion brings the most advanced and effective range of portable coolers. Our – state of the – art includes India’s Largest air cooler and India’s most energy efficient industrial cooler.',
    image: DetailImg2,
    imageSmall: DetailImg2Small,
    link: '/',
  },
];
const DetailsSection: React.FC<Props> = () => {
  return (
    <div className="DetailsSection">
      {details.map((item, index) => {
        return <SingleDetail detail={item} key={index} index={index} />;
      })}
      <div className="decor-circle circle1"></div>
      <div className="decor-circle circle2"></div>
    </div>
  );
};

export default DetailsSection;
