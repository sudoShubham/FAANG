#include<iostream>
using namespace std;
struct rectangle{
    int length, breadth;
};

void initializeRect(struct rectangle *r,int l,int b){
    r->length = l;
    r->breadth = b;
}

void changeLength(struct rectangle *r,int newLength){
    r->length = newLength;
}
void changeBreadth(struct rectangle *r,int newBreadth){
    r->breadth = newBreadth;
}

struct rectangle * createRectangle(){
    struct rectangle *p;
    p =  new rectangle;
    return p;
}

int main(){
    struct rectangle *r1 = createRectangle();
    // struct rectangle r1;
    // initializeRect(&r1,20,10);
    // cout<<r1.length<<" "<<r1.breadth;

    r1->length = 10;
    r1->breadth = 10;
    cout<<r1->length<<" "<<r1->breadth;

}