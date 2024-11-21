import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("not_found")}</h1>
            <Link to="/tp1/">{t("go_back_home")}</Link>
        </div>
    );
}