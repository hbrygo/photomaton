import { QRCodeCanvas } from 'qrcode.react';

const ShowQrcode = ({ download }) => {
  if (download) {
    return <QRCodeCanvas value={download} size={200} />;
  } else {
    return <h1>Error Firebase is not init</h1>;
  }
};

export default ShowQrcode;
