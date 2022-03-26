import React from 'react';
import styles from './Footer.module.css';
import SocialLinks from '../SocialLinks/SocialLinks';
import FooterLinks from '../FooterLinks/FooterLinks';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <footer>
                <div className={styles.socialLinks}>
                    <SocialLinks />
                </div>
                <FooterLinks />
                <a className={styles.serviceLink}>Hizmet Kodu</a>
            </footer>
        </div>
    )
}

export default Footer