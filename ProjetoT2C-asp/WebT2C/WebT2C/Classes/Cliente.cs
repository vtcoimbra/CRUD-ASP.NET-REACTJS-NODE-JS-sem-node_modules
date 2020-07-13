using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebT2C.Classes
{
    public class Cliente
    {
        public int  id { get; set; }
        public string razao { get; set; }
        public double cnpj { get; set; }
        public string email { get; set; }
        public string site { get; set; }

    }
}