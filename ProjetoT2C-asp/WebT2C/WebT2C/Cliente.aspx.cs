using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
namespace WebT2C
{
    public partial class Cliente : System.Web.UI.Page
    {
       
        public Cliente()
        {

        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                CarregarGrid();
            }
        }

        private void CarregarGrid()
        {
            List<Classes.Cliente> clientes = Services.ClienteService.GetClientesAsync().GetAwaiter().GetResult();
            gridCliente.DataSource = clientes;
            gridCliente.DataBind();
        }

        protected void gridCliente_SelectedIndexChanged(object sender, EventArgs e)
        {
            GridView grid = (GridView)sender;

            string cod = grid.Rows[grid.SelectedIndex].Cells[1].Text;

            
            Response.Redirect("AdicionarCliente.aspx?id=" + cod);
        }


        protected void gridCliente_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            GridView grid = (GridView)sender;
            try
            {
                string cod = grid.Rows[e.RowIndex].Cells[1].Text;

                bool result = Services.ClienteService.DeleteClienteAsync(Convert.ToInt32(cod)).GetAwaiter().GetResult();

                if (result)
                {
                    CarregarGrid();
                }
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "Alerta", "alert('Ocorreu um erro na aplicação: " + ex.Message + "')", true);
            }
        }
    }
}