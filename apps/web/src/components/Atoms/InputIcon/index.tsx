import Image from 'next/image';

export type InputIconProps = {
  size?: 'default' | 'small' | 'large';
  src: string;
  alt: string;
  onClick?: () => void;
};

export const InputIcon = ({
  size = 'default',
  src,
  alt,
  onClick
}: InputIconProps): JSX.Element => {
  const sizeMap = {
    default: 20,
    small: 16,
    large: 24
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={sizeMap[size]}
      height={sizeMap[size]}
      onClick={onClick}
    />
  );
};
