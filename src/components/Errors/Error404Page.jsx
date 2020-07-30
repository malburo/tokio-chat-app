import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ErrorWrapper from './styles/ErrorWrapper';

Error404Page.propTypes = {};

function Error404Page(props) {
  return (
    <ErrorWrapper>
      <div className="exception">
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{
              backgroundImage: `url(/images/404.svg)`,
            }}
          />
        </div>
        <div className="content">
          <h1>404</h1>
          <div className="desc">
            Xin lỗi, trang bạn đang truy cập không tồn tại
          </div>
          <div className="actions">
            <Link to="/">
              <Button type="primary">Quay lại trang chủ</Button>
            </Link>
          </div>
        </div>
      </div>
    </ErrorWrapper>
  );
}

export default Error404Page;
