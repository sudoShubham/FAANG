#include<iostream>
using namespace std;

//Call by value
// void swap(int x,int y){
//    int temp = x;
//     x = y;
//     y = temp;
// }

// int main(){
//     int a = 10;
//     int b = 20;
//     swap(a,b);
//     cout<<a<<" "<<b;
// }


//Call by address
// void swap(int *x,int *y){
//    int temp = *x;
//     *x = *y;
//     *y = temp;
// }

// int main(){
//     int a = 10;
//     int b = 20;
//     swap(&a,&b);
//     cout<<a<<" "<<b;
// }

//Call by Reference
void swap(int &x,int &y){
   int temp = x;
    x = y;
    y = temp;
}

int main(){
    int a = 10;
    int b = 20;
    swap(a,b);
    cout<<a<<" "<<b;
}