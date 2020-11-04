public class AccountHandler {
    public static Account insertNewAccount(String ab)
    {
        if(ab=='')
        {
            return null;
        }
        else
        {
        Account a=new Account(Name=ab);
        insert a;
        System.debug(a);
        return a;            
        }

    }

}