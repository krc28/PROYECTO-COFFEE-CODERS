/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mintic.cilco3;


/**
 *
 * @author Diana Carolina
 */
public class Producto {
    
    // Atributos
    private String codigo;
    private String producto;
    private double precioConIva;
    private double iva;
    private int cantidad;
    
    // Constructor
    public Producto(String codigo, String producto, double precioConIva, double iva, int cantidad) {
        this.codigo = codigo;
        this.producto = producto;
        this.precioConIva = precioConIva;
        this.iva = iva;
        this.cantidad = cantidad;
    }

    // Getters y Setters
    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public double getPrecioConIva() {
        return precioConIva;
    }

    public void setPrecioConIva(double precioConIva) {
        this.precioConIva = precioConIva;
    }

    public double getIva() {
        return iva;
    }

    public void setIva(double iva) {
        this.iva = iva;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    
    
    
    @Override
    public String toString() {
        return
            "\n    { " +
            "Codigo: " + this.codigo +
            ", Producto: " + this.producto +
            ", PrecioConIva: " + this.precioConIva +
            ", Iva: " + this.iva +
            ", Cantidad: " + this.cantidad +  
            " }";
    }
}
