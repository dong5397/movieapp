import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <button><Link to="/">홈화면</Link> </button>
        <button> <Link to="/Movies">영화 리스트</Link></button>
        <button><Link to="/Movie">영화 상세보기</Link> </button>
    </div>
  );
};

export default Header;
