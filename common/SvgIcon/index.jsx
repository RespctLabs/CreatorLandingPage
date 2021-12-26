
import React from 'react';
import Image from 'next/image';

// eslint-disable-next-line react/prop-types
export function SvgIcon({ src, width, height,className }) {
  return (
          <Image
          alt={src}
          className={className}
          height={height}
          src={`/social/${src}`}
          width={width}
          />
          )
}

export default SvgIcon
