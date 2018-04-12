import { EmergencyContact } from "./emergency-contact";
import { Booking } from "./booking";

export class User {
    public userName: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public memberStatus: string;
    public skipperStatus: string;
    public street: string;
    public city: string;
    public province: string;
    public postalCode: string;
    public country: string;
    public mobilePhone: string;
    public homePhone: string;
    public workPhone: string;
    public sailingQualifications: string;
    public skills: string;
    public sailingExperience: string;
    public credits: number;
    public emergencyContacts: EmergencyContact;
    public bookings: Booking[];
    constructor () {}
}
