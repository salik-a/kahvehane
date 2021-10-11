export default function (errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz e-posta adresi";

        case "auth/email-already-exists":
            return "Kullanıcı zaten kayıtlı";

        case "auth/user-not-found":
            return "Kullanıcı bulunamadı";

        case "auth/weak-password":
            return "Şifre çok zayıf";

        case "auth/wrong-password":
            return "Şifre hatalı";

        default:
            return errorCode;
    }
}