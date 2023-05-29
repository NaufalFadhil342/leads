import { AiOutlineSound, AiOutlineSmile, AiOutlineCompass, AiOutlineCheckCircle } from 'react-icons/ai';
import { MdManageHistory } from 'react-icons/md';
import ceo from '../../Image/team/ceo.jpg';
import designer from '../../Image/team/designer.jpg';
import developer from '../../Image/team/lead-developer.jpg';

const ideas = (
  <svg viewBox="0,0,256,256" width="48px" height="48px">
    <g fill="#ffffff" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
      <g transform="scale(4,4)">
        <path d="M32,9c-8.822,0 -16,7.178 -16,16c0,6.049 2.98958,9.35281 5.39258,12.00781c2.015,2.227 3.60742,3.98619 3.60742,6.99219c0,1.104 0.896,2 2,2h10c1.104,0 2,-0.896 2,-2c0,-3.006 1.59242,-4.76519 3.60742,-6.99219c2.403,-2.655 5.39258,-5.95881 5.39258,-12.00781c0,-8.822 -7.178,-16 -16,-16zM12,10c-1.104,0 -2,0.895 -2,2c0,1.105 0.896,2 2,2c1.104,0 2,-0.895 2,-2c0,-1.105 -0.896,-2 -2,-2zM52,10c-1.104,0 -2,0.895 -2,2c0,1.105 0.896,2 2,2c1.104,0 2,-0.895 2,-2c0,-1.105 -0.896,-2 -2,-2zM8,24c-1.104,0 -2,0.895 -2,2c0,1.105 0.896,2 2,2c1.104,0 2,-0.895 2,-2c0,-1.105 -0.896,-2 -2,-2zM56,24c-1.104,0 -2,0.895 -2,2c0,1.105 0.896,2 2,2c1.104,0 2,-0.895 2,-2c0,-1.105 -0.896,-2 -2,-2zM12,38c-1.104,0 -2,0.895 -2,2c0,1.105 0.896,2 2,2c1.104,0 2,-0.895 2,-2c0,-1.105 -0.896,-2 -2,-2zM52,38c-1.104,0 -2,0.895 -2,2c0,1.105 0.896,2 2,2c1.104,0 2,-0.895 2,-2c0,-1.105 -0.896,-2 -2,-2zM28,48c-1.104,0 -2,0.895 -2,2c0,1.105 0.896,2 2,2h0.55469c0.69293,1.1906 1.96858,2 3.44531,2c1.47673,0 2.75238,-0.8094 3.44531,-2h0.55469c1.104,0 2,-0.895 2,-2c0,-1.105 -0.896,-2 -2,-2z"></path>
      </g>
    </g>
  </svg>
);

export const productsData = [
  {
    icon: <AiOutlineSound />,
    label: 'Marketing Produk',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: ideas,
    label: 'Membuat Inovasi',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: <AiOutlineSmile />,
    label: 'Jujur & Ramah',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: <AiOutlineCompass />,
    label: 'Keingintahuan',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: <MdManageHistory />,
    label: 'Mengelola Kualitas',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
];

export const goalsData = [
  {
    icon: <AiOutlineCheckCircle />,
    label: 'Sistem Managemen',
  },
  {
    icon: <AiOutlineCheckCircle />,
    label: 'Menciptakan serta Meningkatkan Potensi Market Anda',
  },
  {
    icon: <AiOutlineCheckCircle />,
    label: 'Menyediakan Akses ke Teknologi Unik',
  },
  {
    icon: <AiOutlineCheckCircle />,
    label: 'Manajer Akuntansi',
  },
  {
    icon: <AiOutlineCheckCircle />,
    label: 'Branding Bisnis',
  },
];

export const teamData = [
  {
    image: ceo,
    name: 'Robert James',
    position: 'CEO',
  },
  {
    image: designer,
    name: 'Lili Scarlett',
    position: 'Chief Designer',
  },
  {
    image: developer,
    name: 'Audrey Ann',
    position: 'Lead Developer',
  },
];
