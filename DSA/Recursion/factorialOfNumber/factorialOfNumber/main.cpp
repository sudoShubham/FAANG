//
//  main.cpp
//  factorialOfNumber
//
//  Created by Shubham on 03/08/22.
//
//Time and Space complexity: O(n)

#include <iostream>
using namespace std;

int factorial(int n){
    int fact;
    if(n>1){
        fact = n * factorial(n-1);
        return fact;
    }
    else{
        return 1;
    }
}

int main(){
    int n = 5;
    cout<<factorial(n)<<"\n";
}
