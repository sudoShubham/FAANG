#include<iostream>
using namespace std;

int fun1(int n){
    if(n>0){
        cout<<n<<" ";
        fun1(n-1);
    }
}

int fun2(int n){
    if(n>0){
        fun2(n-1);
        cout<<n<<" ";
    }
}


int main(){
    fun1(4);
    fun2(3);
}