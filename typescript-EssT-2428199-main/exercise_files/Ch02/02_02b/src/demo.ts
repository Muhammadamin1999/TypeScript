interface Contact extends Address {
    id: number;
    name: ContactName;  // here is allias instead of string i used ContactName
    birthDate?: Date;
    status: ContactStatus
}

interface Address{
    line: string;
    streetNumber: number;
}

enum ContactStatus{
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

let primaryContact: Contact={
    id: 234,
    name: 'Frank',
    birthDate: new Date("01-01-1999"),
    line: 'Line1',
    streetNumber: 123,
    status: ContactStatus.Active


}

type  ContactName = string; // this is allias supportive name

