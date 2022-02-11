#include<iostream>
using namespace std;

int * createArray(int length){
    int *p;
    p = new int[length];
    for(int i = 0;i<10;i++){
        p[i] = i + 1;
    }
    return p;
}

int main(){
    int * ptr;
    ptr = createArray(10);
     for(int i = 0;i<10;i++){
        cout<<ptr[i]<<" ";
    }
}