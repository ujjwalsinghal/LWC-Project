public class StringArrayTest {
    public static list<string> generateStringArray(integer i)
    {
        list<string> abc=new list<string>();
        for(integer k=0;k<i;k++)
        {
            string q='Test '+k;
            abc.add(q);
          
        }
        System.debug(abc);    
        return abc;
    }

}