//
//  main.cpp
//  RecursionHeadTail
//
//  Created by Shubham on 20/07/22.
//

#include <iostream>
using namespace std;

void tailRecursion(int n){
    if(n>0){
        cout<<n<<" ";
        tailRecursion(n-1);
    }
}

int main(){
    int x = 3;
    tailRecursion(x);
    cout<<"\n";
    return 0;
} 
