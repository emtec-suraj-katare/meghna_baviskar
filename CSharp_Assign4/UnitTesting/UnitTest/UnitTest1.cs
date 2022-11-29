using Microsoft.VisualStudio.TestTools.UnitTesting;
using Operation;
using System;
using System.Text;

namespace UnitTest
{
    [TestClass]
    public class testClass
    {
        public int a = 10, b = 20;
        [TestMethod]
        public void Testing()
        {
            Arithmetic arithmetic = new Arithmetic();
            Assert.AreEqual(30,arithmetic.sum(a,b));
            
        }

    }
}
