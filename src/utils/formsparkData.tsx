
    export default function prepareFormsparkData(formData: FormData) {
    return {
        _katja: formData.get('_katja'), // Honeypot field for spam protection
        organisation: formData.get('organisation') || '',
        salutation: formData.get('salutation') || '',
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        topic: formData.get('topic'),
        message: formData.get('message'),
    };
}