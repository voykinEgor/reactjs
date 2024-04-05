import styles from './Footer.module.scss'

const Footer = () =>{
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footer_links}>
                    <div className={styles.footer_box}>
                        <p>Социальные сети университета</p>
                        <a href="https://vk.com/unidubna_official">VK</a>
                        <a href="https://t.me/unidubna_official">Telegram</a>
                        <a href="https://new2.uni-dubna.ru/">Сайт</a>
                    </div>
                    <div className={styles.footer_box}>
                        <p>Социальные сети автора</p>
                        <a href="https://vk.com/ku_kezh">VK</a>
                        <a href="https://t.me/kukezh">Telegram</a>
                        <p></p>
                    </div>
                    
                </div>
                <div classname={styles.footer_author}>
                        <p>Все права защищены. Автор - Войкин Егор 2251</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;