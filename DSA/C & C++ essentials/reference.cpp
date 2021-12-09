#include<iostream>
using namespace std;
int main(){
    int a = 10;  
    int &r = a;  
    cout<<r;                         //10
    cout<<"\n"<<a<<"\n";             //10
    cout<<&a<<"\n";                  //0x72fe04
    cout<<&r;                        //0x72fe04
}