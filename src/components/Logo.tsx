import React from 'react';
import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Logo;