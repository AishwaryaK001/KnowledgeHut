package com.example.app;

import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        
        String name;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the word");
        name = sc.nextLine();
        int length = name.length(); 
        System.out.println("The length of the Word \""+name+"\" is: " +length);
    }
}
