import React from 'react';

export default function TickerStrip() {
  const items = [
    'Kitchen Remodeling',
    'Bathroom Retreats',
    'Basement Finishing',
    'Hardwood & Luxury Flooring',
    'Custom Quartz Countertops',
    'Home Additions & Extensions',
  ];

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {items.concat(items).map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    </div>
  );
}
