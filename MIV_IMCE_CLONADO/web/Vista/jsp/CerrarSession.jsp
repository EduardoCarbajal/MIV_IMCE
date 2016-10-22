<%-- 
    Document   : CerrarSession
    Created on : 30/10/2015, 09:35:24 AM
    Author     : David
--%>

<%@page import="javax.swing.JOptionPane"%>
<%@page contentType="text/html" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>JSP Page</title>
    </head>
    <body>
        <% 
                session.removeAttribute("usuario");
        %>
    </body>
</html>
