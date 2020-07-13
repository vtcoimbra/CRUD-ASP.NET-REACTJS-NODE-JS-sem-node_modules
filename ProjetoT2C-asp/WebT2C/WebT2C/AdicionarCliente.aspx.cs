using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebT2C.Classes;

namespace WebT2C
{
    public partial class AdicionarCliente : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string idQuery = Request.QueryString["id"];
                if (!string.IsNullOrEmpty(idQuery))
                {
                    int idCliente = Convert.ToInt32(idQuery);
                    Classes.Cliente cliente = Services.ClienteService.GetClienteAsync(idCliente).GetAwaiter().GetResult();


                    if (cliente != null)
                    {
                        id.Text = cliente.id.ToString();
                        razao.Text = cliente.razao;
                        cnpj.Text = cliente.cnpj.ToString();
                        email.Text = cliente.email;
                        site.Text = cliente.site;
                        CarregarGridTelefones(cliente.id);
                        btnAddTelefone.Enabled = true;
                    }

                }
            }
        }

        private void CarregarGridTelefones(int id)
        {
            List<Classes.Telefone> telefones = Services.TelefoneClienteService.GetTelefonesAsync(id).GetAwaiter().GetResult();
            gridTelefone.DataSource = telefones;
            gridTelefone.DataBind();
        }

        protected void salvar_Click(object sender, EventArgs e)
        {
            Classes.Cliente cliente = new Classes.Cliente();

            cliente.razao = razao.Text;
            cliente.cnpj = Convert.ToDouble(cnpj.Text);
            cliente.email = email.Text;
            cliente.site = site.Text;

            try
            {
                bool result = false;
               
                if (!string.IsNullOrEmpty(id.Text))
                {
                    
                    cliente.id = Convert.ToInt32(id.Text);
                     Services.ClienteService.UpdateClienteAsync(cliente).GetAwaiter().GetResult();
                }
                else
                {
                     id.Text = Services.ClienteService.CreateClienteAsync(cliente).GetAwaiter().GetResult().id.ToString();
                }

                btnAddTelefone.Enabled = true;
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "Alerta", "alert('Ocorreu um erro na aplicação: " + ex.Message + "')", true);
            }
      
        }

        protected void btnAddTelefone_Click(object sender, EventArgs e)
        {
            try
            {
                Classes.Telefone telefone = new Classes.Telefone();
                telefone.telefone = this.telefone.Text;
                telefone.clienteId = Convert.ToInt32(id.Text);

                Services.TelefoneClienteService.CreateTelefoneAsync(telefone).GetAwaiter().GetResult();
                this.telefone.Text = string.Empty;
                CarregarGridTelefones(Convert.ToInt32(id.Text));
            }
            catch (Exception)
            {

                throw;
            }


            
        }

        protected void gridTelefone_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            try
            {
                int idTelefone = Convert.ToInt32(gridTelefone.Rows[e.RowIndex].Cells[1].Text);
                Services.TelefoneClienteService.DeleteTelefoneAsync(idTelefone).GetAwaiter().GetResult();
                CarregarGridTelefones(Convert.ToInt32(id.Text));
            }
            catch (Exception)
            {

                throw;
            }
        }

        protected void gridTelefone_RowEditing(object sender, GridViewEditEventArgs e)
        {

            gridTelefone.EditIndex = e.NewEditIndex;
            CarregarGridTelefones(Convert.ToInt32(this.id.Text));
        }

        protected void gridTelefone_RowUpdating(object sender, GridViewUpdateEventArgs e)
        {
            try
            {
                Classes.Telefone tel = new Telefone();
                tel.telefone = ((TextBox)gridTelefone.Rows[e.RowIndex].FindControl("txtTelefone")).Text;
                tel.idTelefone = Convert.ToInt32(gridTelefone.Rows[e.RowIndex].Cells[1].Text);

                Services.TelefoneClienteService.UpdateTelefoneAsync(tel).GetAwaiter().GetResult();

                gridTelefone.EditIndex = -1;
                CarregarGridTelefones(Convert.ToInt32(id.Text));
            }
            catch (Exception)
            {

                throw;
            }
        
        }

        protected void gridTelefone_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
        {
            gridTelefone.EditIndex = -1;
            CarregarGridTelefones(Convert.ToInt32(id.Text));
        }
    }
}