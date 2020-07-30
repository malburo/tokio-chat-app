import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ErrorWrapper from './styles/ErrorWrapper';

Error401Page.propTypes = {};

function Error401Page(props) {
  return (
    <ErrorWrapper>
      <div className="exception">
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{
              backgroundImage: `url(/images/403.svg)`,
            }}
          />
        </div>
        <div className="content">
          <h1>401</h1>
          <div className="desc">
            Xin lỗi, bạn phải đăng nhập để truy cập trang hiện tại
          </div>
          <div className="actions">
            <Link to="/signin">
              <Button type="primary">Đăng nhập</Button>
            </Link>
          </div>
        </div>
      </div>
    </ErrorWrapper>
  );
}

export default Error401Page;
