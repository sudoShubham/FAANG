#include<iostream>
using namespace std;

void display(int arr[],int size){
    
    for(int i = 0;i<size;i++){
        cout<<arr[i]<<" ";
    }
}

int main(){
    int a[] = {1,2,3,4,5};
    int length = 5;
    display(a,length);    //Pass by address,arrays can't be passed by value. 
}
