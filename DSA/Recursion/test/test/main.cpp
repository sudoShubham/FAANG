#include<iostream>
using namespace std;

void sortArr(int arr[],int n){
    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}


int main(){
    int arr[] = {1,2,3,10,4,4,5,6};
    int size = 8;
    sortArr(arr,size);
    for(int i=0;i<size;i++){
        cout<<arr[i]<<" ";
    }
}
