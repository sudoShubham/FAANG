//
//  main.cpp
//  sumOfNaturalNumbers
//
//  Created by Shubham on 03/08/22.
//
// Time complexity : O(n)
// Space complexity : O(n)

//Formula for sum of n natural number: (n*(n+1))/2   <- Time and Space complexity: O(1)

#include <iostream>
using namespace std;

int sum(int n){
    int total;
    if(n>=1){
        total = n + sum(n-1);
        return total;
    }
    else{
        return  0;;
    }
    
}

int main(){
    int n = 3;
    int total = sum(n);
    cout<<total<<"\n";
}
