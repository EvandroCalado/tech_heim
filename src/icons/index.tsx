import { cn } from '@/lib/utils';
import { FC } from 'react';

interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  color?: string;
  size?: string | number;
  className?: string;
}

export const IconStatusUp: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M6.87988 18.9C6.46988 18.9 6.12988 18.56 6.12988 18.15V16.08C6.12988 15.67 6.46988 15.33 6.87988 15.33C7.28988 15.33 7.62988 15.67 7.62988 16.08V18.15C7.62988 18.57 7.28988 18.9 6.87988 18.9Z" />
    <path d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z" />
    <path d="M17.1201 18.9C16.7101 18.9 16.3701 18.56 16.3701 18.15V11.93C16.3701 11.52 16.7101 11.18 17.1201 11.18C17.5301 11.18 17.8701 11.52 17.8701 11.93V18.15C17.8701 18.57 17.5401 18.9 17.1201 18.9Z" />
    <path d="M6.88007 13.18C6.54007 13.18 6.24007 12.95 6.15007 12.61C6.05007 12.21 6.29007 11.8 6.70007 11.7C10.3801 10.78 13.6201 8.77 16.0901 5.9L16.5501 5.36C16.8201 5.05 17.2901 5.01 17.6101 5.28C17.9201 5.55 17.9601 6.02 17.6901 6.34L17.2301 6.88C14.5601 10 11.0401 12.17 7.06007 13.16C7.00007 13.18 6.94007 13.18 6.88007 13.18Z" />
    <path d="M17.1199 9.52C16.7099 9.52 16.3699 9.18 16.3699 8.77V6.6H14.1899C13.7799 6.6 13.4399 6.26 13.4399 5.85C13.4399 5.44 13.7799 5.1 14.1899 5.1H17.1199C17.5299 5.1 17.8699 5.44 17.8699 5.85V8.78C17.8699 9.19 17.5399 9.52 17.1199 9.52Z" />
    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" />
  </svg>
);

export const IconBox: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M12 13.3C11.87 13.3 11.74 13.27 11.62 13.2L2.79002 8.08998C2.44002 7.87998 2.31002 7.41998 2.52002 7.05998C2.73002 6.69998 3.19002 6.57998 3.55002 6.78998L12 11.68L20.4 6.81998C20.76 6.60998 21.22 6.73998 21.43 7.08998C21.64 7.44998 21.51 7.90998 21.16 8.11998L12.39 13.2C12.26 13.26 12.13 13.3 12 13.3Z" />
    <path d="M12 22.36C11.59 22.36 11.25 22.02 11.25 21.61V12.54C11.25 12.13 11.59 11.79 12 11.79C12.41 11.79 12.75 12.13 12.75 12.54V21.61C12.75 22.02 12.41 22.36 12 22.36Z" />
    <path d="M12 22.75C11.12 22.75 10.25 22.56 9.56002 22.18L4.22001 19.21C2.77001 18.41 1.64001 16.48 1.64001 14.82V9.17C1.64001 7.51 2.77001 5.59 4.22001 4.78L9.56002 1.82C10.93 1.06 13.07 1.06 14.44 1.82L19.78 4.79C21.23 5.59 22.36 7.52 22.36 9.18V14.83C22.36 16.49 21.23 18.41 19.78 19.22L14.44 22.18C13.75 22.56 12.88 22.75 12 22.75ZM12 2.75C11.37 2.75 10.75 2.88 10.29 3.13L4.95001 6.1C3.99001 6.63 3.14001 8.07 3.14001 9.17V14.82C3.14001 15.92 3.99001 17.36 4.95001 17.9L10.29 20.87C11.2 21.38 12.8 21.38 13.71 20.87L19.05 17.9C20.01 17.36 20.86 15.93 20.86 14.82V9.17C20.86 8.07 20.01 6.63 19.05 6.09L13.71 3.12C13.25 2.88 12.63 2.75 12 2.75Z" />
  </svg>
);

export const IconArchiveTick: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M4.93006 22.75C4.51006 22.75 4.12006 22.65 3.77006 22.45C3.00006 22 2.56006 21.09 2.56006 19.96V5.86C2.56006 3.32 4.63006 1.25 7.17006 1.25H16.8201C19.3601 1.25 21.4301 3.32 21.4301 5.86V19.95C21.4301 21.08 20.9901 21.99 20.2201 22.44C19.4501 22.89 18.4401 22.84 17.4501 22.29L12.5701 19.58C12.2801 19.42 11.7101 19.42 11.4201 19.58L6.54006 22.29C6.00006 22.59 5.45006 22.75 4.93006 22.75ZM7.18006 2.75C5.47006 2.75 4.07006 4.15 4.07006 5.86V19.95C4.07006 20.54 4.24006 20.98 4.54006 21.15C4.84006 21.32 5.31006 21.27 5.82006 20.98L10.7001 18.27C11.4401 17.86 12.5601 17.86 13.3001 18.27L18.1801 20.98C18.6901 21.27 19.1601 21.33 19.4601 21.15C19.7601 20.97 19.9301 20.53 19.9301 19.95V5.86C19.9301 4.15 18.5301 2.75 16.8201 2.75H7.18006Z" />
    <path d="M11.09 13.25C10.9 13.25 10.71 13.18 10.56 13.03L9.06003 11.53C8.77003 11.24 8.77003 10.76 9.06003 10.47C9.35003 10.18 9.83003 10.18 10.12 10.47L11.09 11.44L14.56 7.97C14.85 7.68 15.33 7.68 15.62 7.97C15.91 8.26 15.91 8.74 15.62 9.03L11.62 13.03C11.47 13.18 11.28 13.25 11.09 13.25Z" />
  </svg>
);

export const IconBag: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M16.5 8.62999C16.09 8.62999 15.75 8.28999 15.75 7.87999V6.49999C15.75 5.44999 15.3 4.42999 14.52 3.71999C13.73 2.99999 12.71 2.66999 11.63 2.76999C9.83 2.93999 8.25 4.77999 8.25 6.69999V7.66999C8.25 8.07999 7.91 8.41999 7.5 8.41999C7.09 8.41999 6.75 8.07999 6.75 7.66999V6.68999C6.75 3.99999 8.92 1.51999 11.49 1.26999C12.99 1.12999 14.43 1.59999 15.53 2.60999C16.62 3.59999 17.25 5.01999 17.25 6.49999V7.87999C17.25 8.28999 16.91 8.62999 16.5 8.62999Z" />
    <path d="M15 22.75H9C4.38 22.75 3.52 20.6 3.3 18.51L2.55 12.52C2.44 11.44 2.4 9.89 3.45 8.73C4.35 7.73 5.84 7.25 8 7.25H16C18.17 7.25 19.66 7.74 20.55 8.73C21.59 9.89 21.56 11.44 21.45 12.5L20.7 18.51C20.48 20.6 19.62 22.75 15 22.75ZM8 8.75C6.31 8.75 5.15 9.08 4.56 9.74C4.07 10.28 3.91 11.11 4.04 12.35L4.79 18.34C4.96 19.94 5.4 21.26 9 21.26H15C18.6 21.26 19.04 19.95 19.21 18.36L19.96 12.35C20.09 11.13 19.93 10.3 19.44 9.75C18.85 9.08 17.69 8.75 16 8.75H8Z" />
    <path d="M15.42 13.15C14.86 13.15 14.41 12.7 14.41 12.15C14.41 11.6 14.86 11.15 15.41 11.15C15.96 11.15 16.41 11.6 16.41 12.15C16.41 12.7 15.97 13.15 15.42 13.15Z" />
    <path d="M8.41997 13.15C7.85997 13.15 7.40997 12.7 7.40997 12.15C7.40997 11.6 7.85997 11.15 8.40997 11.15C8.95997 11.15 9.40997 11.6 9.40997 12.15C9.40997 12.7 8.96997 13.15 8.41997 13.15Z" />
  </svg>
);

export const IconUser: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" />
    <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" />
  </svg>
);

export const IconMenu: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" />
    <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" />
    <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" />
  </svg>
);

export const IconTrash: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M21 6.72998C20.98 6.72998 20.95 6.72998 20.92 6.72998C15.63 6.19998 10.35 5.99998 5.12004 6.52998L3.08004 6.72998C2.66004 6.76998 2.29004 6.46998 2.25004 6.04998C2.21004 5.62998 2.51004 5.26998 2.92004 5.22998L4.96004 5.02998C10.28 4.48998 15.67 4.69998 21.07 5.22998C21.48 5.26998 21.78 5.63998 21.74 6.04998C21.71 6.43998 21.38 6.72998 21 6.72998Z" />
    <path d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z" />
    <path d="M15.21 22.75H8.79002C5.30002 22.75 5.16002 20.82 5.05002 19.26L4.40002 9.19001C4.37002 8.78001 4.69002 8.42001 5.10002 8.39001C5.52002 8.37001 5.87002 8.68001 5.90002 9.09001L6.55002 19.16C6.66002 20.68 6.70002 21.25 8.79002 21.25H15.21C17.31 21.25 17.35 20.68 17.45 19.16L18.1 9.09001C18.13 8.68001 18.49 8.37001 18.9 8.39001C19.31 8.42001 19.63 8.77001 19.6 9.19001L18.95 19.26C18.84 20.82 18.7 22.75 15.21 22.75Z" />
    <path d="M13.66 17.25H10.33C9.91996 17.25 9.57996 16.91 9.57996 16.5C9.57996 16.09 9.91996 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z" />
    <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" />
  </svg>
);

export const IconPlus: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" />
    <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" />
  </svg>
);

export const IconGalleryAdd: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z" />
    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H13C13.41 1.25 13.75 1.59 13.75 2C13.75 2.41 13.41 2.75 13 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z" />
    <path d="M21.25 5.75H15.75C15.34 5.75 15 5.41 15 5C15 4.59 15.34 4.25 15.75 4.25H21.25C21.66 4.25 22 4.59 22 5C22 5.41 21.66 5.75 21.25 5.75Z" />
    <path d="M18.5 8.5C18.09 8.5 17.75 8.16 17.75 7.75V2.25C17.75 1.84 18.09 1.5 18.5 1.5C18.91 1.5 19.25 1.84 19.25 2.25V7.75C19.25 8.16 18.91 8.5 18.5 8.5Z" />
    <path d="M2.66999 19.7C2.42999 19.7 2.18999 19.58 2.04999 19.37C1.81999 19.03 1.90999 18.56 2.24999 18.33L7.17999 15.02C8.25999 14.3 9.74999 14.38 10.73 15.21L11.06 15.5C11.56 15.93 12.41 15.93 12.9 15.5L17.06 11.93C18.13 11.02 19.79 11.02 20.86 11.93L22.49 13.33C22.8 13.6 22.84 14.07 22.57 14.39C22.3 14.7 21.83 14.74 21.51 14.47L19.88 13.07C19.38 12.64 18.53 12.64 18.04 13.07L13.88 16.64C12.82 17.55 11.15 17.55 10.08 16.64L9.74999 16.35C9.28999 15.96 8.52999 15.92 8.01999 16.27L3.09999 19.58C2.95999 19.66 2.80999 19.7 2.66999 19.7Z" />
  </svg>
);

export const IconCart: FC<IconProps> = ({ size = '20', ...rest }) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" />
    <path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" />
    <path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" />
    <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" />
  </svg>
);

export const IconCode: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M8.99996 17.75C8.88996 17.75 8.76996 17.72 8.66996 17.67C7.89996 17.28 7.23996 16.7 6.75996 15.98C6.35996 15.38 6.35996 14.61 6.75996 14.01C7.23996 13.29 7.89996 12.71 8.66996 12.33C9.03996 12.14 9.48996 12.3 9.67996 12.67C9.86996 13.04 9.71996 13.49 9.33996 13.68C8.79996 13.95 8.33996 14.36 8.00996 14.86C7.94996 14.95 7.94996 15.07 8.00996 15.17C8.33996 15.67 8.79996 16.08 9.33996 16.35C9.70996 16.54 9.85996 16.99 9.67996 17.36C9.53996 17.6 9.26996 17.75 8.99996 17.75Z" />
    <path d="M15.21 17.75C14.93 17.75 14.67 17.6 14.54 17.34C14.35 16.97 14.5 16.52 14.88 16.33C15.42 16.06 15.88 15.65 16.21 15.15C16.27 15.06 16.27 14.94 16.21 14.84C15.88 14.34 15.42 13.93 14.88 13.66C14.51 13.47 14.36 13.02 14.54 12.65C14.73 12.28 15.18 12.13 15.55 12.31C16.32 12.7 16.98 13.28 17.46 14C17.86 14.6 17.86 15.37 17.46 15.97C16.98 16.69 16.32 17.27 15.55 17.65C15.43 17.72 15.32 17.75 15.21 17.75Z" />
    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" />
    <path d="M2.22998 8.76C1.81998 8.76 1.47998 8.42 1.47998 8.01C1.47998 7.6 1.80998 7.26 2.22998 7.26L21.45 7.25C21.86 7.25 22.2 7.59 22.2 8C22.2 8.41 21.87 8.75 21.45 8.75L2.22998 8.76Z" />
  </svg>
);

export const IconLogo: FC<Omit<IconProps, 'color'>> = ({
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 518 578"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M215.083 280.277C212.322 280.277 210.083 282.516 210.083 285.277C210.083 288.039 212.322 290.277 215.083 290.277V280.277ZM215.083 290.277H337.902V280.277H215.083V290.277ZM350.902 277.277V161.201H340.902V277.277H350.902ZM337.902 290.277C345.082 290.277 350.902 284.457 350.902 277.277H340.902C340.902 278.934 339.559 280.277 337.902 280.277V290.277Z"
      className={cn(
        'fill-current text-primary dark:text-zinc-100',
        rest.className,
      )}
    />
    <path
      d="M173.417 334.048C170.656 334.048 168.417 336.287 168.417 339.048C168.417 341.809 170.656 344.048 173.417 344.048V334.048ZM173.417 344.048H467.515V334.048H173.417V344.048ZM480.515 331.048V285.102H470.515V331.048H480.515ZM467.515 344.048C474.695 344.048 480.515 338.228 480.515 331.048H470.515C470.515 332.705 469.172 334.048 467.515 334.048V344.048Z"
      className={cn(
        'fill-current text-primary dark:text-zinc-100',
        rest.className,
      )}
    />
    <path
      d="M165.742 386.459C162.98 386.459 160.742 388.698 160.742 391.459C160.742 394.22 162.98 396.459 165.742 396.459V386.459ZM165.742 396.459H462.445V386.459H165.742V396.459Z"
      className={cn(
        'fill-current text-primary dark:text-zinc-100',
        rest.className,
      )}
    />
    <path
      d="M208.504 439.089C205.742 439.089 203.504 441.328 203.504 444.089C203.504 446.851 205.742 449.089 208.504 449.089V439.089ZM208.504 449.089H355.21V439.089H208.504V449.089ZM358.21 452.089V503.522H368.21V452.089H358.21ZM371.21 516.522H402.71V506.522H371.21V516.522ZM358.21 503.522C358.21 510.702 364.031 516.522 371.21 516.522V506.522C369.554 506.522 368.21 505.179 368.21 503.522H358.21ZM355.21 449.089C356.867 449.089 358.21 450.433 358.21 452.089H368.21C368.21 444.91 362.39 439.089 355.21 439.089V449.089Z"
      className={cn(
        'fill-current text-primary dark:text-zinc-100',
        rest.className,
      )}
    />
    <mask id="path-5-inside-1_717_689" fill="white">
      <path d="M374.794 135.796C374.794 151.438 362.114 164.118 346.472 164.118C330.83 164.118 318.15 151.438 318.15 135.796C318.15 120.154 330.83 107.474 346.472 107.474C362.114 107.474 374.794 120.154 374.794 135.796ZM329.479 135.796C329.479 145.181 337.087 152.789 346.472 152.789C355.857 152.789 363.465 145.181 363.465 135.796C363.465 126.411 355.857 118.803 346.472 118.803C337.087 118.803 329.479 126.411 329.479 135.796Z" />
    </mask>
    <path
      d="M374.794 135.796C374.794 151.438 362.114 164.118 346.472 164.118C330.83 164.118 318.15 151.438 318.15 135.796C318.15 120.154 330.83 107.474 346.472 107.474C362.114 107.474 374.794 120.154 374.794 135.796ZM329.479 135.796C329.479 145.181 337.087 152.789 346.472 152.789C355.857 152.789 363.465 145.181 363.465 135.796C363.465 126.411 355.857 118.803 346.472 118.803C337.087 118.803 329.479 126.411 329.479 135.796Z"
      fill="#F45E0C"
      stroke="#F45E0C"
      strokeWidth={4.38586}
      mask="url(#path-5-inside-1_717_689)"
    />
    <mask id="path-6-inside-2_717_689" fill="white">
      <path d="M504.177 257.756C504.177 273.398 491.497 286.078 475.855 286.078C460.214 286.078 447.534 273.398 447.534 257.756C447.534 242.114 460.214 229.434 475.855 229.434C491.497 229.434 504.177 242.114 504.177 257.756ZM458.862 257.756C458.862 267.141 466.47 274.749 475.855 274.749C485.24 274.749 492.848 267.141 492.848 257.756C492.848 248.371 485.24 240.763 475.855 240.763C466.47 240.763 458.862 248.371 458.862 257.756Z" />
    </mask>
    <path
      d="M504.177 257.756C504.177 273.398 491.497 286.078 475.855 286.078C460.214 286.078 447.534 273.398 447.534 257.756C447.534 242.114 460.214 229.434 475.855 229.434C491.497 229.434 504.177 242.114 504.177 257.756ZM458.862 257.756C458.862 267.141 466.47 274.749 475.855 274.749C485.24 274.749 492.848 267.141 492.848 257.756C492.848 248.371 485.24 240.763 475.855 240.763C466.47 240.763 458.862 248.371 458.862 257.756Z"
      fill="#F45E0C"
      stroke="#F45E0C"
      strokeWidth={4.38586}
      mask="url(#path-6-inside-2_717_689)"
    />
    <mask id="path-7-inside-3_717_689" fill="white">
      <path d="M517.334 390.176C517.334 405.818 504.654 418.498 489.013 418.498C473.371 418.498 460.691 405.818 460.691 390.176C460.691 374.535 473.371 361.854 489.013 361.854C504.654 361.854 517.334 374.535 517.334 390.176ZM472.02 390.176C472.02 399.561 479.628 407.169 489.013 407.169C498.398 407.169 506.006 399.561 506.006 390.176C506.006 380.791 498.398 373.183 489.013 373.183C479.628 373.183 472.02 380.791 472.02 390.176Z" />
    </mask>
    <path
      d="M517.334 390.176C517.334 405.818 504.654 418.498 489.013 418.498C473.371 418.498 460.691 405.818 460.691 390.176C460.691 374.535 473.371 361.854 489.013 361.854C504.654 361.854 517.334 374.535 517.334 390.176ZM472.02 390.176C472.02 399.561 479.628 407.169 489.013 407.169C498.398 407.169 506.006 399.561 506.006 390.176C506.006 380.791 498.398 373.183 489.013 373.183C479.628 373.183 472.02 380.791 472.02 390.176Z"
      fill="#F45E0C"
      stroke="#F45E0C"
      strokeWidth={4.38586}
      mask="url(#path-7-inside-3_717_689)"
    />
    <mask id="path-8-inside-4_717_689" fill="white">
      <path d="M458.126 510.788C458.126 526.429 445.446 539.109 429.804 539.109C414.162 539.109 401.482 526.429 401.482 510.788C401.482 495.146 414.162 482.466 429.804 482.466C445.446 482.466 458.126 495.146 458.126 510.788ZM412.811 510.788C412.811 520.173 420.419 527.781 429.804 527.781C439.189 527.781 446.797 520.173 446.797 510.788C446.797 501.403 439.189 493.795 429.804 493.795C420.419 493.795 412.811 501.403 412.811 510.788Z" />
    </mask>
    <path
      d="M458.126 510.788C458.126 526.429 445.446 539.109 429.804 539.109C414.162 539.109 401.482 526.429 401.482 510.788C401.482 495.146 414.162 482.466 429.804 482.466C445.446 482.466 458.126 495.146 458.126 510.788ZM412.811 510.788C412.811 520.173 420.419 527.781 429.804 527.781C439.189 527.781 446.797 520.173 446.797 510.788C446.797 501.403 439.189 493.795 429.804 493.795C420.419 493.795 412.811 501.403 412.811 510.788Z"
      fill="#F45E0C"
      stroke="#F45E0C"
      strokeWidth={4.38586}
      mask="url(#path-8-inside-4_717_689)"
    />
    <path
      d="M291.578 539.482H39.6753C26.4205 539.482 15.6753 528.737 15.6753 515.482V190.629C15.6753 182.53 19.7607 174.976 26.5395 170.543L242.985 28.9929C250.476 24.0939 260.071 23.7706 267.875 28.1542L417.175 112.021"
      stroke="#0C68F4"
      strokeWidth={16}
      strokeLinecap="round"
      className={cn('stroke-primary dark:stroke-zinc-100', rest.className)}
    />
  </svg>
);

export const IconSun: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z" />
    <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" />
  </svg>
);

export const IconMoon: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M12.4599 22.75C12.2899 22.75 12.1199 22.75 11.9499 22.74C6.34995 22.49 1.66995 17.98 1.27995 12.48C0.939948 7.75999 3.66995 3.34999 8.06995 1.49999C9.31995 0.979992 9.97995 1.37999 10.2599 1.66999C10.5399 1.94999 10.9299 2.59999 10.4099 3.78999C9.94995 4.84999 9.71995 5.97999 9.72995 7.13999C9.74995 11.57 13.4299 15.33 17.9199 15.51C18.5699 15.54 19.2099 15.49 19.8299 15.38C21.1499 15.14 21.6999 15.67 21.9099 16.01C22.1199 16.35 22.3599 17.08 21.5599 18.16C19.4399 21.06 16.0699 22.75 12.4599 22.75ZM2.76995 12.37C3.10995 17.13 7.16995 21.03 12.0099 21.24C15.2999 21.4 18.4199 19.9 20.3399 17.28C20.4899 17.07 20.5599 16.92 20.5899 16.84C20.4999 16.83 20.3399 16.82 20.0899 16.87C19.3599 17 18.5999 17.05 17.8499 17.02C12.5699 16.81 8.24995 12.38 8.21995 7.15999C8.21995 5.77999 8.48995 4.44999 9.03995 3.19999C9.13995 2.97999 9.15995 2.82999 9.16995 2.74999C9.07995 2.74999 8.91995 2.76999 8.65995 2.87999C4.84995 4.47999 2.48995 8.29999 2.76995 12.37Z" />
  </svg>
);

export const IconSearch: FC<IconProps> = ({
  color = '#292D32',
  size = '20',
  ...rest
}) => (
  <svg
    {...rest}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      'fill-current text-zinc-700 dark:text-zinc-100',
      rest.className,
    )}
  >
    <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" />
    <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" />
  </svg>
);
