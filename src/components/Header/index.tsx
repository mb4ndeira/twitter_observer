import styles from "./header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="/">
                <img src="/images/logo.png" alt="" />
                <h2>twitter<span>_observatory</span></h2>
            </a>
            {/* <SignInButton /> */}
        </header>
    )
}