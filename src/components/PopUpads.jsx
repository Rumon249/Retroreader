import { useEffect, useState } from 'react';

function PopupAd({ gifUrl, side = 'left', width = 160, height = 200 }) {
const [visible, setVisible] = useState(true);

useEffect(() => {
    let timeout;
    if (!visible) {
      timeout = setTimeout(() => setVisible(true), 5 * 60 * 1000); // 5 minutes
    }
    return () => clearTimeout(timeout);
}, [visible]);

if (!visible) return null;

return (
    <div
    className={`popup-ad ${side}`}
    style={{ width: `${width}px`, height: `${height}px` }}
    >
    <button className="close-btn" onClick={() => setVisible(false)}>❌</button>
    <img src={gifUrl} alt="Y2K Ad" />
    </div>
);
}

export default PopupAd;

