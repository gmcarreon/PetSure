using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PetSure.Controllers.api
{
    public class PetController : ApiController
    {
        // GET: api/Pet
        public IEnumerable<string> Get()
        {
            return new string[] { "Rover", "Fido","Fixie" };
        }

        // GET: api/Pet/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pet
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Pet/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Pet/5
        public void Delete(int id)
        {
        }
    }
}
