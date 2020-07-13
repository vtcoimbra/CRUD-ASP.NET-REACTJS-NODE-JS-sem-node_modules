using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;

namespace WebT2C.Services
{
    public static class ClienteService
    {
        private static string url = "http://localhost:3003/sistema/";
        public static async Task<List<Classes.Cliente>> GetClientesAsync()
        {
            List<Classes.Cliente> cliente = null;
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(url);
                    client.Timeout = TimeSpan.FromSeconds(30);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));


                    HttpResponseMessage response = client.GetAsync("cliente").GetAwaiter().GetResult();
                    if (response.IsSuccessStatusCode)
                    {
                        cliente = await response.Content.ReadAsAsync<List<Classes.Cliente>>();
                    }
                }

            }
            catch (Exception ex)
            {

                throw;
            }
            return cliente;
        }

        public static async Task<Classes.Cliente> GetClienteAsync(int id)
        {
            Classes.Cliente cliente = null;
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(url);
                    client.Timeout = TimeSpan.FromSeconds(30);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));


                    HttpResponseMessage response = client.GetAsync("http://localhost:3003/sistema/cliente/"+id).GetAwaiter().GetResult();
                    if (response.IsSuccessStatusCode)
                    {
                        cliente = await response.Content.ReadAsAsync<Classes.Cliente>();
                    }
                }

            }
            catch (Exception ex)
            {

                throw;
            }
            return cliente;
        }


        public static async Task<Classes.Cliente> CreateClienteAsync(Classes.Cliente cliente)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(url);
                    client.Timeout = TimeSpan.FromSeconds(30);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.PostAsJsonAsync(
                    "cliente", cliente).GetAwaiter().GetResult();

                    response.EnsureSuccessStatusCode();

                    return response.Content.ReadAsAsync<Classes.Cliente>().GetAwaiter().GetResult();   
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<bool> UpdateClienteAsync(Classes.Cliente cliente)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(url);
                    client.Timeout = TimeSpan.FromSeconds(30);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.PutAsJsonAsync(
                    "cliente/" + cliente.id, cliente).GetAwaiter().GetResult();

                    response.EnsureSuccessStatusCode();

                    return response.IsSuccessStatusCode;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<bool> DeleteClienteAsync(int id)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(url);
                    client.Timeout = TimeSpan.FromSeconds(30);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.DeleteAsync(
                    "cliente/" + id).GetAwaiter().GetResult();

                    response.EnsureSuccessStatusCode();

                    return response.IsSuccessStatusCode;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}