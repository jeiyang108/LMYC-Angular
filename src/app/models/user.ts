import { EmergencyContact } from '../models/emergency-contact';
export interface User {
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

    //
    EmergencyContactName1: string;
    EmergencyContactName2: string;
    EmergencyContactPhone1: string;
    EmergencyContactPhone2: string;

//Boat stuff
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
}