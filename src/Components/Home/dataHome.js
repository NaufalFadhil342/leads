import { TbBusinessplan, TbPuzzle } from 'react-icons/tb';
import { SiGooglesearchconsole } from 'react-icons/si';
import { AiOutlineAreaChart } from 'react-icons/ai';
import man from '../../Image/team/userMan-min.jpg';
import woman from '../../Image/team/userWoman-min.jpg';

export const aboutData = [
  {
    image: <TbBusinessplan />,
    label: 'Perencanaan',
    message: 'Donec scelerisque laoreet tortor, at gravida nulla malesuada nec. Morbi blandit in libero dictum interdum.',
  },
  {
    image: <SiGooglesearchconsole />,
    label: 'Riset',
    message: 'Donec scelerisque laoreet tortor, at gravida nulla malesuada nec. Morbi blandit in libero dictum interdum.',
  },
  {
    image: <TbPuzzle />,
    label: 'Temukan Solusi',
    message: 'Donec scelerisque laoreet tortor, at gravida nulla malesuada nec. Morbi blandit in libero dictum interdum.',
  },
  {
    image: <AiOutlineAreaChart />,
    label: 'Capai Target',
    message: 'Donec scelerisque laoreet tortor, at gravida nulla malesuada nec. Morbi blandit in libero dictum interdum.',
  },
];

export const dataSlider = [
  {
    image: man,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat accumsan odio, sit amet suscipit metus vestibulum a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user: 'John Doe',
    position: 'Manager',
  },
  {
    image: woman,
    text: 'Donec sit amet efficitur ex. Donec malesuada justo eu hendrerit porttitor. Aliquam nec justo nisi. Quisque sed augue congue, iaculis neque vitae, commodo nisi. Etiam sed mattis justo. Nam facilisis felis mauris, vitae feugiat nisi fringilla non.',
    user: 'Miselle Anastasya',
    position: 'Manager',
  },
];
