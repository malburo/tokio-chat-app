import React from 'react';
import PropTypes from 'prop-types';
import ErrorWrapper from './styles/ErrorWrapper';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'antd';

Error500Page.propTypes = {};

function Error500Page(props) {
  return (
    <ErrorWrapper>
      <div className="exception">
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{
              backgroundImage: `url(/images/500.svg)`,
            }}
          />
        </div>
        <div className="content">
          <h1>500</h1>
          <div className="desc">Lỗi máy chủ, vui lòng quay lại sau</div>
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

export default Error500Page;
