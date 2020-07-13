<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Cliente.aspx.cs" Inherits="WebT2C.Cliente" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    
   
    <div class="row">
        <h1>Clientes</h1>
    </div>
    <div class="row">
        <div class="col-12">
            <a class="btn btn-secundary" href="AdicionarCliente.aspx"><i class="glyphicon glyphicon-plus"></i> Adicionar</a>
        </div>
    </div>
    <br />
    <div class="row">
        <div class="col-12">
            <asp:GridView OnRowDeleting="gridCliente_RowDeleting" OnSelectedIndexChanged="gridCliente_SelectedIndexChanged" ID="gridCliente" CssClass="table table-responsive-sm table-responsive-md table-hover" HeaderStyle-BackColor="LightBlue" runat="server" AutoGenerateColumns="false">
                <Columns>
                    <asp:CommandField ButtonType="Button" ControlStyle-CssClass="btn btn-secundary text-center" DeleteText="Deletar" HeaderText="Opções" SelectText="Editar" ShowSelectButton="true" ShowDeleteButton="true"/>
                    <asp:BoundField DataField="id" HeaderText="ID" >
                        
                    </asp:BoundField>
                    <asp:TemplateField HeaderText="Razão Social">
                        <ItemTemplate> <%#Eval("razao") %></ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="CNPJ">
                        <ItemTemplate> <%#Eval("cnpj") %></ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="E-mail">
                        <ItemTemplate> <%#Eval("email") %></ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Site">
                        <ItemTemplate> <%#Eval("site") %></ItemTemplate>
                    </asp:TemplateField>
                    
                </Columns>
            </asp:GridView>
        </div>
    </div>

</asp:Content>
