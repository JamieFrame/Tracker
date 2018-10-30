import react from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '20px' }}>
      <Link route="/">
        <a className="item">
        Parcel Tag
        </a>
      </Link>
      <Link route="/about">
        <a className="item">
        About
        </a>
      </Link>
      <Link route="/howitworks">
        <a className="item">
        How it Works
        </a>
      </Link>
      <Menu.Menu position="right">
      <Link route="/tags/new">
        <a className="item">
        New Tag
        </a>
      </Link>
      <Link route="/tags/locate">
        <a className="item">
        Locate a Tag
        </a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};
