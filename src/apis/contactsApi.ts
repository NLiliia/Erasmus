import {Contact, ContactFormInput, Image} from "@/types";
import {api} from "@/apis/api.ts";

export const sendContactMessage = async (data: ContactFormInput) => {
    const response = await api.post('/contacts', data);
    
    return response.data;
}

export const getContacts = async (): Promise<Contact[]> => {
    const res = await api.get("/contacts");
    return res.data.contacts;
};