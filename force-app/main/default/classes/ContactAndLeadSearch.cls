public class ContactAndLeadSearch {
    
    public static list<list<SObject>> searchContactsAndLeads(String a)
    {
        list<list<Sobject>> llist=[Find :a IN ALL FIELDS RETURNING CONTACT(lastname),Lead(Name)];
    	return llist;
    }

    
}