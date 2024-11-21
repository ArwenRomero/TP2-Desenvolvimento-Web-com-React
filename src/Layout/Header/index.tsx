import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../../styles/components/header.scss";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="header__logo">
                <h1>{t("app_title")}</h1>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/tp2/" className="header__nav-link">
                            {t("home")}
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/tp2/signin" className="header__nav-link">
                            {t("signIn")}
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/tp2/signup" className="header__nav-link">
                            {t("signUp")}
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/tp2/settings" className="header__nav-link">
                            {t("settings")}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}