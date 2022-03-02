#include<iostream>
using namespace std;


//Tail Recursion   Time: O(n)
int fun1(int n){
    if(n>0){
        cout<<n<<" ";
        fun1(n-1);
    }
}


//Head Recursion    Time: O(n)
int fun2(int n){
    if(n>0){
        fun2(n-1);
        cout<<n<<" ";
    }
}



//Tree Recursion    time: O(2^n)    space: length of stack = O(n)
void fun3(int n){
        

    if(n>0){
        cout<<n<<" ";
        fun3(n-1);
        fun3(n-1);
    }

}



//Indirect Recursion
void funB(int n);

void funA(int n){
    if(n>0){
        cout<<n<<" ";
        funB(n-1);
    }
}

void funB(int n){
    if(n>0){
        cout<<n<<" ";
        funA(n/2);
    }
}


//Nested Recursion
int fun(int n){
    if(n>100){
        return n-10;
    }else{
        return fun(fun(n+11));
    }
}


int main(){
    // fun1(4);
    // fun2(3);
    // fun3(4);
    // funA(20);
    cout<<fun(95);
}