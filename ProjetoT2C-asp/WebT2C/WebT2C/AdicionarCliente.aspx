<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AdicionarCliente.aspx.cs" Inherits="WebT2C.AdicionarCliente" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <br /> <br />
    <div class="p-3">
          <div class="row">
            <div class="col-lg-8 mx-auto">
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    
                    
                    <div class="control-group">
                           <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Código</label><asp:TextBox runat="server" class="form-control" ID="id" type="text" readonly="true"/>
                                 <p class="help-block text-danger"></p>
                            </div>
                       </div>
                    
                      <div class="control-group">
                           <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Razão Social</label><asp:TextBox runat="server" class="form-control" ID="razao" type="text" placeholder="Razão Social" required="required" />
                                 <p class="help-block text-danger"></p>
                            </div>
                       </div>
                       <div class="control-group">
                              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                  <label>CNPJ</label><asp:TextBox runat="server" class="form-control" ID="cnpj" type="text" placeholder="CNPJ" required="required" />
                                  <p class="help-block text-danger"></p>
                               </div>
                        </div>
                        <div class="control-group">
                             <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                  <label>Email</label><asp:TextBox runat="server" class="form-control" ID="email" type="email" placeholder="Email" required="required" />
                                  <p class="help-block text-danger"></p>
                             </div>
                        </div>
                        <div class="control-group">
                              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                   <label>Site</label><asp:TextBox runat="server" class="form-control" ID="site" type="text" placeholder="Site" required="required" />
                                   <p class="help-block text-danger"></p>
                              </div>
                         </div>
                          <br>
                        <br /> 
                         <div class="col-12 col-sm-12 col-md-3">
                            <asp:Button ID="Button1" Text="Salvar" CssClass="btn btn-primary m-2" runat="server" OnClick="salvar_Click" />
                         </div>   
                    <div class="col-12 col-sm-12 col-md-3">
                            <a ID="Button2" class="btn btn-primary m-2" href="Cliente.aspx">Voltar</a>
                         </div>  
                 </form>

             </div>
          </div>
    </div>

    <!-- Tabela de Telefones --> 
    <br /> <br />
    
    <div class="row">
        <h1>Telefones</h1>
    </div>
    <br />
    <div class="row">
        <div class="col-12">
            <asp:TextBox Visible="false" ID="idTelefoneControle" runat="server"></asp:TextBox>
            <asp:TextBox ID="telefone" CssClass="form-control" runat="server"></asp:TextBox>
            <asp:Button Enabled="false" CssClass="btn btn-secundary" Text="Adicionar Telefone"  runat="server" ID="btnAddTelefone" OnClick="btnAddTelefone_Click"></asp:Button>
        </div>
    </div>
    <div class="row" style="margin-top:20px">
        <div class="col-12">
            <asp:GridView 
                OnRowDeleting="gridTelefone_RowDeleting" 
                OnRowEditing="gridTelefone_RowEditing" 
                OnRowUpdating="gridTelefone_RowUpdating" 
                OnRowCancelingEdit="gridTelefone_RowCancelingEdit"
                ID="gridTelefone" CssClass="table table-responsive-sm table-responsive-md table-hover mt-5" HeaderStyle-BackColor="LightBlue" runat="server" AutoGenerateColumns="false">
             <Columns>
                    <asp:CommandField ButtonType="Button"  ControlStyle-CssClass="btn btn-secundary text-center" DeleteText="Deletar" HeaderText="Opções" EditText="Editar" ShowEditButton="true" ShowDeleteButton="true"/>
                    <asp:BoundField DataField="idTelefone" HeaderText="ID" ReadOnly="true">
                    </asp:BoundField>
                    <asp:TemplateField HeaderText="Telefone">
                        <ItemTemplate> <%#Eval("telefone") %></ItemTemplate>
                        <EditItemTemplate>  
                                <asp:TextBox ID="txtTelefone" runat="server" Text='<%#Eval("telefone")%>'></asp:TextBox>  
                            </EditItemTemplate> 
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </div>
    </div>
</asp:Content>
