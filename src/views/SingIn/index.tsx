import { useTranslation } from 'react-i18next';

export default function SignUp() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("SignIn")}</h1>
        </div>
    );
}