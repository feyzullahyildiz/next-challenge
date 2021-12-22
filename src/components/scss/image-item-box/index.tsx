import Image from 'next/image';
import React from 'react'
import styles from './index.module.scss';

type BaseProps = {
    title?: string;
    subtitle: string;
    imageUrl: string;
    width?: number;
    height?: number;
    clientSideImg?: boolean
}
type ExtraLinkProps = {
    href?: any;
    onClick?: any;
}
type Props = BaseProps & ExtraLinkProps;
export const ImageItemBox = React.forwardRef<HTMLAnchorElement, Props>(
    ({ clientSideImg = false, width = 140, height = 200, href, onClick, ...props }, ref) => {

        const imageItem = clientSideImg ?
            <img
                src={props.imageUrl}
                alt={props.title} /> :
            <Image
                width={width}
                height={height}
                objectFit={'contain'}
                src={props.imageUrl}
                alt={props.title}
            />;
        return (
            <a className={styles.content} ref={ref} href={href} onClick={onClick}>
                <div className={styles.box}>
                    {imageItem}
                    {props.title && <h2 className={styles.contentTitle}>{props.title}</h2>}
                </div>
                <div className={styles.subtitle}>{props.subtitle}</div>
            </a>
        )
    })
