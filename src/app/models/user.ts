import { EmergencyContact } from '../models/emergency-contact';
export class User {
//Confidential info
    email: string;
    userName: string;
    street: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
    password: string;
    confirmPassword: string;
    emergencyContacts: EmergencyContact

//Boat stuff
    sailingQualifications: string;
    skills: string;
    sailingExperience: string;
    memberStatus: string;
    skipperStatus: string;

    firstName: string;
    lastName: string;
    mobilePhone: string;
    homePhone: string;
    workPhone: string;

    id: string;
}