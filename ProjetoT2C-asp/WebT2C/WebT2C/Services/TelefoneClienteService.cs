using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;

namespace WebT2C.Services
{
    public class TelefoneClienteService
    {
        private static string url = "http://localhost:3003/sistema/";

        public static async Task<List<Classes.Telefone>> GetTelefonesAsync(int idCliente)
        {
            List<Classes.Telefone> telefones = null;
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(url);
                    client.Timeout = TimeSpan.FromSeconds(30);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));


                    HttpResponseMessage response = client.GetAsync("telefone/" + idCliente).GetAwaiter().GetResult();
                    if (response.IsSuccessStatusCode)
                    {
                        telefones = await response.Content.ReadAsAsync<List<Classes.Telefone>>();
                    }
                }

            }
            catch (Exception ex)
            {

                throw;
            }
            return telefones;
        }

        public static async Task<bool> CreateTelefoneAsync(Classes.Telefone telefone)
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
                    "telefone", telefone).GetAwaiter().GetResult();

                    response.EnsureSuccessStatusCode();

                    return response.IsSuccessStatusCode;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public static async Task<bool> UpdateTelefoneAsync(Classes.Telefone telefone)
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
                    "telefone/" + telefone.idTelefone, telefone).GetAwaiter().GetResult();

                    response.EnsureSuccessStatusCode();

                    return response.IsSuccessStatusCode;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<bool> DeleteTelefoneAsync(int id)
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
                    "telefone/" + id).GetAwaiter().GetResult();

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