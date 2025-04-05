// src/components/base-image.tsx
"use client";

import Image, { ImageProps } from 'next/image';

interface BaseImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string; // Ensure alt is required
}

export default function BaseImage({ src, alt, ...props }: BaseImageProps) {
  // We removed the unused pathname variable
  const isLocalImage = src.startsWith('/') && !src.startsWith('//') && !src.startsWith('http');
  
  // For external images, use the original src
  if (!isLocalImage) {
    return <Image src={src} alt={alt} {...props} />;
  }
  
  // For local images, make sure they work in both development and production
  return <Image src={src} alt={alt} {...props} />;
}