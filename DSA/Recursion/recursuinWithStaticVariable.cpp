#include<iostream>
using namespace std;

int fun1(int n){
    static int x = 0;
    if(n>0){
        x++;
        fun1(n-1);
    }
    return 0;
}

int main(){
    int r;
    
}