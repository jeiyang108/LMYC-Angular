import { EmergencyContact } from '../models/emergency-contact';
export class User {

    Email: string;
    UserName: string;
    FirstName: string;
    LastName: string;
    MemberStatus: string;
    SkipperStatus: string;
    Street: string;
    City: string;
    Province: string;
    Country: string;
    PostalCode: string;
    MobilePhone: string;
    HomePhone: string;
    WorkPhone: string;
    Credits: number;
    SailingQualifications: string;
    Skills: string;
    SailingExperience: string;
    emergencyContacts: EmergencyContact;
    
    Password: string;
    ConfirmPassword: string;

}

