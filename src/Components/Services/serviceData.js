import { Link } from 'react-router-dom';
import './serviceData.css';
import productImg from '../../Image/background/product.jpg';
import brandImg from '../../Image/background/brand.jpg';
import websiteImg from '../../Image/background/web.jpg';
import contentImg from '../../Image/background/content.jpg';
import { RiTeamLine } from 'react-icons/ri';
import { SiGooglemeet } from 'react-icons/si';

export const ProductMarketing = () => {
  return (
    <div className="productMarket">
      <h3>Product Marketing</h3>
      <div className="image" style={{ backgroundImage: `url(${productImg})` }} />
      <div className="categories">
        <div className="analyst">
          <div>Analisa Product</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="evaluate">
          <div>Evaluasi Product</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="link">
        <Link to="https://wa.me/6283857390400" target="_blank">
          Pesan Segera
        </Link>
      </div>
    </div>
  );
};

export const BrandManagement = () => {
  return (
    <div className="branding">
      <h3>Brand Management</h3>
      <div className="image" style={{ backgroundImage: `url(${brandImg})` }} />
      <div className="categories">
        <div className="establish">
          <div>Membuat Brand</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="explore">
          <div>Eksplor Brand</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="link">
        <Link to="https://wa.me/6283857390400" target="_blank">
          Pesan Segera
        </Link>
      </div>
    </div>
  );
};

export const WebServices = () => {
  return (
    <div className="website">
      <h3>Web Services</h3>
      <div className="image" style={{ backgroundImage: `url(${websiteImg})` }} />
      <div className="categories">
        <div className="mobile">
          <div>Aplikasi Mobile</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="web">
          <div>Aplikasi Website {'&'} Mobile</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="link">
        <Link to="https://wa.me/6283857390400" target="_blank">
          Pesan Segera
        </Link>
      </div>
    </div>
  );
};

export const ContentManagement = () => {
  return (
    <div className="manageContent">
      <h3>Content Management</h3>
      <div className="image" style={{ backgroundImage: `url(${contentImg})` }} />
      <div className="categories">
        <div className="organize">
          <div>Mengorganisir Konten</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="keyword">
          <div>Seleksi Kata Kunci</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="link">
        <Link to="https://wa.me/6283857390400" target="_blank">
          Pesan Segera
        </Link>
      </div>
    </div>
  );
};

export const advantage = [
  {
    icon: <SiGooglemeet />,
    label: 'Konsultasi Gratis',
  },
  {
    icon: <RiTeamLine />,
    label: 'Bonus Bimbingan',
  },
];
