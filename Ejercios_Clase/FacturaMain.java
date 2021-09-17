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
public class FacturaMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Producto ropa = new Producto("1010","camisas",116000,0.16,10);
        Producto ropa2 = new Producto("1020","pantalon",119000,0.19,10);
        
        ValoresFactura facturaRopa = new ValoresFactura();
        
        facturaRopa.agregarProducto(ropa);
        facturaRopa.agregarProducto(ropa2);
        
               
        System.out.println("Productos: " + facturaRopa.getProductos());
        System.out.println("Subtotal: " + facturaRopa.calcularSubtotal());
        System.out.println("IVA: " + facturaRopa.calcularIva());
        System.out.println("Total: " + facturaRopa.calcularTotal());
    }
    
}
