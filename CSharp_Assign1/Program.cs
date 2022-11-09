using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

namespace ConsoleApp1
{
     internal class Program
     {
         
         static void Main(string[] args)
         {

     string data1 = "Hello";
     string data2 = "Mahima";
     string data3 = "How are you?";


     Console.WriteLine(string.Compare(data1, data2));
     Console.WriteLine(string.Compare(data2, data3));


     Console.WriteLine(string.Concat(data2, data3));


     Console.WriteLine(data3.Substring(4));


     var resultstring = new string(data1.ToCharArray().Reverse().ToArray());
     Console.WriteLine(resultstring);

     Console.WriteLine("Using Manual array:");
     compareString(data1, data2);
     concatString(data1, data3);
     reverse(data1);
     substring(data1, 2);

     Console.ReadLine();
 }
}





    //Question No. 2
    //2.	Write a C# program to validate an Email ID using – 
    //a.Custom logic with loop & conditions

     class Validation
     {
         static void Main(String[] args)
         {
             string emailInput = "meghna@gmail.com";
             Console.WriteLine(IsValideEmail(emailInput));
         }

         public static bool IsValideEmail(String email)
         {
             Regex emailRegex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", RegexOptions.IgnoreCase);
             return emailRegex.IsMatch(email);
         }
     }
    



    // Question No. 3
    //  3.	Write a C# program that demonstrates the use of Enums for countries – INDIA, AUSTRALIA, USA, JAPAN, FRANCE, ENGLAND

    class EnumCountries
    {
        enum Contries
        {
            INDIA,
            AUSTRALIA,
            USA,
            JAPAN, 
            FRANCE, 
            ENGLAND

        }
        static void Main(String[] args)
        {
            Contries city = Contries.INDIA;
            Console.WriteLine(city);
        }
    }





    // Question No. 4
    //4.Write a C# program which demoes the concept of OOPS – 
    //a.Class
    //b.Constructor
    //c.Method Overloading
    //d.Method Overriding
    //e.Inheritance

    //Take an example of – 
    //Bank Account – Saving, Current
    //Customer
    //Calculate Interest


    class Bank
    {
        public string name = "Bank Of India";
        public string city = "pune";

        public Bank()
        {
            int bankid = 1;
            int citycode = 201;
            Console.WriteLine("BankId {0}: and Citycode {0}",bankid,citycode);
        }

        
        static void Main(String[] args)
        {

            Console.WriteLine("Bank Details");
            Customer c = new Customer();
            Account a = new Account();
            c.Saving();
            c.Current();
            c.Interest(2000,2,2);
            Console.ReadLine();


        }

    }
    //class....
    class Account
    {
        public int[] AccNo = { 1, 2, 3, 5 };
        public int[] Balsave = { 30000, 50000, 25000, 1200 };
        public int[] Balcurr = { 2200, 50000, 1660,1222 };

        public void Display()
        {
           
        }
        public void Saving()
        {
            for(int i = 0; i < AccNo.Length; i++)
            {
                Console.WriteLine("Account no.{0} have {1} balance. ", AccNo[i], Balsave[i]);
            }
        }

        public void Current()
        {
            for (int i = 0; i < AccNo.Length; i++)
            {
                Console.WriteLine("Account no.{0} have {1} balance. ", AccNo[i], Balcurr[i]);
            }
        }

    }

    class Customer : Account
    {
        public int[] custermId = { 102, 102, 103, 104 };

        public int Interest(int p, int r, int t)
        {
            return (p * r * t) / 100;
        }

        public void Display()
        {
            for(int i = 0; i < custermId.Length; i++)
            {
                Console.WriteLine("CustomerId {0} have {1} AccountNo ", custermId[i], AccNo[i]);
            }
        }


    }

}






