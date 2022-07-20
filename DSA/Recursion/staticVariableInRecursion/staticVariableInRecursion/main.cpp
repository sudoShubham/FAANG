//
//  main.cpp
//  staticVariableInRecursion
//
//  Created by Shubham on 20/07/22.
//

#include<iostream>
using namespace std;


int fun(int n){
    static int x = 0;
    if(n>0){
        x++;
        return fun(n-1) + x;
    }
    return 0;
}

int main(){
    int y = 5;
    cout<<fun(y);
}
