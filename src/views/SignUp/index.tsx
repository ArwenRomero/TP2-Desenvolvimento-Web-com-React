import { useTranslation } from 'react-i18next';

export default function SignUp() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("SignUp")}</h1>
        </div>
    );
}