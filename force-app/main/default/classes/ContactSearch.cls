public class ContactSearch {
    public static list<contact> searchForContacts(String a,String b)
    {
        list<contact> listcon=[Select Id From contact where lastname=:a AND MailingPostalCode=:b];
        return listcon;
    }

}