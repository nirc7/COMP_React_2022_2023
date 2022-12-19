using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    //[EnableCors(,)]
    public class StudentsController : ApiController
    {
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(StudentsDBMock.students);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Student stu2Return = StudentsDBMock.students.SingleOrDefault(stu=> stu.Id == id);
                if (stu2Return !=null)
                {
                    return Ok(stu2Return);
                }
                return Content( HttpStatusCode.NotFound,  $"student with id={id} was not found in get by ID!!!");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student value)
        {
            try
            {
                StudentsDBMock.students.Add(value);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + value.Id), value);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value)
        {
            try
            {
                Student stu2Update = StudentsDBMock.students.SingleOrDefault(stu => stu.Id == id);
                if (stu2Update != null)
                {
                    //stu2Update = value;//error! ref type
                    stu2Update.Name = value.Name;
                    stu2Update.Grade = value.Grade;
                    return Ok(stu2Update);
                }
                return Content(HttpStatusCode.NotFound, $"student with id={id} was not found in Put!!!");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student stu2Delete = StudentsDBMock.students.SingleOrDefault(stu => stu.Id == id);
                if (stu2Delete != null)
                {
                    StudentsDBMock.students.Remove(stu2Delete);
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound, $"student with id={id} was not found in Delete!!!");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex); 
            }
        }
    }
}
