using System;

class Demo
{
    static void Main(String[] args)
    {
        Console.WriteLine("helo");
        Console.ReadLine();
        Inter inter = new Inter();
        inter.mbox();
    }
}


class Inter
{
    public int mbox()
    {
        Console.WriteLine("this is method");
    }
}