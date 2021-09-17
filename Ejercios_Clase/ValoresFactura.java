/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mintic.cilco3;

import java.util.ArrayList;

/**
 *
 * @author Diana Carolina
 */
public class ValoresFactura {
    
    // Atributos
    ArrayList<Producto> productos = new ArrayList<>();  
  
    // Constructor
    public ValoresFactura() {
    }
  
    // Getters y Setters
    public ArrayList<Producto> getProductos() {
        return productos;
    }

    public void setProductos(ArrayList<Producto> productos) {
        this.productos = productos;
    }
    
    // Métodos
    public void agregarProducto(Producto p){
        this.productos.add(p);
    }   
    
    public double calcularIva(){
        double precioIva = 0;
        double sumatoriaIva = 0;
        for (Producto item : this.productos){
            precioIva = (item.getPrecioConIva() - (item.getPrecioConIva() / (1+item.getIva()))) * item.getCantidad();
            sumatoriaIva += precioIva;
        }
        return sumatoriaIva;
    }
    
    public double calcularSubtotal(){
        double precioSinIva = 0;
        double sumatoriaSubtotal = 0;
        for (Producto item : this.productos){  
            precioSinIva = (item.getPrecioConIva() / (1+item.getIva())) * item.getCantidad();
            sumatoriaSubtotal += precioSinIva;
        }    
        return sumatoriaSubtotal;
    }
    
    public double calcularTotal(){
        double precioFinal = 0;
        double sumatoriaTotal = 0;
        for (Producto item : this.productos){
            precioFinal = item.getPrecioConIva() * item.getCantidad();
            sumatoriaTotal += precioFinal;
        }
        return sumatoriaTotal;
    } 
  
}
