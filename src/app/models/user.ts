import { EmergencyContact } from '../models/emergency-contact';
export class User {
//Confidential info
    Email: string;
    UserName: string;
    Street: string;
    City: string;
    Province: string;
    Country: string;
    PostalCode: string;
    Password: string;
    ConfirmPassword: string;
    emergencyContacts: EmergencyContact;

//Boat stuff
    Credits: number;
    SailingQualifications: string;
    Skills: string;
    SailingExperience: string;
    MemberStatus: string;
    SkipperStatus: string;

    FirstName: string;
    LastName: string;
    MobilePhone: string;
    HomePhone: string;
    WorkPhone: string;
    id: string;
}

