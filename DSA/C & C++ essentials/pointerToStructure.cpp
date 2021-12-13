#include<iostream>
using namespace std;

struct rectangle{
    int length;
    int breadth;
};

int main(){
    // struct rectangle r;
    // struct rectangle *ptr = &r;
    // ptr->length = 10;
    // (*ptr).breadth = 20;
    // cout<<ptr->length<<"\n";
    // cout<<r.breadth;

    struct rectangle *ptr;
    ptr = new struct rectangle;
    ptr->length = 100;
    (*ptr).breadth = 20; 
    cout<<ptr->length;   


}