export interface ContactTopic {
    id: string;
    name: string;
    description: string;
    department: 'sales' | 'support' | 'karriere';
}

export type Department = 'sales' | 'support' | 'karriere';

const contactTopics: ContactTopic[] = [
    {
        id: 'business-talks',
        name: 'Business Talks',
        description: 'Talkrunden mit Partnern und Brachenfachleuten',
        department: 'sales',
    },
    {
        id: 'tech-talks',
        name: 'Tech Talks',
        description: 'Talkrunden mit tiefergehenden technischen Themen',
        department: 'sales',
    },
    {
        id: 'video-podcasts',
        name: 'Video Podcasts',
        description: 'Wiederkehrende Video-Podcasts mit verschiedenen Gästen',
        department: 'sales',
    },
    {
        id: 'erzähl-doch-mal',
        name: '"Erzähl doch mal"',
        description: 'Unbezahlbare Erinnerungen: Das Interview deines Lebens',
        department: 'sales',
    },
    {
        id: 'video-beleuchtung-mieten',
        name: 'Video-Beleuchtung mieten',
        description: 'Mieten Sie Aputure-Beleuchtung für Ihr Film-/Foto-Set',
        department: 'sales',
    },
    {
        id: 'allgemeine-anfragen',
        name: 'Allgemeine Anfragen',
        description: 'Allgemeine Anfragen und Unterstützung',
        department: 'sales',
    },
    {
        id: 'zahlungen-rechnungen',
        name: 'Zahlungen und Rechnungen',
        description: 'Fragen bezüglich Zahlungen und Rechnungen',
        department: 'support',
    },
    {
        id: 'technischer-support',
        name: 'Technischer Support',
        description: 'Fragen zu technischen Problemen',
        department: 'support',
    },
    {
        id: 'feedback',
        name: 'Feedback',
        description: 'Verbesserungsvorschläge und Feedback',
        department: 'support',
    },
    {
        id: 'sonstiges',
        name: 'Sonstiges',
        description: 'Sie haben ein anderes Anliegen?',
        department: 'support',
    },
    {
        id: 'job-application',
        name: 'Bewerbung',
        description: 'Bewerbung für offene Stellen',
        department: 'karriere',
    },
    {
        id: 'career-opportunities',
        name: 'Karrieremöglichkeiten',
        description: 'Informationen zu Karrieremöglichkeiten',
        department: 'karriere',
    },
    {
        id: 'internship',
        name: 'Praktikum',
        description: 'Anfragen zu Praktikumsplätzen',
        department: 'karriere',
    },
]

export const getTopicsByDepartment = (department: Department): ContactTopic[] => {
    return contactTopics.filter(topic => topic.department === department);
}

export const getDepartmentByIndex = (index: number): Department => {
    const departments: Department[] = ['sales', 'support', 'karriere'];
    return departments[index];
}

export default contactTopics;