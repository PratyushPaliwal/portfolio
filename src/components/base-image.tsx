// src/components/base-image.tsx
"use client";

import Image, { ImageProps } from 'next/image';
import { usePathname } from 'next/navigation';

interface BaseImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export default function BaseImage({ src, ...props }: BaseImageProps) {
  const pathname = usePathname();
  const isLocalImage = src.startsWith('/') && !src.startsWith('//') && !src.startsWith('http');
  
  // For external images, use the original src
  if (!isLocalImage) {
    return <Image src={src} {...props} />;
  }
  
  // For local images, make sure they work in both development and production
  return <Image src={src} {...props} />;
}