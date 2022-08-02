//
//  main.cpp
//  powerUsingRecursion
//
//  Created by Shubham on 03/08/22.
//
//Time and Space complexity : O(n)

#include <iostream>
using namespace std;

int power(int base,int pow){
    if(base == 0) {
        return 1;
    }
    int answer;
    if(pow>=1){
        answer = base * power(base, pow - 1);
        return  answer;
    }
    else{
        return 1;
    }
}

int main(){
    cout<<power(2,4)<<"\n";
}
