import React from 'react';
import styles from './Banner.module.css';
function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img src="./logo192.png" alt="company Logo" />
        </div>
        <div className="col align-sef-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
